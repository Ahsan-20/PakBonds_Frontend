import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeatureHighlights from '../components/home/FeatureHighlights';
import HowItWorks from '../components/home/HowItWorks';
import BlogPreview from '../components/home/BlogPreview';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
    return (
        <div className="relative overflow-hidden min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            <Helmet>
                <title>PakBonds | No.1 Automated Prize Bond Checker</title>
                <meta name="description" content="The easiest way to check Pakistani Prize Bonds online. PakBonds is tailored for overseas Pakistanis in UAE, UK, KSA & USA. Get instant win alerts via email." />
                <meta name="keywords" content="prize bond check online, overseas pakistani savings, national savings pakistan, bond draw list 2026, check bonds from dubai, check bonds from uk" />
                <link rel="canonical" href="https://pakbonds.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pakbonds.com/" />
                <meta property="og:title" content="PakBonds | No.1 Automated Prize Bond Checker" />
                <meta property="og:description" content="The easiest way to check Pakistani Prize Bonds online. PakBonds is tailored for overseas Pakistanis in UAE, UK, KSA & USA. Get instant win alerts via email." />
                <meta property="og:site_name" content="PakBonds" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://pakbonds.com/" />
                <meta name="twitter:title" content="PakBonds | No.1 Automated Prize Bond Checker" />
                <meta name="twitter:description" content="The easiest way to check Pakistani Prize Bonds online. PakBonds is tailored for overseas Pakistanis. Get instant win alerts." />

                <script type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "PakBonds",
                            "url": "https://pakbonds.com/",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://pakbonds.com/compare?bond={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "PakBonds",
                            "url": "https://pakbonds.com",
                            "logo": "https://pakbonds.com/logo.svg",
                            "sameAs": [
                                "https://twitter.com/pakbonds",
                                "https://facebook.com/pakbonds"
                            ]
                        }
                    ])}
                </script>
            </Helmet>

            <HeroSection />
            <FeatureHighlights />
            <HowItWorks />

            <BlogPreview />
            <CallToAction />
        </div>
    );
};

export default Home;
