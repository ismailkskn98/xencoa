'use client';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { IoArrowForward } from "react-icons/io5";
import { Link } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "Welcome to Our Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ullam magni esse eveniet expedita dicta maxime libero sit fugit accusantium, autem ipsum officiis minima, totam vel nulla soluta nam modi!",
            image: "/images/hero-carousel/1.webp"
        },
        {
            title: "Welcome to Our Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ullam magni esse eveniet expedita dicta maxime libero sit fugit accusantium, autem ipsum officiis minima, totam vel nulla soluta nam modi!",
            image: "/images/hero-carousel/2.webp"
        },
        {
            title: "Welcome to Our Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ullam magni esse eveniet expedita dicta maxime libero sit fugit accusantium, autem ipsum officiis minima, totam vel nulla soluta nam modi!",
            image: "/images/hero-carousel/3.webp"
        },
        {
            title: "Welcome to Our Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ullam magni esse eveniet expedita dicta maxime libero sit fugit accusantium, autem ipsum officiis minima, totam vel nulla soluta nam modi!",
            image: "/images/hero-carousel/4.webp"
        },

    ];

    return (
        <main className='w-full h-full'>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ prevEl: '#carousel-prev', nextEl: '#carousel-next' }}
                pagination={{ el: '#carousel-pagination', clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                onSlideChange={(sw) => {
                    setActiveIndex(sw.realIndex);
                }}
                className='w-full h-full rounded-xl'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className='relative w-full h-full pb-24 pl-6'>
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />
                        <div className="absolute inset-0 z-10 bg-black/10" />
                        <AnimatePresence mode="wait">
                            {activeIndex === index && (
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className='relative z-30 gridContainer w-full h-full'>
                                    <div className='w-full h-full flex items-end'>
                                        <section className='relative z-10 flex flex-col items-start max-w-3xl'>
                                            <motion.h2
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4, duration: 0.8 }}
                                                className='text-6xl 2xl:text-7xl font-light text-white'>{slide.title}</motion.h2>
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6, duration: 0.8 }}
                                                className='mt-4 text-lg leading-relaxed text-white'>{slide.description}</motion.p>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8, duration: 0.8 }}
                                                className='flex items-center gap-8 mt-4'>
                                                <Link href={"auth/login"} className='group relative bg-custom-orange text-white py-2 pl-4 pr-8 rounded-l-lg'>
                                                    <span>Get Started</span>
                                                    <span className='w-12 h-12 bg-custom-orange rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-xl -rotate-45 overflow-hidden'>
                                                        <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                                        <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                                                    </span>
                                                </Link>
                                                <Link href={"auth/login"} className='group relative bg-custom-dark-blue text-white py-2 pl-4 pr-8 rounded-l-lg'>
                                                    <span>Get Started</span>
                                                    <span className='w-12 h-12 bg-custom-dark-blue rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-xl -rotate-45 overflow-hidden'>
                                                        <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                                        <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        </section>
                                    </div>
                                </motion.section>
                            )}
                        </AnimatePresence>
                        <Image src={slide.image} alt={`hero carousel ${index + 1}`} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover object-bottom-right rounded-3xl" />
                    </SwiperSlide>
                ))}
                <motion.article
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='absolute bottom-12 right-12 flex items-center gap-6 z-10'>
                    <div id='carousel-prev' className='w-14 h-14 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white flex items-center justify-center rounded-full cursor-pointer transition-colors text-3xl'>
                        <IoIosArrowRoundBack />
                    </div>
                    <div id='carousel-next' className='w-14 h-14 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white flex items-center justify-center rounded-full cursor-pointer transition-colors text-3xl'>
                        <IoIosArrowRoundForward />
                    </div>
                </motion.article>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    id='carousel-pagination' className='!max-w-[3px] absolute z-20 !right-16 !top-1/2 !-translate-y-1/2 flex flex-col items-center justify-center gap-3 pagination-custom !left-auto !bottom-auto'></motion.div>
            </Swiper>
        </main>
    )
}
