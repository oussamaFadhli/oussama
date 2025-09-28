"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { ChevronUp } from 'lucide-react'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 px-4 py-7 rounded-full shadow-lg z-50"
                >
                    <ChevronUp size={24} />
                </Button>
            )}
        </>
    )
}

export default ScrollToTopButton
