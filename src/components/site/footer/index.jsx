import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoArrowForward } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import MotionScrollInView from '../common/motionScrollInView';

export default function Footer() {
    const t = useTranslations('HomePage.footer');
    const tNav = useTranslations('HomePage.navigation');

    const socials = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=61581296693788",
            icon: FaFacebook
        },
        {
            name: "Twitter",
            url: "https://x.com/xencoaofficial",
            icon: FaXTwitter
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/xencoa_official/",
            icon: FaInstagram
        },

    ]

    return (
        <footer className='fluid gridContainer w-full px-2 pb-0.5 mt-12'>
            <MotionScrollInView className={"w-full"}>
                <section className='relative w-full bg-gradient-to-b from-black to-[#1b1b1b] rounded-xl min-h-96 max-h-96'>
                    <Image src={"/images/xencoa-logo-item-top.webp"} alt='xencoa logo item' width={200} height={200} className="absolute -top-3 lg:-top-6 -left-3 lg:-left-6 w-fit h-20 lg:h-36 skew-x-[11deg] skew-y-[5deg] drop-shadow-[6px_6px_5px_black]" />
                    <article className='flex flex-col items-start gap-3 sm:gap-5 p-8'>
                        <h3 className='text-white text-2xl sm:text-3xl lg:text-4xl font-light max-w-md'>{t('slogan')}</h3>
                        <p className='text-white/70 text-sm lg:text-base max-w-lg'>{t('description')}</p>
                        <Link href={"auth/login"} className='group relative bg-custom-orange text-white rounded-l-lg text-xs py-2 pl-3.5 pr-4 text-nowrap mt-2'>
                            <span>{tNav('login')}</span>
                            <span className={`bg-custom-orange rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-sm w-9 h-9 -rotate-45 overflow-hidden`}>
                                <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                            </span>
                        </Link>
                    </article>
                    <article className='absolute right-0 bottom-0 h-[30%] lg:h-[55%] w-fit flex items-center gap-4 max-w-6xl overflow-hidden rounded-br-xl'>
                        <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black' />
                        <Image src={"/images/about-1.webp"} alt='nano smart paste technology' width={400} height={400} className="w-fit h-full object-cover object-center" />
                        <Image src={"/images/xencoa-3.webp"} alt='xencoa energy solutions' width={400} height={400} className="w-fit h-full object-cover object-center" />
                        <Image src={"/images/hero-carousel/6.webp"} alt='innovative energy products' width={400} height={400} className="w-fit max-w-[159px] h-full object-cover object-center" />
                        <Image src={"/images/about-4.webp"} alt='sustainable energy future' width={400} height={400} className="w-fit h-full object-cover object-center" />
                    </article>
                </section>
            </MotionScrollInView>
            <section className='fluid gridContainer w-full pb-4 pt-6'>
                <main className='border-t border-gray-300 w-full flex items-center justify-between gap-6 pt-3 sm:pt-2'>
                    <Link href='/' className=''>
                        <Image src={"/images/xencoa-logo-black.webp"} alt='xencoa logo' width={150} height={70} className="w-fit h-7 sm:h-10 object-contain object-center" />
                    </Link>
                    <article className='sm:block hidden py-6 text-black/70 text-xss sm:text-xs text-center'>
                        <p>{t('rights')}</p>
                    </article>
                    <article className='flex items-center gap-4'>
                        {socials.map((social, index) => (
                            <Link key={index} href={social.url} target='_blank' rel='noopener noreferrer' className='p-1.5 sm:p-2 rounded-sm border border-black text-black hover:text-custom-orange transition-colors' aria-label={social.name}>
                                <social.icon className='text-xs sm:text-sm' />
                            </Link>
                        ))}
                    </article>
                </main>
                <article className='sm:hidden w-full flex items-center justify-center  text-black/70 text-xs text-center pt-4'>
                    <p>{t('rights')}</p>
                </article>
            </section>
        </footer>
    )
}
