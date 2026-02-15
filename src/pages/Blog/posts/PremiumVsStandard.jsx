import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Check, X, Shield, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumVsStandard = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>Premium vs Standard Prize Bonds | Which is Better? (2026)</title>
                <meta name="description" content="Compare Premium (Registered) vs Standard (Bearer) Prize Bonds. Learn about profit rates, security, and prize differences." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-amber-400 font-mono text-sm tracking-widest uppercase mb-4 block">Comparison</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Premium vs. <span className="text-zinc-400">Standard</span> Bonds
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    Should you buy the old paper bonds or switch to the new Premium registered bonds? Here is the breakdown.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Standard Card */}
                    <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Standard (Bearer)</h2>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm">
                                <Check size={16} className="text-green-500" /> Small denominations (100-1500)
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Check size={16} className="text-green-500" /> Easy to buy/sell (like cash)
                            </li>
                            <li className="flex items-center gap-3 text-sm opacity-50">
                                <X size={16} className="text-red-500" /> No Bi-annual Profit
                            </li>
                            <li className="flex items-center gap-3 text-sm opacity-50">
                                <X size={16} className="text-red-500" /> Risk of Theft (Bearer)
                            </li>
                        </ul>
                    </div>

                    {/* Premium Card */}
                    <div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/20 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                        <h2 className="text-2xl font-bold text-amber-400 mb-4">Premium (Registered)</h2>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm">
                                <Check size={16} className="text-green-500" /> <strong>Pays Profit</strong> every 6 months
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Check size={16} className="text-green-500" /> <strong>Registered</strong> in your name (Safe)
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Check size={16} className="text-green-500" /> Prizes credited to Bank Account
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Check size={16} className="text-green-500" /> Highest Prizes (Rs. 80 Million)
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key Differences Explained</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <Shield className="text-cyan-400" size={20} /> Security
                        </h3>
                        <p className="text-zinc-400">
                            <strong>Standard Bonds</strong> are like cash. If you lose the paper, you lose the money.
                            <strong> Premium Bonds</strong> are digital and registered to your CNIC. Even if you lose the certificate, your money is safe.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <Coins className="text-amber-400" size={20} /> Dual Return (Profit + Prize)
                        </h3>
                        <p className="text-zinc-400">
                            Standard bonds only pay if you win a draw (which is lucky).
                            Premium bonds pay a <strong>guaranteed profit</strong> every 6 months (like a savings account) PLUS you still participate in the prize draws. It's a win-win.
                        </p>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-zinc-800/50 rounded-xl border-l-4 border-cyan-500">
                    <p className="text-white italic">
                        "For large investments (above 100k), we strongly recommend Premium bonds due to the safety and guaranteed profit returns."
                    </p>
                </div>

            </div>
        </article>
    );
};

export default PremiumVsStandard;
