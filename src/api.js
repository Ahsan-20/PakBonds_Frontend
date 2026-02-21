import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'; // Fallback for local development

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000, // 30 second timeout
    withCredentials: true, // Send cookies with every request
    headers: {
        'Content-Type': 'application/json',
    },
});

// These endpoints are allowed to fail with 401 without triggering a refresh/redirect.
// /me — checked on page load to detect existing session; a 401 just means "not logged in", that's fine.
// /refresh — if this fails there's no valid session; we handle it below.
// /login  — obviously shouldn't redirect to login if login itself returns 401 (wrong credentials).
const SKIP_REFRESH_URLS = ['/me', '/refresh', '/login'];

// Add a response interceptor to handle 401 errors for silent token refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });

    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const requestUrl = originalRequest?.url || '';

        // For these special endpoints, just reject and let the caller handle it.
        // This prevents the /me check on page load from triggering a refresh loop.
        if (SKIP_REFRESH_URLS.some(url => requestUrl.startsWith(url))) {
            return Promise.reject(error);
        }

        if (error.response && error.response.status === 401 && !originalRequest._retry) {

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject })
                }).then(() => {
                    return api(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // The cookies will automatically be sent to the /refresh endpoint.
                await axios.post(`${API_BASE_URL}/refresh`, {}, { withCredentials: true });

                // If successful, the new access_token cookie is now set by the browser.
                processQueue(null);

                // Retry the original request (which will now include the new access_token cookie)
                return api(originalRequest);

            } catch (_error) {
                processQueue(_error);
                // Use a custom event so React Router (not window.location) handles the redirect.
                // This avoids a full page reload that would restart the auth check and create a loop.
                window.dispatchEvent(new CustomEvent('auth:session-expired'));
                return Promise.reject(_error);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
