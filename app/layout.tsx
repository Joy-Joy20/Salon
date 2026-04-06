import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Salon App',
  description: 'Modern salon booking system',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}