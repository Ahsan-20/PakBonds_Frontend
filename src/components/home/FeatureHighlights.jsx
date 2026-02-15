import React from 'react';
import { Zap, Bell, Shield } from 'lucide-react';

const FeatureHighlights = () => {
    const features = [
        { icon: Zap, label: "Instant Results", desc: "Matched within milliseconds" },
        { icon: Bell, label: "Email Alerts", desc: "Never miss a winning draw" },
        { icon: Shield, label: "Secure Vault", desc: "Bank-grade encryption" }
    ];

    return (
        <div className="relative z-20 -mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6 mb-24 animate-fade-in-up delay-200">
            {features.map((item, i) => (
                <div key={i} className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
                    {/* Gradient Blob for Glow Effect */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/5 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-cyan-900/20">
                            <item.icon size={28} className="text-cyan-400 drop-shadow-md" />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-2 tracking-wide group-hover:text-cyan-400 transition-colors">{item.label}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-[200px]">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureHighlights;
