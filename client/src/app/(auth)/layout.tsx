import '../globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from '@/utills/providers'
import AuthLayout from '@/ui/Layout/AuthLayout'
import { ToastContainer } from 'react-toastify'
import ApiLoading from '@/components/ApiLoading/ApiLoading'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Globe.com',
  description: 'Generated by Next js',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} body-color`}>
        <Providers >
          {children}
          <ApiLoading />
        </Providers>
        <ToastContainer />
      </body>
    </html>
  )
}