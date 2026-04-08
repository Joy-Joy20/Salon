import { ReactNode } from "react";
import Link from "next/link";
import "./global.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">

        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <h1 className="text-lg font-bold text-pink-500">
            Salon App
          </h1>

          {/* NAV */}
          <nav className="flex items-center gap-12 text-sm font-medium text-gray-700">

            <Link href="/" className="hover:text-pink-500 transition">
              Home
            </Link>

            {/* MENU */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-pink-500 transition">
                Menu
                <span className="text-xs">⌄</span>
              </button>

              {/* DROPDOWN */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-36 text-sm">

                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-500"
                >
                  Services
                </Link>

                <Link
                  href="/stylist"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-500"
                >
                  Stylists
                </Link>

              </div>
            </div>

            <Link href="/about" className="hover:text-pink-500 transition">
              About Us
            </Link>

          </nav>

          {/* LOGIN */}
          <Link href="/login" className="text-xl hover:scale-110 transition">
            👤
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-md mx-auto px-4 mt-8">
        {children}
      </main>

    </div>
  );
}