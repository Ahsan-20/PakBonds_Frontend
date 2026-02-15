import React from 'react';
import { Helmet } from 'react-helmet';
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
