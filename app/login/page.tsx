"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", phone: "", gender: "", email: "", address: "", birthday: "",
  });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.gender || !form.email || !form.address || !form.birthday) {
      setError("Please fill in all fields.");
      return;
    }
    localStorage.setItem("userProfile", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");
    router.push("/services");
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-8">

      <div className="mt-8">
        <Image
          src="/profile.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-[350px] mt-6">

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Phone Number", name: "phone", type: "text" },
          { label: "Gender", name: "gender", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Address", name: "address", type: "text" },
          { label: "Birthday", name: "birthday", type: "date" },
        ].map((field) => (
          <div key={field.name} className="text-left mb-10">
            <label className="text-sm font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              className="w-full mt-2 border rounded-full p-3"
            />
          </div>
        ))}

        <div className="flex justify-center" style={{ marginTop: "40px" }}>
          <button type="submit" className="start-btn">
            Complete Profile
          </button>
        </div>

      </form>
    </div>
  );
}
