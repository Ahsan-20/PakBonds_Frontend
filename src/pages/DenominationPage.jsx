
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Share2, TrendingUp, Calendar, AlertTriangle, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import api from '../api';
import LoadingScreen from '../components/LoadingScreen';

const DenominationPage = () => {
    const { message } = useParams(); // e.g. "750"
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Color mapping for styling
    const colors = {
        '100': 'text-red-400 border-red-500/20 bg-red-500/10',
        '200': 'text-blue-400 border-blue-500/20 bg-blue-500/10',
        '750': 'text-green-400 border-green-500/20 bg-green-500/10',
        '1500': 'text-purple-400 border-purple-500/20 bg-purple-500/10',
        '25000': 'text-orange-400 border-orange-500/20 bg-orange-500/10',
        '40000': 'text-pink-400 border-pink-500/20 bg-pink-500/10',
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch public data from our new safe endpoint
                const response = await api.get(`/public/denomination-info/${message}`);
                setData(response.data);
                setError(false);
            } catch (err) {
                console.error("Failed to load bond data", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (message) fetchData();
    }, [message]);

    if (loading) return <LoadingScreen message={`Loading ${message} Bond Data...`} />;
    if (error || !data) return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="text-center">
                <AlertTriangle size={48} className="mx-auto text-red-500 mb-4" />
                <h1 className="text-2xl font-bold">Bond Not Found</h1>
                <Link to="/" className="text-cyan-400 hover:underline mt-4 block">Return Home</Link>
            </div>
        </div>
    );

    const info = data.data;
    const theme = colors[message] || 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10';
    const borderColor = theme.split(' ')[1];
    const textColor = theme.split(' ')[0];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Helmet>
                <title>{`Rs. ${message} Prize Bond List 2026 | Check Results Online`}</title>
                <meta name="description" content={`Latest Rs. ${message} Prize Bond Draw Results, Schedule, and Winning Numbers. Check your ${message} bonds online automatically.`} />
                <link rel="canonical" href={`https://pakbonds.com/bonds/${message}`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://pakbonds.com/bonds/${message}`} />
                <meta property="og:title" content={`Rs. ${message} Prize Bond List 2026`} />
                <meta property="og:description" content={`Check latest Rs. ${message} Prize Bond Draw Results, Lists, and Schedule. Instant search for winning numbers.`} />
                <meta property="og:site_name" content="PakBonds" />
                <meta property="og:image" content="https://pakbonds.com/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={`https://pakbonds.com/bonds/${message}`} />
                <meta name="twitter:title" content={`Rs. ${message} Prize Bond List 2026`} />
                <meta name="twitter:description" content={`Latest Rs. ${message} Prize Bond Draw Results. Check if you won instantly.`} />
                <meta name="twitter:image" content="https://pakbonds.com/og-image.png" />

                <script type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "FinancialProduct",
                            "name": `Rs. ${message} Prize Bond`,
                            "description": info.description,
                            "brand": {
                                "@type": "Brand",
                                "name": "National Savings Pakistan"
                            },
                            "offers": {
                                "@type": "Offer",
                                "price": message,
                                "priceCurrency": "PKR",
                                "availability": "https://schema.org/InStock"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://pakbonds.com/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": `Rs. ${message} Prize Bond`,
                                    "item": `https://pakbonds.com/bonds/${message}`
                                }
                            ]
                        }
                    ])}
                </script>
            </Helmet>

            {/* Header */}
            <div className={`rounded-3xl border ${borderColor} bg-zinc-900/50 p-8 mb-8 backdrop-blur-xl relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-64 h-64 ${theme.split(' ')[2]} rounded-full blur-[100px] opacity-20`} />

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${theme}`}>
                                {info.type || 'Standard'} Bond
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2">
                                Rs. {message} <span className="text-zinc-500">List</span>
                            </h1>
                            <p className="text-lg text-zinc-400 max-w-2xl">{info.description}</p>
                        </div>

                        <div className="text-right hidden md:block">
                            <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">First Prize</div>
                            <div className={`text-4xl font-bold ${textColor}`}>PKR {info.first_prize}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Stats & Schedule */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Prize Structure Card */}
                    <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <TrendingUp className="text-cyan-400" /> Prize Structure
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-yellow-500/20">
                                <div>
                                    <div className="text-yellow-400 font-bold text-lg">1st Prize</div>
                                    <div className="text-zinc-500 text-sm">{info.prizes_count['1st']} Winner(s)</div>
                                </div>
                                <div className="text-2xl font-mono text-white font-bold">{info.first_prize}</div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-zinc-800">
                                <div>
                                    <div className="text-zinc-300 font-bold">2nd Prize</div>
                                    <div className="text-zinc-500 text-sm">{info.prizes_count['2nd']} Winners</div>
                                </div>
                                <div className="text-xl font-mono text-zinc-300">{info.second_prize}</div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-zinc-800">
                                <div>
                                    <div className="text-zinc-400 font-bold">3rd Prize</div>
                                    <div className="text-zinc-500 text-sm">{info.prizes_count['3rd']} Winners</div>
                                </div>
                                <div className="text-lg font-mono text-zinc-400">{info.third_prize}</div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-sm text-zinc-500">
                            <span>Total Prizes: {info.total_prizes}</span>
                            <span>Winning Odds: {info.odds}</span>
                        </div>
                    </div>

                    {/* How to Check Section (Enhanced UI) */}
                    <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-white mb-6">
                            How to check {message} Bond?
                        </h2>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm border border-cyan-500/20">1</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Create Free Account</h4>
                                    <p className="text-sm text-zinc-400">Sign up on PakBonds to start tracking.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm border border-purple-500/20">2</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Add Your Numbers</h4>
                                    <p className="text-sm text-zinc-400">Enter your {message} bond serial numbers (e.g. 123456).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm border border-green-500/20">3</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Auto-Check</h4>
                                    <p className="text-sm text-zinc-400">Our system scans every draw automatically.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm border border-yellow-500/20">4</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Get Notified</h4>
                                    <p className="text-sm text-zinc-400">Receive an instant email if you win a prize.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: CTA & Tools */}
                <div className="space-y-6">

                    {/* Quick Action Card */}
                    <div className="bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/20 rounded-2xl p-6 text-center">
                        <Smartphone size={40} className="mx-auto text-cyan-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Check Your {message} Bonds</h3>
                        <p className="text-zinc-400 text-sm mb-6">
                            Instantly search the draw history for this bond.
                        </p>
                        <Link to="/compare" className="block w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-lg shadow-cyan-900/20">
                            Check Now
                        </Link>
                    </div>

                    {/* Next Draw Card */}
                    <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Calendar className="text-purple-400" />
                            <h3 className="font-bold text-white">Next Draw</h3>
                        </div>
                        <div className="text-zinc-400 text-sm mb-2">Expected Date:</div>
                        <div className="text-2xl font-bold text-white mb-1">
                            {data.next_draw || "TBA"}
                        </div>
                        <p className="text-xs text-zinc-500">
                            *Dates automatically calculated based on annual schedule.
                        </p>
                    </div>

                    {/* Other Bonds Widget */}
                    <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6">
                        <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider text-zinc-500">Other Bonds</h3>
                        <div className="flex flex-wrap gap-2">
                            {['100', '200', '750', '1500', '25000', '40000'].map(val => (
                                val !== message && (
                                    <Link key={val} to={`/bonds/${val}`} className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-lg transition-colors border border-white/5">
                                        Rs. {val}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DenominationPage;
