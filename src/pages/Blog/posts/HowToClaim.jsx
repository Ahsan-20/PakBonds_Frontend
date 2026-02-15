import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, FileText, Building, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToClaim = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>How to Claim Prize Bond Money (2026 Process) | Documents & Taxes</title>
                <meta name="description" content="Won a prize bond? Congratulations! Here is the step-by-step process to claim your money from State Bank or National Savings. Tax rates for Filers vs Non-Filers included." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Claim Guide</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    How to Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Prize Money</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    You won! Now what? Here is the exact procedure to get your money in your bank account safely.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">

                <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
                    <Clock className="text-emerald-400 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white mb-1">Time Limit</h4>
                        <p className="text-sm text-emerald-200/70">
                            You have a maximum of <strong>6 years</strong> from the date of the draw to claim your prize. After that, the money expires.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Where to Go?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Small Prizes (Up to Rs. 1,250)</h3>
                        <p className="text-zinc-400 text-sm">
                            Can be claimed at any <strong>National Savings Centre</strong>, authorized commercial bank, or State Bank (SBP BSC) office.
                        </p>
                    </div>
                    <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Large Prizes (Above Rs. 1,250)</h3>
                        <p className="text-zinc-400 text-sm">
                            Must be claimed at <strong>State Bank of Pakistan (SBP BSC)</strong> offices. Commercial banks can process up to Rs. 500,000 for their account holders.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Required Documents</h2>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">1</div>
                        <p>Original <strong>CNIC</strong> and a legible photocopy.</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">2</div>
                        <p>The <strong>Original Prize Bond</strong> (signed by you on the back).</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">3</div>
                        <p>A photocopy of the prize bond (signed on the back).</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">4</div>
                        <p>Completed <strong>Claim Form</strong> (available free at the bank).</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">5</div>
                        <p>Bank Account details (IBAN) for direct credit of funds.</p>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Processing Time</h2>
                <ul className="space-y-2 text-zinc-400">
                    <li>• <strong>Up to Rs. 18,500:</strong> Same day (Cash) or Next Day (Transfer).</li>
                    <li>• <strong>Up to Rs. 500,000:</strong> Approx. 15 working days.</li>
                    <li>• <strong>Above Rs. 1 Million:</strong> Up to 30 working days (for verification by PSPC).</li>
                </ul>

            </div>
        </article>
    );
};

export default HowToClaim;
