// app/components/Drawer.tsx
"use client";

import Link from "next/link";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white text-black z-50
        shadow-xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-lg font-semibold">
            Menu
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-4 text-sm">
            <Link
              href="/"
              onClick={onClose}
              className="hover:text-zinc-600 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/blog"
              onClick={onClose}
              className="hover:text-zinc-600 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="hover:text-zinc-600 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
