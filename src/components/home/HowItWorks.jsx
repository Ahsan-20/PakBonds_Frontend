import React from 'react';

const HowItWorks = () => {
    const steps = [
        { step: "01", title: "Upload Portfolio", desc: "Input your bond numbers manually or bulk import via CSV/Excel." },
        { step: "02", title: "System Scan", desc: "Our engine checks your bonds against 10+ years of draw history." },
        { step: "03", title: "Instant Notification", desc: "Receive an immediate alert if any match is found." }
    ];

    return (
        <section className="py-24 bg-white/[0.02] border-y border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Automated Intelligence</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Our system connects directly to official draw databases, cross-referencing your portfolio instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((item, i) => (
                        <div key={i} className="relative group">
                            <div className="text-8xl font-black text-white/[0.03] absolute -top-10 -left-6 select-none transition-colors group-hover:text-white/[0.05]">
                                {item.step}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
