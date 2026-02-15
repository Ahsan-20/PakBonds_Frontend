import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calculator, TrendingDown, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxInformation = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>Prize Bond Tax Rates 2026 (Filer vs Non-Filer) | Pakistan</title>
                <meta name="description" content="Current withholding tax rates on Prize Bond winnings in Pakistan. Save 15% on your winnings by becoming a Filer. Complete breakdown." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-rose-400 font-mono text-sm tracking-widest uppercase mb-4 block">Financial Update</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Tax on <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">Prize Winnings</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    The government deducts tax at the source before you receive your prize money. Here is how much you will actually take home.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">

                <h2 className="text-2xl font-bold text-white mt-8 mb-6">Current Tax Rates (2025-26)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-emerald-900/20 border border-emerald-500/20 p-8 rounded-3xl text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Calculator size={100} />
                        </div>
                        <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2">For Filers</h3>
                        <div className="text-5xl font-bold text-white mb-4">15%</div>
                        <p className="text-emerald-200/70 text-sm">
                            Active Taxpayers appearing on the ATL list.
                        </p>
                    </div>

                    <div className="bg-rose-900/20 border border-rose-500/20 p-8 rounded-3xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <TrendingDown size={100} />
                        </div>
                        <h3 className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-2">For Non-Filers</h3>
                        <div className="text-5xl font-bold text-white mb-4">30%</div>
                        <p className="text-rose-200/70 text-sm">
                            Individuals not on the Active Taxpayer List.
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 mb-10">
                    <h3 className="text-lg font-bold text-white mb-4">Example Calculation: 1st Prize of Rs. 750 Bond</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Total Prize Amount:</span>
                            <span className="font-mono">Rs. 1,500,000</span>
                        </div>
                        <div className="flex justify-between text-emerald-400">
                            <span>Filer Deduction (15%):</span>
                            <span className="font-mono">-Rs. 225,000</span>
                        </div>
                        <div className="flex justify-between text-rose-400">
                            <span>Non-Filer Deduction (30%):</span>
                            <span className="font-mono">-Rs. 450,000</span>
                        </div>
                        <div className="pt-2 text-sm text-zinc-500 text-right">
                            *Non-filers lose an extra Rs. 225,000!
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Save Money?</h2>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">1</div>
                        <p><strong>File Your Returns:</strong> Become a Filer before claiming your prize.</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">2</div>
                        <p><strong>Check ATL Status:</strong> Ensure your name is active on FBR's list.</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">3</div>
                        <p><strong>Claim Online (Premium Bonds):</strong> Premium bonds are credited automatically, and tax is deducted based on your CNIC status at that moment.</p>
                    </li>
                </ul>

            </div>
        </article>
    );
};

export default TaxInformation;
