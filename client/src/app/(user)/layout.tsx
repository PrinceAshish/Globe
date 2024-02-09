import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import { Providers } from '../../utills/providers'
import UserLayout from '@/ui/Layout/UserLayout'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Globe.com',
    description: 'Generated by Next js',
}

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} body-color`}>
                <Providers>
                    <UserLayout>
                        {children}
                    </UserLayout>
                </Providers>
            </body>
        </html>
    )
}