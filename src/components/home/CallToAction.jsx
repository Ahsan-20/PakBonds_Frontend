import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <>
            {/* Visual Transition */}
            <div className="h-32 bg-gradient-to-b from-transparent to-black" />

            {/* Main CTA */}
            <section className="bg-black py-24 text-center px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Serious Investors</h2>
                    <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                        Join thousands of Pakistanis who have switched to automated bond tracking.
                        <br className="hidden sm:block" />
                        Secure, fast, and completely free.
                    </p>
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <Link
                            to="/signup"
                            className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-zinc-600"
                        >
                            <span className="flex items-center space-x-5">
                                <span className="pr-6 text-gray-100 font-bold tracking-wider group-hover:text-cyan-400 transition-colors">CREATE FREE ACCOUNT</span>
                            </span>
                            <span className="pl-6 text-cyan-500 group-hover:text-gray-100 transition duration-200">
                                &rarr;
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction;
