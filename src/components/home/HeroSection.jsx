import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse-slow" />
                <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] animate-pulse-slow delay-2000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
            </div>

            <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-8 animate-fade-in backdrop-blur-md hover:border-cyan-500/40 transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    <span className="text-xs text-cyan-300 font-mono tracking-wider">SYSTEM OPTIMIZED FOR 2026 DRAWS</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 animate-slide-up">
                    <span className="text-white">WINNING IS</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">AUTOMATED</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in delay-100">
                    Stop searching through lists manually. <span className="text-white font-medium">Digitize your portfolio</span> and let our intelligent engine scan every draw for you.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
                    <Link
                        to="/signup"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Checking <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        to="/login"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-zinc-400 font-medium hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto"
                    >
                        Access Portal
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
