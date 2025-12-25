"use client";

import { useState } from "react";
import { Search, User, Star, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  "Home",
  "World",
  "Business",
  "Finance",
  "Politics",
  "Blog",
];

export default function CleanNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar (cleaned) */}
      <div className="bg-neutral-900 text-neutral-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span className="font-medium text-neutral-200">
            Wednesday, December 24, 2025
          </span>
          <button className="hidden md:block text-orange-400 hover:text-orange-300 font-medium">
            Explore premium insights →
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-100"
            >
              <Menu size={20} />
            </button>

            
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/sottosamachar.png"   // or .png
                alt="PressPulse logo"
                width={180}
                height={36}
                priority
              />
            </Link>

            <nav className="hidden lg:flex gap-6 ml-6">
              {NAV_ITEMS.map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="p-2 rounded-md hover:bg-neutral-100"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            <button className="p-2 rounded-md hover:bg-neutral-100">
              <User size={18} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <input
                autoFocus
                placeholder="Search articles, topics, authors…"
                className="w-full px-4 py-2.5 border rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>
        )}
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Left Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-16 px-4 flex items-center justify-between border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map(item => (
            <a
              key={item}
              href="#"
              className="text-neutral-800 font-medium hover:text-orange-600"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
