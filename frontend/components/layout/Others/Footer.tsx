"use client";
import React, { useState } from 'react';
import { Youtube, Rss } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const NewsFooter = () => {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = () => {
        if (agreed && email) {
            console.log('Subscribing:', email);
            // Handle subscription logic here
        }
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-[1500px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side - Brand & Description */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/images/sottosamachar.png"   // or .png
                                    alt="PressPulse logo"
                                    width={180}
                                    height={36}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-gray-900">Information You Can Trust:</h3>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                Stay instantly connected with breaking stories and live updates. From politics and technology to entertainment and beyond, we provide real-time coverage you can rely on, making us your dependable source for 24/7 news.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <button
                                className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-gray-600" />
                            </button>
                            <button
                                className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
                                aria-label="Medium"
                            >
                                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                            </button>
                            <button
                                className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
                                aria-label="RSS Feed"
                            >
                                <Rss className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Navigation & Newsletter */}
                    <div className="space-y-6">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                            <button className="hover:underline">About Company</button>
                            <span className="text-gray-400">&gt;</span>
                        </div>

                        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700">
                            <button className="hover:underline">Contact Us</button>
                            <span className="text-gray-400">/</span>
                            <button className="hover:underline">Advertise with US</button>
                            <span className="text-gray-400">/</span>
                            <button className="hover:underline">Complaint</button>
                            <span className="text-gray-400">/</span>
                            <button className="hover:underline">Privacy Policy</button>
                            <span className="text-gray-400">/</span>
                            <button className="hover:underline">Cookie Policy</button>
                            <span className="text-gray-400">/</span>
                            <button className="hover:underline">Submit a Tip</button>
                        </nav>

                        {/* Newsletter Subscription */}
                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-gray-900">
                                Subscribe Now for Real-time Updates on the Latest Stories!
                            </p>

                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                    />
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!agreed}
                                        className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        Sign Up Now
                                    </button>
                                </div>

                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900"
                                    />
                                    <span className="text-xs text-gray-600">
                                        I have read and agree to the terms & conditions
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <p className="text-xs text-center text-gray-600">
                        © Sotto Samachar 2026. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default NewsFooter;