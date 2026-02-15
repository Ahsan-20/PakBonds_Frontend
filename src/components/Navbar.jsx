import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, LogOut, ChevronDown, User, Lock, Settings, Bell } from 'lucide-react';
import Logo from './common/Logo';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);

    // Fetch Unread Count
    useEffect(() => {
        if (!user) return;

        const fetchUnread = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await fetch('http://localhost:8000/notifications/', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    const count = data.filter(n => !n.is_read).length;
                    setUnreadCount(count);
                }
            } catch (err) {
                console.error("Failed to fetch notifications", err);
            }
        };

        fetchUnread();
        // Poll every 60 seconds
        const interval = setInterval(fetchUnread, 60000);
        return () => clearInterval(interval);
    }, [user]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
        setShowUserMenu(false);
    };

    const navLinks = user ? [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'My Bonds', path: '/manage-bonds' },
        { name: 'Check Results', path: '/compare' },
        { name: 'Download', path: '/download' },
    ] : [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08]'
                : 'bg-transparent border-b border-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/">
                            <Logo />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                        ? 'text-white bg-white/[0.08]'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="hidden md:flex items-center gap-4">
                            {user ? (
                                <div className="flex items-center gap-4">
                                    {/* Notification Bell */}
                                    <Link to="/notifications" className="relative p-2 text-zinc-400 hover:text-white transition-colors group">
                                        <Bell size={20} className="group-hover:rotate-12 transition-transform" />
                                        {unreadCount > 0 && (
                                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_8px_cyan]" />
                                        )}
                                    </Link>

                                    <div className="relative">
                                        <button
                                            onClick={() => setShowUserMenu(!showUserMenu)}
                                            className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#0a0a0b] hover:border-white/[0.2] transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                                <span className="text-xs font-bold text-white">{user.user_id?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}</span>
                                            </div>
                                            <span className="text-sm text-zinc-300 max-w-[100px] truncate">{user.user_id || user.email?.split('@')[0]}</span>
                                            <ChevronDown size={14} className="text-zinc-500" />
                                        </button>

                                        {showUserMenu && (
                                            <>
                                                <div className="fixed inset-0" onClick={() => setShowUserMenu(false)} />
                                                <div className="absolute right-0 mt-2 w-48 bg-[#0a0a0b] border border-white/10 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2">
                                                    <div className="px-4 py-2 border-b border-white/5 mb-2">
                                                        <p className="text-xs text-zinc-500">Signed in as</p>
                                                        <p className="text-sm font-bold text-white truncate">{user.user_id || user.email}</p>
                                                        {user.user_id && <p className="text-xs text-zinc-500 truncate">{user.email}</p>}
                                                    </div>

                                                    <Link
                                                        to="/settings"
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                                                        onClick={() => setShowUserMenu(false)}
                                                    >
                                                        <Settings size={14} /> Settings
                                                    </Link>

                                                    <Link
                                                        to="/change-password"
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-purple-400 hover:bg-white/5 transition-colors"
                                                        onClick={() => setShowUserMenu(false)}
                                                    >
                                                        <Lock size={14} /> Change Password
                                                    </Link>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                                                    >
                                                        <LogOut size={14} /> Sign out
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link
                                        to="/login"
                                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-zinc-400 hover:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#050505] border-t border-white/[0.08] p-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-t border-white/[0.08] pt-4 mt-4">
                            {user ? (
                                <div className="space-y-2">
                                    <Link
                                        to="/settings"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]"
                                    >
                                        <Settings size={18} /> Settings
                                    </Link>
                                    <Link
                                        to="/change-password"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-purple-400 hover:bg-white/[0.05]"
                                    >
                                        <Lock size={18} /> Change Password
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                    >
                                        <LogOut size={18} /> Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Link to="/login" className="block text-center py-2 text-zinc-400">Log In</Link>
                                    <Link to="/signup" className="block text-center py-3 bg-white text-black font-bold rounded-lg">Get Started</Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
