import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const DrawSchedule = () => {
    return (
        <article className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">
            <Helmet>
                <title>Prize Bond Draw Schedule 2026 | National Savings Pakistan</title>
                <meta name="description" content="Official Prize Bond Draw Schedule for 2026. Check dates for 100, 200, 750, 1500, and Premium Bonds draws." />
            </Helmet>

            <Link to="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-12">
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">2026 Calendar</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    2026 Draw <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Schedule</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    Mark your calendars. Here is when the next draws are happening for each denomination.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">

                <h2 className="text-2xl font-bold text-white mt-8 mb-6">Upcoming Draws (Q1 2026)</h2>

                <div className="space-y-4">
                    {/* Event 1 */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 transition-colors">
                        <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-zinc-800 rounded-xl border border-white/5">
                            <span className="text-xs text-zinc-500 uppercase font-bold">JAN</span>
                            <span className="text-2xl font-bold text-white">15</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">Rs. 750 Bond</span>
                                <span className="flex items-center gap-1 text-xs text-zinc-500"><MapPin size={12} /> Peshawar</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Draw No. 105</h3>
                            <p className="text-sm text-zinc-400 mt-1">First Prize: Rs. 1,500,000</p>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 transition-colors">
                        <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-zinc-800 rounded-xl border border-white/5">
                            <span className="text-xs text-zinc-500 uppercase font-bold">FEB</span>
                            <span className="text-2xl font-bold text-white">16</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold">Rs. 100 Bond</span>
                                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold">Rs. 1,500 Bond</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Combined Draws (Karachi / Lahore)</h3>
                            <p className="text-sm text-zinc-400 mt-1">100 Bond (Draw 53) & 1500 Bond (Draw 109)</p>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 transition-colors">
                        <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-zinc-800 rounded-xl border border-white/5">
                            <span className="text-xs text-zinc-500 uppercase font-bold">MAR</span>
                            <span className="text-2xl font-bold text-white">10</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">Premium 25k</span>
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold">Premium 40k</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Premium Bond Draws</h3>
                            <p className="text-sm text-zinc-400 mt-1">Multan & Rawalpindi</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/20 text-center">
                    <Calendar size={48} className="mx-auto text-blue-400 mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-4">Never Miss a Date</h2>
                    <p className="text-white/50 mb-8">
                        Why memorize dates? Add your bonds to our app and we will notify you automatically when a draw happens.
                    </p>
                    <Link to="/signup" className="inline-flex items-center px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
                        Get Auto Alerts
                    </Link>
                </div>

            </div>
        </article>
    );
};

export default DrawSchedule;
