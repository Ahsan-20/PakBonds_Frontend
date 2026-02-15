import React from 'react';

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0a1a]">
            {/* Background effects */}
            <div className="absolute inset-0 bg-mesh opacity-50"></div>

            {/* Loader container */}
            <div className="relative flex flex-col items-center">
                {/* Orbiting particles */}
                <div className="absolute w-32 h-32">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-purple-500"
                            style={{
                                animation: `orbit ${3 + i * 0.5}s linear infinite`,
                                animationDelay: `${i * 0.3}s`,
                                opacity: 0.6 - i * 0.15,
                            }}
                        />
                    ))}
                </div>

                {/* Pulsing rings */}
                <div className="absolute w-24 h-24 rounded-full border border-purple-500/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute w-32 h-32 rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>

                {/* Main coin */}
                <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)',
                        boxShadow: '0 0 40px rgba(245, 158, 11, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
                        animation: 'coin-spin 2s ease-in-out infinite',
                    }}
                >
                    {/* Coin emblem */}
                    <div className="text-2xl font-bold text-amber-900/80">₨</div>

                    {/* Shine effect */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
                        }}
                    />
                </div>

                {/* Loading text */}
                <div className="mt-8 text-center">
                    <p className="text-white/80 text-lg font-medium">{message}</p>
                    <div className="flex justify-center gap-1 mt-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-purple-500"
                                style={{
                                    animation: 'pulse-glow 1s ease-in-out infinite',
                                    animationDelay: `${i * 0.2}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
