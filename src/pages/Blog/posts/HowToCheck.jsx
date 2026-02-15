import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Search, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToCheck = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>How to Check Prize Bonds (2026 Guide) | Manual & Automated</title>
                <meta name="description" content="Learn the fastest ways to check your Pakistani Prize Bonds. Compare manual search vs. automated checking tools." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">Beginner's Guide</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    How to Check Prize Bonds: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">The Ultimate 2026 Guide</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    Stop wasting hours scanning lists. Here are the 3 most effective ways to check your bonds in Pakistan.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Globe className="text-cyan-400 mr-3" />
                        Method 1: The "Digital" Way (Recommended)
                    </h3>
                    <p className="text-zinc-400 mb-6">
                        Using a dedicated checker tool is 100x faster than manual lists.
                    </p>
                    <ol className="list-decimal list-inside space-y-4 text-zinc-300">
                        <li>Go to the <Link to="/compare" className="text-cyan-400 underline">Check Results</Link> page.</li>
                        <li>Select your bond denomination (e.g., 750, 1500).</li>
                        <li>Enter your bond number.</li>
                        <li>Click "Scan".</li>
                    </ol>
                    <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-300 text-sm">
                        <strong>Pro Tip:</strong> Use the "Check All Archives" feature to scan your number against every draw in history instantly.
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 opacity-75">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Search className="text-purple-400 mr-3" />
                        Method 2: The Manual List
                    </h3>
                    <p className="text-zinc-400 mb-4">
                        Old school. Reliable, but slow.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li>Download the official Gazettes from National Savings.</li>
                        <li>Open the PDF/TXT file.</li>
                        <li>Use CTRL+F to search for your number.</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default HowToCheck;
