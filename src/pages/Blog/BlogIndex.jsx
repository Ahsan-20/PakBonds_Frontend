import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Zap, BarChart3, HelpCircle, ArrowRight, Shield, Calendar, TrendingUp, Clock, FileText, Landmark, Scale } from 'lucide-react';

const BlogIndex = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <Helmet>
                <title>Prize Bond Blog | Investment Insights & Guides</title>
                <meta name="description" content="Read the latest updates, guides, and investment strategies for Pakistani Prize Bonds. Master the market with our expert analysis." />
                <link rel="canonical" href="https://pakbonds.com/blog" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pakbonds.com/blog" />
                <meta property="og:title" content="Prize Bond Blog | Insights & Strategies" />
                <meta property="og:description" content="Expert guides, latest news, and strategies to maximize your prize bond winnings." />
                <meta property="og:site_name" content="PakBonds" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://pakbonds.com/blog" />
                <meta name="twitter:title" content="Prize Bond Blog | Investment Insights" />
                <meta name="twitter:description" content="Expert guides and strategies for Pakistani Prize Bonds." />

                <script type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "PakBonds Blog",
                            "description": "Educational resources and guides about Prize Bonds in Pakistan.",
                            "url": "https://pakbonds.com/blog"
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
                                    "name": "Blog",
                                    "item": "https://pakbonds.com/blog"
                                }
                            ]
                        }
                    ])}
                </script>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 relative group">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-lg group-hover:bg-cyan-500/30 transition-all" />
                        <BookOpen size={32} className="text-white relative z-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Bond Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
                    </h1>
                    <p className="text-xl text-white/50">
                        Expert guides, latest news, and strategies to maximize your prize bond winnings.
                    </p>
                </div>

                {/* Featured Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: HelpCircle,
                            title: "How to Check Bonds",
                            desc: "The complete guide to manually and automatically checking your prize bonds for 2026.",
                            link: "/blog/how-to-check",
                            color: "text-cyan-400",
                            bg: "bg-cyan-500/10",
                            border: "border-cyan-500/20"
                        },
                        {
                            icon: BarChart3,
                            title: "Winning Odds Explained",
                            desc: "Deep dive into the mathematics of winning. Which denomination has the best probability?",
                            link: "/blog/winning-odds",
                            color: "text-purple-400",
                            bg: "bg-purple-500/10",
                            border: "border-purple-500/20"
                        },
                        {
                            icon: Zap,
                            title: "Automate Your Wins",
                            desc: "Stop checking lists manually. Learn how to set up automatic win alerts.",
                            link: "/blog/automation-guide",
                            color: "text-blue-400",
                            bg: "bg-blue-500/10",
                            border: "border-blue-500/20"
                        },
                        {
                            icon: TrendingUp,
                            title: "How to Buy Bonds",
                            desc: "A complete guide to purchasing standard and premium bonds from National Savings.",
                            link: "/blog/how-to-buy",
                            color: "text-emerald-400",
                            bg: "bg-emerald-500/10",
                            border: "border-emerald-500/20"
                        },
                        {
                            icon: Clock,
                            title: "How to Claim Prize",
                            desc: "Don't let your prize expire! Step-by-step guide to claiming your winnings.",
                            link: "/blog/how-to-claim",
                            color: "text-amber-400",
                            bg: "bg-amber-500/10",
                            border: "border-amber-500/20"
                        },
                        {
                            icon: Calendar,
                            title: "2026 Draw Schedule",
                            desc: "Mark your calendar. Full list of dates for all draws in 2026.",
                            link: "/blog/schedule-2026",
                            color: "text-pink-400",
                            bg: "bg-pink-500/10",
                            border: "border-pink-500/20"
                        },
                        {
                            icon: FileText,
                            title: "Tax Rates 2026",
                            desc: "Filer vs Non-Filer tax rates explained. How much will you actually take home?",
                            link: "/blog/tax-info",
                            color: "text-rose-400",
                            bg: "bg-rose-500/10",
                            border: "border-rose-500/20"
                        },
                        {
                            icon: Scale,
                            title: "Premium vs Standard",
                            desc: "Which bond is better? We compare profit rates and prize structures.",
                            link: "/blog/premium-vs-standard",
                            color: "text-indigo-400",
                            bg: "bg-indigo-500/10",
                            border: "border-indigo-500/20"
                        },
                        {
                            icon: Landmark,
                            title: "Are Bonds Safe?",
                            desc: "Understanding the government backing and history of prize bonds.",
                            link: "/blog/history",
                            color: "text-zinc-400",
                            bg: "bg-zinc-500/10",
                            border: "border-zinc-500/20"
                        }
                    ].map((post, i) => (
                        <Link
                            key={i}
                            to={post.link}
                            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/10"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${post.bg} ${post.border} border flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500`}>
                                <post.icon size={28} className={post.color} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                            <p className="text-white/50 mb-8 leading-relaxed">
                                {post.desc}
                            </p>
                            <div className="flex items-center text-sm font-bold tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">
                                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <div className="mt-24 relative overflow-hidden p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-black to-zinc-900 text-center group">
                    <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <Shield size={48} className="text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                        <h2 className="text-3xl font-bold text-white mb-4">Don't rely on luck alone.</h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-lg">
                            Join thousands of investors who use our automated tools to track their portfolio.
                        </p>
                        <Link to="/signup" className="inline-flex items-center px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1">
                            Create Free Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogIndex;
