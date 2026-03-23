import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8 bg-gradient-to-b from-pink-50 to-rose-100">
      <Image
        src="/logo.png"
        alt="Logo"
        width={320}
        height={320}
      />
      <a
        href="/login"
        className="start-btn"
      >
        GET STARTED
      </a>
    </div>
  )
}