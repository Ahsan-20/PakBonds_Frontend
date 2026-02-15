import React from 'react';
import { ArrowLeft, Zap, Bell, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AutomationGuide = () => (
    <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
        <Helmet>
            <title>Automate Prize Bond Checking | Alerts & Monitoring Blog</title>
            <meta name="description" content="Set up automatic prize bond checking. Never check a list manually again. Get email alerts for your winning bonds." />
        </Helmet>

        <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        <header className="mb-12">
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">Pro Features</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Automated Checking</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
                The average investor spends 2-3 hours per year checking prize bond lists. Our automation tools reduce that to zero.
            </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                    <Database className="text-blue-400 mb-4" size={32} />
                    <h3 className="text-lg font-bold text-white mb-2">1. One-Time Setup</h3>
                    <p className="text-sm text-white/50">Enter your bond numbers once. We store them encrypted in your personal vault.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                    <Bell className="text-blue-400 mb-4" size={32} />
                    <h3 className="text-lg font-bold text-white mb-2">2. Silent Monitoring</h3>
                    <p className="text-sm text-white/50">We check every new draw against your vault automatically.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Setup Instructions</h2>

            <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                    <h3 className="text-xl font-bold text-white mb-2">Step 1: Sign Up</h3>
                    <p className="mb-4">Create a free account. You only need an email address.</p>
                    <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">Create Account →</Link>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                    <h3 className="text-xl font-bold text-white mb-2">Step 2: Add Bonds</h3>
                    <p className="mb-4">Go to <strong>Manage Bonds</strong> in your dashboard. You can add ranges or upload specific numbers.</p>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                    <h3 className="text-xl font-bold text-white mb-2">Step 3: Verify & Relax</h3>
                    <p>Check your <strong>Dashboard</strong> to see your total "Net Asset Value". That's it! If any of these numbers appear in a future draw, you will receive an alert.</p>
                </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/20 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Start Automating Today</h2>
                <p className="text-white/50 mb-8">It's completely free for basic use.</p>
                <Link to="/manage-bonds" className="inline-flex items-center px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
                    Go to My Bonds
                </Link>
            </div>

        </div>
    </article>
);

export default AutomationGuide;
