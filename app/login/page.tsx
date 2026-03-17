import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-[350px] text-center">

      {/* Profile Icon */}
      <div className="flex justify-center mb-6">
        <Image
          src="/profile.png"
          alt="profile"
          width={80}
          height={80}
          className="rounded-full border"
        />
      </div>

      {/* Name */}
      <div className="text-left mb-4">
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          className="w-full mt-1 border rounded-md p-2"
        />
      </div>

      {/* Phone */}
      <div className="text-left mb-4">
        <label className="text-sm font-medium">Phone Number</label>
        <input
          type="text"
          className="w-full mt-1 border rounded-md p-2"
        />
      </div>

      {/* Gender */}
      <div className="text-left mb-6">
        <label className="text-sm font-medium">Gender</label>
        <input
          type="text"
          className="w-full mt-1 border rounded-md p-2"
        />
      </div>

      {/* Button */}
      <button className="bg-red-400 active:bg-pink-500 text-white px-6 py-2 rounded-full w-full">
        Complete Profile
      </button>

    </div>
  );
}