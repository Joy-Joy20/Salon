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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex justify-center">

      <div className="w-full max-w-md px-4">

        <h2 className="text-xl font-bold text-center mt-6 text-gray-700">
          Choose a Service
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-5 mt-8">

          {services.map((service) => {
            const isSelected = selected === service.name;

            return (
              <div
                key={service.name}
                onClick={() => setSelected(service.name)}
                className={`flex flex-col items-center cursor-pointer transition-all duration-200
                  ${isSelected ? "scale-105" : "hover:scale-105"}
                `}
              >
                {/* CIRCLE */}
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full border-2 transition-all duration-200
                  ${
                    isSelected
                      ? "bg-pink-400 border-pink-500 shadow-lg"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* LABEL */}
                <p
                  className={`text-xs font-semibold mt-2 text-center transition-all
                  ${isSelected ? "text-pink-500" : "text-gray-600"}
                `}
                >
                  {service.name}
                </p>
              </div>
            );
          })}

        </div>

        {/* SELECTED DISPLAY */}
        {selected && (
          <div className="mt-8 text-center text-sm text-gray-600">
            Selected:{" "}
            <span className="font-bold text-pink-500">{selected}</span>
          </div>
        )}

        {/* BUTTON */}
        <div className="flex justify-center mt-10 mb-10">
          <a
            href={selected ? "/stylist" : "#"}
            className="start-btn"
            onClick={(e) => { if (!selected) e.preventDefault(); }}
          >
            NEXT
          </a>
        </div>

      </div>
    </div>
  );
}