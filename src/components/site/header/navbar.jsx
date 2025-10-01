'use client';
import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

export default function Navbar({ isScrolled }) {
    const [activeSection, setActiveSection] = useState('')

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'features', 'timeline', 'faq']
            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetBottom = offsetTop + element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            className={`col-span-4 w-fit mx-auto flex items-center justify-center gap-7 text-sm capitalize font-medium text-white rounded-lg px-8 py-1 ${isScrolled ? 'bg-transparent backdrop-blur-none' : ' bg-white/5 backdrop-blur-2xl'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <button onClick={() => scrollToSection('about')} className={`cursor-pointer ${activeSection === 'about' ? 'text-custom-orange' : 'text-white'}`}>
                About
            </button>
            <button onClick={() => scrollToSection('features')} className={`cursor-pointer ${activeSection === 'features' ? 'text-custom-orange' : 'text-white'}`}>
                Features
            </button>
            <button onClick={() => scrollToSection('timeline')} className={`cursor-pointer ${activeSection === 'timeline' ? 'text-custom-orange' : 'text-white'}`}>

                Timeline
            </button>
            <button onClick={() => scrollToSection('faq')} className={`cursor-pointer ${activeSection === 'faq' ? 'text-custom-orange' : 'text-white'}`}>
                FAQ
            </button>
        </motion.nav>
    )
}
