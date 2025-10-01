'use client';
import { Link } from '@/i18n/navigation'
import React, { useState } from 'react'
import LanguageChange from '../common/languageChange'
import Image from 'next/image'
import Navbar from './navbar'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { IoArrowForward } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false)
    const t = useTranslations('HomePage.navigation')

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 150) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    })

    return (
        <header className='static lg:sticky top-auto lg:-top-5 z-30 w-full fluid gridContainer pt-0 lg:pt-6'>
            <main className='lg:hidden w-full py-3 flex items-center gap-4 justify-between'>
                <Link href='/' className=''>
                    <Image src={"/images/xencoa-logo.webp"} alt='xencoa logo' width={150} height={70} className={`w-fit ${isScrolled ? 'h-9' : 'h-14'} object-contain object-center`} />
                </Link>
                <article className='w-full flex items-center justify-end gap-3 pr-6'>
                    <LanguageChange isScrolled={isScrolled} />
                    <Link href={"auth/login"} className={`group relative bg-custom-dark-blue text-white rounded-l-lg ${isScrolled ? "text-xs py-2 pl-3.5 pr-4" : "text-sm py-2.5 pl-4 pr-6"} text-nowrap`}>
                        <span>{t('login')}</span>
                        <span className={`bg-custom-dark-blue rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center ${isScrolled ? "text-sm w-9 h-9" : "text-lg w-11 h-11"} -rotate-45 overflow-hidden`}>
                            <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                            <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                        </span>
                    </Link>
                </article>
            </main>
            <main className={`hidden lg:grid grid-cols-6 py-4 mx-auto transition-all duration-300 ${isScrolled ? 'w-3xl lg:w-4xl xl:w-5xl bg-gradient-to-bl from-black to-[#161616] px-6 pr-12 py-2 rounded-xl' : 'w-full'}`}>
                <Link href='/' className=''>
                    <Image src={"/images/xencoa-logo.webp"} alt='xencoa logo' width={150} height={70} className={`w-fit ${isScrolled ? 'h-9' : 'h-14'} object-contain object-center`} />
                </Link>
                <Navbar isScrolled={isScrolled} />
                <article className='w-full flex items-center justify-end gap-3'>
                    <LanguageChange isScrolled={isScrolled} />
                    <Link href={"auth/login"} className={`group relative bg-custom-dark-blue text-white rounded-l-lg ${isScrolled ? "text-xs py-2 pl-3.5 pr-4" : "text-sm py-2.5 pl-4 pr-6"} text-nowrap`}>
                        <span>{t('login')}</span>
                        <span className={`bg-custom-dark-blue rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center ${isScrolled ? "text-sm w-9 h-9" : "text-lg w-11 h-11"} -rotate-45 overflow-hidden`}>
                            <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                            <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                        </span>
                    </Link>
                </article>
            </main>
        </header>
    )
}
