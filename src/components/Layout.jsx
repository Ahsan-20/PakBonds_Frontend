import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#050505]">
            <Navbar />
            <main className="flex-1 w-full relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
