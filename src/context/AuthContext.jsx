import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get('/me');
                if (response.data && response.data.email) {
                    setUser({
                        email: response.data.email,
                        user_id: response.data.user_id
                    });
                }
            } catch (error) {
                // A 401 here is completely normal for a non-logged-in visitor.
                // The interceptor will NOT redirect for /me (it's in SKIP_REFRESH_URLS).
                setUser(null);
                console.log("No valid session found.");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Listen for the custom event dispatched by api.js when a token refresh fails.
    // This lets us redirect via React Router (no full page reload = no loop).
    useEffect(() => {
        const handleSessionExpired = () => {
            setUser(null);
            navigate('/login', { replace: true });
        };

        window.addEventListener('auth:session-expired', handleSessionExpired);
        return () => {
            window.removeEventListener('auth:session-expired', handleSessionExpired);
        };
    }, [navigate]);

    const login = async (email, password) => {
        try {
            const response = await api.post('/login', { email, password });

            // The backend sets the cookies automatically.
            // We just extract user details from the JSON response to update the UI state.
            const { user_id } = response.data;
            setUser({ email, user_id });

            return { success: true };
        } catch (error) {
            const detail = error.response?.data?.detail;
            return {
                success: false,
                message: typeof detail === 'string' ? detail : (detail?.message || 'Login failed'),
                errorCode: detail?.error
            };
        }
    };

    const signup = async (userId, email, password) => {
        try {
            await api.post('/signup', { user_id: userId, email, password });
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.detail || 'Signup failed'
            };
        }
    };

    const logout = async () => {
        try {
            // Call the backend to clear the HttpOnly cookies
            await api.post('/logout');
        } catch (error) {
            console.error("Error logging out", error);
        } finally {
            // Clear frontend state regardless of API success to ensure user is logged out locally
            setUser(null);
            // If they happen to have old localStorage tokens from before the update, clear them just in case
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_email');
            localStorage.removeItem('user_id');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
