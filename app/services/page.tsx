"use client";

import React, { useState } from "react";

const services = [
  { name: "HAIRCUT", icon: "✂️" },
  { name: "MAKEUP", icon: "💄" },
  { name: "SHAVING", icon: "🪒" },
  { name: "HAIR COLORING", icon: "🎨" },
  { name: "HAIR TREATMENT", icon: "🍼" },
  { name: "MASSAGE", icon: "💆" },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">

      {/* Services grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-xs mt-4">
        {services.map((service) => (
          <div
            key={service.name}
            onClick={() => setSelected(service.name)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className={`w-52 h-52 flex items-center justify-center rounded-full border-2 ${
              selected === service.name
                ? "bg-[#d98c8c] border-[#d98c8c]"
                : "bg-gray-100 border-gray-300"
            }`}>
              <span className="text-4xl">{service.icon}</span>
            </div>
            <p className="text-xs font-semibold mt-2 text-center">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="w-full max-w-xs mt-20 flex justify-center">
        <a
          href="/stylist"
          className="start-btn"
        >
          NEXT
        </a>
      </div>

    </div>
  );
}
