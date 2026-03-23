import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">

      {/* Profile Icon - top left */}
      <div className="mt-8">
        <Image
          src="/profile.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Form */}
      <div className="bg-white p-8 rounded-xl shadow-md w-[350px] mt-6">

        {/* Name */}
        <div className="text-left mb-10">
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full mt-2 border rounded-full p-3"
          />
        </div>

        {/* Phone */}
        <div className="text-left mb-10">
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="text"
            className="w-full mt-2 border rounded-full p-3"
          />
        </div>

        {/* Gender */}
        <div className="text-left mb-10">
          <label className="text-sm font-medium">Gender</label>
          <input
            type="text"
            className="w-full mt-2 border rounded-full p-3"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center" style={{marginTop: '40px'}}>
          <a href="/services" className="start-btn">
            Complete Profile
          </a>
        </div>

      </div>

    </div>
  );
}