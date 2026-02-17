import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, ArrowRight, Wallet, Award, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PrizeBondsHub = () => {
    const bonds = [
        { value: '100', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', desc: 'The most accessible bond. First prize: Rs. 700,000.' },
        { value: '200', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', desc: 'Popular choice. First prize: Rs. 750,000.' },
        { value: '750', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', desc: 'Mid-range investment. First prize: Rs. 1,500,000.' },
        { value: '1500', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', desc: 'High reward tier. First prize: Rs. 3,000,000.' },
        { value: '25000', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20', desc: 'Premium Bond (Registered). First prize: Rs. 50,000,000.' },
        { value: '40000', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', desc: 'Highest value Premium Bond. First prize: Rs. 80,000,000.' },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6">
            <Helmet>
                <title>Prize Bonds List | PakBonds</title>
                <meta name="description" content="Explore all Prize Bond denominations in Pakistan. View schedules, winning lists, and details for 100, 200, 750, 1500, 25000, and 40000 bonds." />
            </Helmet>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                        Choose Your Bond
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Select a denomination to view detailed draw schedules, search previous results, and analyze winning odds.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bonds.map((bond) => (
                        <Link
                            key={bond.value}
                            to={`/bonds/${bond.value}`}
                            className={`group relative p-8 rounded-2xl border ${bond.border} ${bond.bg} hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm overflow-hidden`}
                        >
                            {/* Hover Gradient Bloom */}
                            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${bond.bg.replace('/10', '/30')} blur-3xl group-hover:blur-2xl transition-all duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-[#0a0a0b]/50 border border-white/5 ${bond.color}`}>
                                        <Wallet size={28} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 border border-white/10 px-3 py-1 rounded-full">
                                        Rs. {bond.value}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                    Rs. {bond.value} Note
                                </h2>
                                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                    {bond.desc}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-4 transition-all">
                                    View Details <ArrowRight size={16} className={`${bond.color}`} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Info Section */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0b]/50">
                        <Award className="text-cyan-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Winning Lists</h3>
                        <p className="text-zinc-400 text-sm">Access complete historical records and searchable draw lists for every denomination.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0b]/50">
                        <TrendingUp className="text-purple-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Draw Schedules</h3>
                        <p className="text-zinc-400 text-sm">Stay ahead with accurate, up-to-date draw schedules for the entire year.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0b]/50">
                        <Wallet className="text-green-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Premium Bonds</h3>
                        <p className="text-zinc-400 text-sm">Special section for registered Premium Bonds (25k & 40k) with bi-annual profit rates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrizeBondsHub;
