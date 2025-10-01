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
import { useTranslations } from 'next-intl';


export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useTranslations('HomePage.hero.slides');

    const slides = [
        {
            badge: t('0.badge'),
            title: t('0.title'),
            description: t('0.description'),
            cta: t('0.cta'),
            ctaVideo: t('0.ctaVideo'),
            image: "/images/hero-carousel/1.webp"
        },
        {
            badge: t('1.badge'),
            title: t('1.title'),
            description: t('1.description'),
            cta: t('1.cta'),
            ctaVideo: t('1.ctaVideo'),
            image: "/images/hero-carousel/2.webp"
        },
        {
            badge: t('2.badge'),
            title: t('2.title'),
            description: t('2.description'),
            cta: t('2.cta'),
            ctaVideo: t('2.ctaVideo'),
            image: "/images/hero-carousel/3.webp"
        },
        {
            badge: t('3.badge'),
            title: t('3.title'),
            description: t('3.description'),
            cta: t('3.cta'),
            ctaVideo: t('3.ctaVideo'),
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
                autoplay={{ delay: 5000 }}
                onSlideChange={(sw) => {
                    setActiveIndex(sw.realIndex);
                }}
                className='w-full h-full rounded-xl'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className='relative w-full h-full pb-16 lg:pb-24 pt-16 lg:pt-0 pl-6'>
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
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2, duration: 0.8 }}
                                                className='mb-3'>
                                                <span className='inline-block bg-custom-orange/90 text-white text-xs sm:text-sm px-4 py-2 rounded-full font-normal sm:font-medium'>
                                                    {slide.badge}
                                                </span>
                                            </motion.div>
                                            <motion.h2
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4, duration: 0.8 }}
                                                className='text-4xl sm:text-5xl 3xl:text-6xl font-light text-white leading-tight'>{slide.title}</motion.h2>
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6, duration: 0.8 }}
                                                className='mt-5 text-sm sm:text-base 3xl:text-lg leading-relaxed text-white/90'>{slide.description}</motion.p>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8, duration: 0.8 }}
                                                className='flex items-center gap-10 mt-6'>
                                                <Link href={"#features"} className='group relative bg-custom-orange text-white py-1.5 sm:py-2 pl-4 sm:pl-5 pr-4 sm:pr-6 rounded-l-lg'>
                                                    <span className='text-sm 3xl:text-base'>{slide.cta}</span>
                                                    <span className='w-10 sm:w-11 h-10 sm:h-11 bg-custom-orange rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-xl -rotate-45 overflow-hidden'>
                                                        <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                                        <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                                                    </span>
                                                </Link>
                                                <button type="button" className='group relative bg-custom-dark-blue text-white py-1.5 sm:py-2 pl-4 sm:pl-5 pr-4 sm:pr-6 rounded-l-lg !cursor-pointer'>
                                                    <span className='text-sm 3xl:text-base'>{slide.ctaVideo}</span>
                                                    <span className='w-10 sm:w-11 h-10 sm:h-11 bg-custom-dark-blue rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-xl -rotate-45 overflow-hidden'>
                                                        <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                                        <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                                                    </span>
                                                </button>
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
                    className='absolute bottom-12 right-12 sm:flex items-center gap-6 z-10 hidden'>
                    <div id='carousel-prev' className='w-12 3xl:w-14 h-12 3xl:h-14 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white flex items-center justify-center rounded-full cursor-pointer transition-colors text-2xl'>
                        <IoIosArrowRoundBack />
                    </div>
                    <div id='carousel-next' className='w-12 3xl:w-14 h-12 3xl:h-14 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white flex items-center justify-center rounded-full cursor-pointer transition-colors text-2xl'>
                        <IoIosArrowRoundForward />
                    </div>
                </motion.article>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    id='carousel-pagination' className='hidden !max-w-[3px] absolute z-20 !left-1/2 sm:!left-auto translate-x-1/2 sm:translate-x-0 !right-auto sm:!right-16 !bottom-3 sm:!bottom-auto !top-auto sm:!top-1/2 !-translate-y-1/2 sm:flex !flex-row sm:!flex-col items-center justify-center gap-3 pagination-custom'></motion.div>
            </Swiper>
        </main>
    )
}
