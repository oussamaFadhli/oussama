"use client"
import React from 'react'
import { Navbar, Footer } from '@/components/ui'
import { Home, User, Briefcase, FileText } from 'lucide-react'
interface LayoutProps {
    children: React.ReactNode
}
const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
]
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar items={navItems} />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout