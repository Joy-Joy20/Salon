"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100">

      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-pink-500">Salon App</h1>
        <Link href="/login" className="text-xl">👤</Link>
      </header>

      <div className="flex flex-col items-center text-center py-16 px-6">
        <Image src="/logo.png" alt="Logo" width={250} height={250} />
        <h1 className="text-3xl font-bold text-pink-500 mt-4">Your beauty, our passion</h1>
        <p className="text-gray-500 mt-2">Book your salon service anytime</p>
        <Link href="/login" className="start-btn mt-6">Explore Services</Link>
      </div>

    </div>
  );
}
