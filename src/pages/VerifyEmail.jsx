import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../api';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const navigate = useNavigate();

    const [status, setStatus] = useState('loading'); // loading, success, error
    const [message, setMessage] = useState('Verifying your email...');

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setStatus('error');
                setMessage('Verification token is missing.');
                return;
            }

            try {
                const response = await api.post('/verify-email', { token });
                setStatus('success');
                setMessage(response.data.message || 'Email verified successfully!');

                // Redirect to dashboard after 3 seconds
                setTimeout(() => {
                    navigate('/dashboard');
                }, 3000);
            } catch (err) {
                setStatus('error');
                setMessage(err.response?.data?.detail || 'Failed to verify email. The link may be expired or invalid.');
            }
        };

        verifyToken();
    }, [token, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-center">
                {status === 'loading' && (
                    <div className="flex flex-col items-center">
                        <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Verifying...</h2>
                        <p className="text-slate-600 dark:text-slate-400">{message}</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Success!</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">{message}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">Redirecting to dashboard...</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="flex flex-col items-center">
                        <XCircle className="h-12 w-12 text-rose-500 mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Verification Failed</h2>
                        <p className="text-rose-600 dark:text-rose-400 mb-6">{message}</p>
                        <button
                            onClick={() => navigate('/login')}
                            className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                        >
                            Return to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
