import React from 'react';
import { ArrowLeft, BarChart3, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const WinningOdds = () => (
    <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
        <Helmet>
            <title>Prize Bond Winning Odds & Probability | 2026 Analysis</title>
            <meta name="description" content="Calculate your chances of winning a prize bond in Pakistan. Detailed odds analysis for 100, 200, 750, 1500, 25000, and 40000 denominations." />
        </Helmet>

        <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        <header className="mb-12">
            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">Market Analysis</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Understanding Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Winning Odds</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
                Replaced luck with logic. Here represents the mathematical probability of winning each prize bond denomination in 2026.
            </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-10">
                <div className="flex gap-4">
                    <BarChart3 className="shrink-0 text-purple-400" size={24} />
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">The Basic Math</h3>
                        <p className="text-sm text-purple-200/70">
                            In a typical series (e.g., 000001 to 999999), there are usually 1 million bonds.
                            Only a fixed number of prizes are distributed per series.
                            The more bonds you hold, the higher your statistical probability.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Odds by Denomination</h2>

            <div className="overflow-hidden rounded-xl border border-white/10 mb-8 bg-black/50">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-white font-bold">
                        <tr>
                            <th className="p-4">Bond (PKR)</th>
                            <th className="p-4">1st Prize</th>
                            <th className="p-4">2nd Prize</th>
                            <th className="p-4">Total Prizes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-cyan-400">100</td>
                            <td className="p-4">700,000</td>
                            <td className="p-4">200,000 (x3)</td>
                            <td className="p-4">1,203</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-blue-400">200</td>
                            <td className="p-4">750,000</td>
                            <td className="p-4">250,000 (x5)</td>
                            <td className="p-4">2,355</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-purple-400">750</td>
                            <td className="p-4">1,500,000</td>
                            <td className="p-4">500,000 (x3)</td>
                            <td className="p-4">1,700</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-pink-400">1,500</td>
                            <td className="p-4">3,000,000</td>
                            <td className="p-4">1,000,000 (x3)</td>
                            <td className="p-4">1,700</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-amber-400">25,000</td>
                            <td className="p-4">50,000,000</td>
                            <td className="p-4">15,000,000 (x3)</td>
                            <td className="p-4">1,700</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-rose-400">40,000</td>
                            <td className="p-4">80,000,000</td>
                            <td className="p-4">30,000,000 (x3)</td>
                            <td className="p-4">663</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Improve Your Odds</h2>
            <ul className="space-y-6">
                <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">1</div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Buy in Sequence</h3>
                        <p className="text-white/60">Buying a packet of 100 sequential numbers (e.g., ends in 00-99) guarantees that one number will match the last digit of any draw, statistically improving your coverage.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">2</div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Diversify Denominations</h3>
                        <p className="text-white/60">Don't put all your investment in one type. Smaller bonds (100, 200) have more frequent draws and more total prizes, while larger bonds have life-changing jackpots.</p>
                    </div>
                </li>
            </ul>

        </div>
    </article>
);

export default WinningOdds;
