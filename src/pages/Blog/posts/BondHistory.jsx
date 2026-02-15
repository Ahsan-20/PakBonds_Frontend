import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Landmark, Scroll, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const BondHistory = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>History of Prize Bonds in Pakistan | Safe Investment?</title>
                <meta name="description" content="Are prize bonds safe? Learn about the history of National Savings Pakistan and why bonds are considered the safest investment in the country." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">Education</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Are Prize Bonds <span className="text-white">Safe?</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    Understanding the history and government backing behind Pakistan's most popular investment scheme.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">

                <h2 className="text-2xl font-bold text-white mt-8 mb-6">A Brief History</h2>
                <p>
                    The Prize Bond scheme was introduced in Pakistan (and originally pre-partition India) as a way for the government to borrow money from the public while offering a chance of winning large prizes in return.
                </p>
                <p>
                    It is managed by the <strong>Central Directorate of National Savings (CDNS)</strong> and the <strong>State Bank of Pakistan (SBP)</strong>. This means every single bond is backed by the sovereign guarantee of the Government of Pakistan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <Landmark className="mx-auto text-cyan-400 mb-4" size={32} />
                        <h3 className="font-bold text-white mb-2">100% Secure</h3>
                        <p className="text-sm text-zinc-400">Backed by the State Bank. Your principal amount never decreases.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <Scroll className="mx-auto text-purple-400 mb-4" size={32} />
                        <h3 className="font-bold text-white mb-2">Liquid Asset</h3>
                        <p className="text-sm text-zinc-400">Can be cashed out at any bank, anywhere in Pakistan, instantly.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <ShieldCheck className="mx-auto text-emerald-400 mb-4" size={32} />
                        <h3 className="font-bold text-white mb-2">Islamic Status</h3>
                        <p className="text-sm text-zinc-400">Ideally considered 'Halal' by many scholars as the principal is safe, though opinions vary.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Invest?</h2>
                <p>
                    Unlike stocks or crypto, your money in prize bonds is never at risk of going to zero. You can buy a Rs. 1000 bond today, keep it for 10 years, and it will still be worth Rs. 1000.
                </p>
                <p>
                    However, the <strong>"Opportunity Cost"</strong> is the interest you would have earned in a bank. In exchange for giving up that small interest, you get a ticket to potentially win millions.
                </p>

            </div>
        </article>
    );
};

export default BondHistory;
