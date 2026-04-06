import React, { ReactNode } from "react";
import "./global.css";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-xs mb-6 flex items-center justify-between">
        <nav className="flex gap-4 text-sm font-semibold text-gray-600">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <Link href="/services" className="hover:text-pink-500">Menu</Link>
          <Link href="/about" className="hover:text-pink-500">About Us</Link>
        </nav>
        <Link href="/login" className="text-xl">👤</Link>
      </header>
      <main className="w-full max-w-xs">{children}</main>
    </div>
  );
}
