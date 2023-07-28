'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const navRouter = usePathname()
  return (
    <div className={'container navbar'}>
        {navRouter}
        <Link href={'/'}>Home</Link>
        <Link href={'/tasks'}>tasks</Link>
    </div>
  )
}
