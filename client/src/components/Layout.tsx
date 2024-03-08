import { usePathname } from 'next/navigation';
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
    const noHeaderPages = ['/login', '/register', '/forgot-password', '/reset-password', 'reset-password-confirm'];
  return (
    <div>
      {noHeaderPages.includes(pathname) ?
      <div>

      </div>:
      <div>
      
      </div>}
    </div>
  )
}

export default Layout
