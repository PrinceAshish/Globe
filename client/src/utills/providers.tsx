'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export function Providers({session, children }: { children: React.ReactNode,session:any }) {
  // const session:any = '';
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
}