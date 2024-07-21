import type { Metadata } from 'next'
import { Nunito_Sans as nunitoSans } from 'next/font/google'
import './globals.css'

const nunito = nunitoSans({
  subsets: ['latin'],
  variable: '--font-nunito',
})

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
      <body className=" m-5 bg-gray-700 text-gray-200 antialiased">
        {children}
      </body>
    </html>
  )
}
