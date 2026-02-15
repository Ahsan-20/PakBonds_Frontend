import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, CreditCard, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToBuy = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>How to Buy Prize Bonds in Pakistan | 2026 Guide</title>
                <meta name="description" content="Step-by-step guide on buying National Savings Prize Bonds. Learn where to buy, required documents, and the difference between Standard vs Premium bonds." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Investment Guide</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    How to Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Prize Bonds</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    A safe, government-backed investment with a chance to become a millionaire. Here is everything you need to know to get started.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">

                {/* Available Denominations */}
                <h2 className="text-2xl font-bold text-white mt-8 mb-6">Available Denominations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[100, 200, 750, 1500, 7500, 15000].map(val => (
                        <div key={val} className="bg-zinc-900 border border-white/10 rounded-xl p-4 text-center">
                            <span className="text-lg font-bold text-white">Rs. {val.toLocaleString()}</span>
                            <span className="block text-xs text-zinc-500 mt-1">Standard</span>
                        </div>
                    ))}
                    {[25000, 40000].map(val => (
                        <div key={val} className="bg-gradient-to-br from-emerald-900/30 to-black border border-emerald-500/30 rounded-xl p-4 text-center">
                            <span className="text-lg font-bold text-emerald-400">Rs. {val.toLocaleString()}</span>
                            <span className="block text-xs text-emerald-500/70 mt-1">Premium</span>
                        </div>
                    ))}
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
                    <AlertTriangle className="text-yellow-400 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white mb-1">Important Note</h4>
                        <p className="text-sm text-yellow-200/70">
                            Regular (Bearer) Rs. 40,000 bonds have been discontinued. Only <strong>Premium Rs. 40,000</strong> bonds are currently valid for purchase and draws.
                        </p>
                    </div>
                </div>

                {/* Where to Buy */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Where to Buy?</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                            <MapPin className="text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">1. National Savings Centres</h3>
                            <p className="text-zinc-400">
                                The most reliable source. Visit any National Savings Centre (NSC) across Pakistan. You can buy any denomination here.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                            <CreditCard className="text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">2. Commercial Banks</h3>
                            <p className="text-zinc-400">
                                Designated branches of major banks (HBL, UBL, MCB, NBP, etc.) also sell prize bonds.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                            <ShieldCheck className="text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">3. State Bank of Pakistan</h3>
                            <p className="text-zinc-400">
                                You can purchase standard and premium bonds directly from SBP Banking Services Corporation field offices.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Buying Process */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Buying Process</h2>

                <h3 className="text-lg font-bold text-white mb-3 text-cyan-400">For Standard Bonds (100 - 15,000)</h3>
                <ol className="list-decimal list-inside space-y-2 mb-8 text-zinc-300">
                    <li>Visit the bank or centre with your CNIC (original + copy).</li>
                    <li>Fill out the purchase form (Application for Purchase of Prize Bonds).</li>
                    <li>Pay cash or provide a cheque.</li>
                    <li>Receive your physical bonds immediately. <strong>Keep them safe!</strong> These are "Bearer" bonds—whoever holds the paper owns the money.</li>
                </ol>

                <h3 className="text-lg font-bold text-white mb-3 text-emerald-400">For Premium Bonds (25,000 & 40,000)</h3>
                <ol className="list-decimal list-inside space-y-2 mb-8 text-zinc-300">
                    <li>Requires a bank account and valid CNIC.</li>
                    <li>Premium bonds are <strong>Registered</strong> in your name (safe from theft).</li>
                    <li>Profit is credited directly to your bank account automatically.</li>
                    <li>You will receive a certificate of ownership instead of a bearer bond.</li>
                </ol>

                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-black border border-emerald-500/20 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Already bought some?</h2>
                    <p className="text-white/50 mb-8">Save your numbers in our secure wallet to get automatic win alerts.</p>
                    <Link to="/manage-bonds" className="inline-flex items-center px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors">
                        Add to My Wallet
                    </Link>
                </div>

            </div>
        </article>
    );
};

export default HowToBuy;
