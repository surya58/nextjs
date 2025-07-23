import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Slaying the Dragon',
  description: 'Become the developer you were always destined to be.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
