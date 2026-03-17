import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Home',
  description: 'Welcome to my website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  )
}