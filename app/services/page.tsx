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
    <div className="p-4">
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="search services"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {services.map((service) => (
          <div
            key={service.name}
            className={`service-card flex flex-col items-center justify-center p-4 rounded-lg border cursor-pointer ${
              selected === service.name ? "bg-[#e07c7c] text-white" : "bg-white text-gray-800"
            }`}
            onClick={() => setSelected(service.name)}
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <div className="text-sm font-semibold text-center">{service.name}</div>
          </div>
        ))}
      </div>

      {/* Next button */}
      <button
        className="w-full bg-[#e07c7c] text-white py-2 rounded-lg hover:bg-[#c66c6c] transition"
        disabled={!selected}
        onClick={() => alert(`Selected Service: ${selected}`)}
      >
        NEXT
      </button>
    </div>
  );
}