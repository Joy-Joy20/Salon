import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-xs mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Services</h1>
        <input
          type="text"
          placeholder="search..."
          className="p-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 text-base w-64"
        />
      </header>
      <main className="w-full max-w-xs">{children}</main>
    </div>
  );
}
