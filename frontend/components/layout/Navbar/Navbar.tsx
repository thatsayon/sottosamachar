// "use client";

// import React, { useState } from 'react';
// import { Search, User, Star, Menu, Youtube, Linkedin, Rss, X } from 'lucide-react';

// export default function PerfectNavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       {/* Top Banner */}
//       <div className="bg-gradient-to-r from-gray-900 to-black text-white text-sm">
//         <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
//           <span className="font-medium">Wednesday, December 24, 2025</span>
//           <div className="flex items-center gap-4">
//             <span className="text-gray-300">Exclusive insights, data, and analysis for financial market experts.</span>
//             <button className="bg-orange-600 hover:bg-orange-700 px-5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105">
//               Explore Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="border-b border-gray-200 sticky top-0 bg-white shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo & Main Nav */}
//             <div className="flex items-center gap-8">
//               <div className="flex items-center gap-2 group cursor-pointer">
//                 <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
//                   <div className="text-white font-bold text-lg">P</div>
//                 </div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   PressPulse
//                 </span>
//               </div>
              
//               <nav className="hidden lg:flex gap-6">
//                 {['Home', 'World', 'Business', 'Finance', 'Politics', 'Pages', 'Blog'].map((item) => (
//                   <a 
//                     key={item}
//                     href="#" 
//                     className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
//                   >
//                     {item}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
//                   </a>
//                 ))}
//               </nav>
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 aria-label="Search"
//               >
//                 {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
//               </button>
              
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Profile">
//                 <User className="w-5 h-5" />
//               </button>
              
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Favorites">
//                 <Star className="w-5 h-5" />
//               </button>
              
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 aria-label="Menu"
//               >
//                 <Menu className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Search Bar */}
//           {isSearchOpen && (
//             <div className="mt-4 animate-slideDown">
//               <input
//                 type="text"
//                 placeholder="Search articles, topics, authors..."
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 autoFocus
//               />
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden border-t border-gray-200 bg-white animate-slideDown">
//             <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
//               {['Home', 'World', 'Business', 'Finance', 'Politics', 'Pages', 'Blog'].map((item) => (
//                 <a 
//                   key={item}
//                   href="#" 
//                   className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Secondary Navigation */}

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

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
              <Star size={18} />
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
