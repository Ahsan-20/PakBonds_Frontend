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

        // Prevent infinite loops if /refresh itself fails
        if (originalRequest.url === '/refresh') {
            if (!window.location.pathname.startsWith('/login')) {
                window.location.href = '/login';
            }
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
                if (!window.location.pathname.startsWith('/login')) {
                    window.location.href = '/login';
                }
                return Promise.reject(_error);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
