import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoArrowForward } from 'react-icons/io5';

export default function Footer() {

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
            <section className='relative w-full bg-gradient-to-b from-black to-[#1b1b1b] rounded-xl min-h-96 max-h-96'>
                <Image src={"/images/xencoa-logo-item-top.webp"} alt='xencoa logo item' width={200} height={200} className="absolute -top-6 -left-6 w-fit h-36 skew-x-[11deg] skew-y-[5deg] drop-shadow-[6px_6px_5px_black]" />
                <article className='flex flex-col items-start gap-5 p-8'>
                    <h3 className='text-white text-4xl font-light max-w-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <Link href={"auth/login"} className='group relative bg-custom-orange text-white py-2 pl-4 pr-8 rounded-l-lg'>
                        <span>Get Started</span>
                        <span className='w-12 h-12 bg-custom-orange rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-xl -rotate-45 overflow-hidden'>
                            <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                            <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                        </span>
                    </Link>
                </article>
                <article className='absolute right-0 bottom-0 h-[55%] w-fit flex items-center gap-4 max-w-6xl overflow-hidden rounded-br-xl'>
                    <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black' />
                    <Image src={"/images/about-1.webp"} alt='xencoa product 1' width={400} height={400} className="w-fit h-full object-cover object-center" />
                    <Image src={"/images/about-2.webp"} alt='xencoa product 2' width={400} height={400} className="w-fit h-full object-cover object-center" />
                    <Image src={"/images/about-3.webp"} alt='xencoa product 3' width={400} height={400} className="w-fit h-full object-cover object-center" />
                    <Image src={"/images/about-4.webp"} alt='xencoa product 4' width={400} height={400} className="w-fit h-full object-cover object-center" />
                </article>
            </section>
            <section className='fluid gridContainer w-full pb-4 pt-6'>
                <main className='border-t border-gray-300 w-full flex items-center justify-between gap-6 pt-2'>
                    <Link href='/' className=''>
                        <Image src={"/images/xencoa-logo.webp"} alt='xencoa logo' width={150} height={70} className="w-fit h-10 object-contain object-center" />
                    </Link>
                    <article className='py-6 text-black/70 text-xs'>
                        <p>Copyright {new Date().getFullYear()}© Xencoa Energy</p>
                    </article>
                    <article className='flex items-center gap-4'>
                        {socials.map((social, index) => (
                            <Link key={index} href={social.url} target='_blank' rel='noopener noreferrer' className='p-2 rounded-sm border border-black text-black hover:text-custom-orange transition-colors'>
                                <social.icon size={14} />
                            </Link>
                        ))}
                    </article>
                </main>
            </section>
        </footer>
    )
}
