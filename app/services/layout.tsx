import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Services</h1>
      </header>
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
}