import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Toaster } from "react-hot-toast";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CORS.SH - A Fast & Reliable CORS Proxy for your websites',
  description: "One CORS Proxy you'll ever need",
  metadataBase: new URL('https://cors.sh'),
  openGraph: {
    images: [
      "/og-image-01.jpg",
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div suppressHydrationWarning>
          <Toaster position="bottom-center" />
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}
