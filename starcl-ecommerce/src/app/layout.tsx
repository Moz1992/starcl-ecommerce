import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starcl - Luxury High Heels',
  description: 'Discover exquisite luxury high heels designed for the modern sophisticate. Premium quality, timeless elegance.',
  keywords: ['luxury heels', 'designer shoes', 'high heels', 'fashion', 'premium footwear'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
