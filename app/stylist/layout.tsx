import { ReactNode } from "react";
import "./global.css";

export const metadata = {
  title: "Choose Stylist",
  description: "Select your barber or stylist",
};

export default function StylistLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-xs mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Choose Stylist</h1>
      </header>
      <main className="w-full max-w-xs">{children}</main>
    </div>
  );
}
