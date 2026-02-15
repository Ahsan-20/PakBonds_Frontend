import React from 'react';
import { Zap, Bell, Shield } from 'lucide-react';

const FeatureHighlights = () => {
    const features = [
        { icon: Zap, label: "Instant Results", desc: "Matched within milliseconds" },
        { icon: Bell, label: "Email Alerts", desc: "Never miss a winning draw" },
        { icon: Shield, label: "Secure Vault", desc: "Bank-grade encryption" }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in delay-300 px-4 sm:px-6 mb-20">
            {features.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center hover:bg-white/[0.04] transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon size={20} className="text-cyan-400" />
                    </div>
                    <h3 className="text-white font-bold mb-1">{item.label}</h3>
                    <p className="text-sm text-zinc-500 text-center">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureHighlights;
