import type { Metadata } from 'next'
import './globals.css'
import { Nunito_Sans as nunitoSans } from 'next/font/google'

const nunito = nunitoSans({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: {
    template: '%s | bookwise',
    default: 'bookwise',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={nunito.variable} lang="pt">
      <body className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-200 antialiased ">
        {children}
      </body>
    </html>
  )
}
