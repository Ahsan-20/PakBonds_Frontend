import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Lock, Globe, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
            <Helmet>
                <title>About Us | PakBonds - Premier Prize Bond Checking Platform</title>
                <meta name="description" content="Learn about PakBonds, Pakistan's most advanced and secure automated prize bond checking platform. Discover our mission to modernize bond tracking." />
                <link rel="canonical" href="https://pakbonds.com/about" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pakbonds.com/about" />
                <meta property="og:title" content="About Us | PakBonds" />
                <meta property="og:description" content="Learn about PakBonds, Pakistan's most advanced and secure automated prize bond checking platform." />
                <meta property="og:site_name" content="PakBonds" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://pakbonds.com/about" />
                <meta name="twitter:title" content="About Us | PakBonds" />
                <meta name="twitter:description" content="Learn about PakBonds, Pakistan's most advanced automated prize bond checking platform." />

                <script type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About PakBonds",
                            "description": "Information about PakBonds mission, vision, and features.",
                            "url": "https://pakbonds.com/about"
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://pakbonds.com/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "About Us",
                                    "item": "https://pakbonds.com/about"
                                }
                            ]
                        }
                    ])}
                </script>
            </Helmet>

            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Hero Section */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        REDEFINING BOND TRACKING
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PakBonds</span>
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        The advanced automated prize bond checking platform built for the modern Pakistani investor. Secure, fast, and always free.
                    </p>
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="glass-card p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-500" />
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                            <Globe size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            To democratize access to financial tools for every Pakistani. We believe that tracking your investments shouldn't be a manual chore. Our mission is to provide a seamless, automated experience that keeps you informed about your prize bond wins instantly.
                        </p>
                    </div>

                    <div className="glass-card p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-500" />
                        <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 text-blue-400">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            A future where financial management is effortless. We envision PakBonds as the central hub for all prize bond related activities, from checking results to analyzing trends, ensuring no win ever goes unclaimed again.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Bank-Grade Security",
                                desc: "Your data is encrypted and secure. We prioritize your privacy above all else.",
                                color: "text-green-400",
                                bg: "bg-green-500/10",
                                border: "border-green-500/20"
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Lightning Fast",
                                desc: "Our advanced algorithms check thousands of bonds in milliseconds.",
                                color: "text-yellow-400",
                                bg: "bg-yellow-500/10",
                                border: "border-yellow-500/20"
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "User Focused",
                                desc: "Designed with you in mind. Intuitive interfaces and helpful support.",
                                color: "text-purple-400",
                                bg: "bg-purple-500/10",
                                border: "border-purple-500/20"
                            },
                            {
                                icon: <Lock className="w-6 h-6" />,
                                title: "Privacy First",
                                desc: "We don't sell your data. Your bond numbers are yours alone.",
                                color: "text-red-400",
                                bg: "bg-red-500/10",
                                border: "border-red-500/20"
                            },
                            {
                                icon: <Award className="w-6 h-6" />,
                                title: "Official Data",
                                desc: "Results sourced directly from official National Savings draw lists.",
                                color: "text-blue-400",
                                bg: "bg-blue-500/10",
                                border: "border-blue-500/20"
                            },
                            {
                                icon: <Globe className="w-6 h-6" />,
                                title: "Accessible",
                                desc: "Available 24/7 from any device, anywhere in the world.",
                                color: "text-cyan-400",
                                bg: "bg-cyan-500/10",
                                border: "border-cyan-500/20"
                            }
                        ].map((feature, i) => (
                            <div key={i} className={`p-6 rounded-xl border ${feature.border} bg-[#0a0a0b] hover:bg-white/[0.02] transition-colors`}>
                                <div className={`w-10 h-10 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-4`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass-card p-12 text-center rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-20" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Winning?</h2>
                        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
                            Join thousands of users who trust PakBonds for their prize bond checking needs. Sign up today and never miss a draw.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/signup" className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow flex items-center gap-2">
                                Create Free Account <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
