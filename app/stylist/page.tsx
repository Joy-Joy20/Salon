"use client";

import React, { useState } from "react";
import Image from "next/image";

const stylists = [
  { name: "Joy", role: "Hair Stylist", photo: "/stylist1.jpg" },
  { name: "Jilly", role: "Makeup Artist", photo: "/stylist2.jpg" },
  { name: "Jenny", role: "Barber", photo: "/stylist3.jpg" },
  { name: "Charis", role: "Shaver", photo: "/stylist4.jpg" },
  { name: "Mae Pearl", role: "Massage Therapist", photo: "/stylist5.jpg" },
  { name: "Denziel", role: "Hair Treatment", photo: "/stylist6.jpg" },
];

export default function StylistPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-xs mt-4" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {stylists.map((stylist) => (
          <div
            key={stylist.name}
            onClick={() => setSelected(stylist.name)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className={`w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-full border-2 overflow-hidden ${
              selected === stylist.name
                ? "border-[#d98c8c] ring-2 ring-[#d98c8c]"
                : "border-gray-300"
            }`}>
              <Image
                src={stylist.photo}
                alt={stylist.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs font-semibold mt-2 text-center leading-tight">{stylist.name}</p>
            <p className="text-xs text-gray-500 text-center">{stylist.role}</p>
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="w-full max-w-xs mt-10 flex justify-center">
        <a
          href="#"
          className="start-btn"
          onClick={(e) => { e.preventDefault(); if (selected) alert(`Selected: ${selected}`); }}
        >
          NEXT
        </a>
      </div>

    </div>
  );
}
