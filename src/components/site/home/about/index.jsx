import React from 'react'
import { useTranslations } from 'next-intl'
import MotionScrollInView from '../../common/motionScrollInView';
import MotionScrollInViewVariant from '../../common/motionScrollInViewVariant';

export default function About() {
    const t = useTranslations('HomePage');
    return (
        <section id="about" className="w-full fluid gridContainer pt-16">
            <main className='w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 xl:gap-8 2xl:gap-16'>
                <MotionScrollInViewVariant className={"w-full flex flex-col items-start gap-6"}>
                    <div className='w-fit h-fit flex flex-col items-start gap-3'>
                        <span className='inline-block bg-custom-orange text-white text-sm px-4 py-2 rounded-full font-medium'>
                            {t('about.title')}
                        </span>
                        <div className='w-fit h-fit relative'>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
                                {t('about.subtitle')}
                            </h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-start leading-relaxed max-w-2xl text-gray-700 text-base gap-5'>
                        <p className="w-full">
                            {t('about.description')}
                        </p>
                        <p className="w-full">
                            {t('about.vision.description')}
                        </p>
                        <p className="w-full">
                            {t('about.technology.description')}
                        </p>
                    </div>
                </MotionScrollInViewVariant>
                <MotionScrollInView className={"w-full"}>
                    <article className='w-full grid grid-cols-4 grid-rows-2 gap-2 sm:gap-6'>
                        <div className="relative w-full h-64">
                            <svg width="0" height="0" className="absolute">
                                <defs>
                                    <clipPath id="cinch" clipPathUnits="objectBoundingBox">
                                        <path d=" M0,0 H1 C1,0 0.95,0.266 0.95,0.5 C0.95,0.734 1,1 1,1 H0 C0,1 0.05,0.734 0.05,0.5 C0.05,0.266 0,0 0,0 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className='absolute inset-0 bg-[url("/images/about-1.webp")] bg-cover bg-center bg-no-repeat'
                                style={{ clipPath: 'url(#cinch)' }}
                            />
                        </div>
                        <div className="relative col-span-2 row-span-2 w-full h-full">
                            <svg width="0" height="0" className="absolute">
                                <defs>
                                    <clipPath id="cinch" clipPathUnits="objectBoundingBox">
                                        <path d=" M0,0 H1 C1,0 0.95,0.266 0.95,0.5 C0.95,0.734 1,1 1,1 H0 C0,1 0.05,0.734 0.05,0.5 C0.05,0.266 0,0 0,0 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className='absolute inset-0 bg-[url("/images/about-2.webp")] bg-cover bg-center bg-no-repeat'
                                style={{ clipPath: 'url(#cinch)' }}
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <svg width="0" height="0" className="absolute">
                                <defs>
                                    <clipPath id="cinch" clipPathUnits="objectBoundingBox">
                                        <path d=" M0,0 H1 C1,0 0.95,0.266 0.95,0.5 C0.95,0.734 1,1 1,1 H0 C0,1 0.05,0.734 0.05,0.5 C0.05,0.266 0,0 0,0 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className='absolute inset-0 bg-[url("/images/about-3.webp")] bg-cover bg-center bg-no-repeat'
                                style={{ clipPath: 'url(#cinch)' }}
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <svg width="0" height="0" className="absolute">
                                <defs>
                                    <clipPath id="cinch" clipPathUnits="objectBoundingBox">
                                        <path d=" M0,0 H1 C1,0 0.95,0.266 0.95,0.5 C0.95,0.734 1,1 1,1 H0 C0,1 0.05,0.734 0.05,0.5 C0.05,0.266 0,0 0,0 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className='absolute inset-0 bg-[url("/images/about-1.webp")] bg-cover bg-center bg-no-repeat'
                                style={{ clipPath: 'url(#cinch)' }}
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <svg width="0" height="0" className="absolute">
                                <defs>
                                    <clipPath id="cinch" clipPathUnits="objectBoundingBox">
                                        <path d=" M0,0 H1 C1,0 0.95,0.266 0.95,0.5 C0.95,0.734 1,1 1,1 H0 C0,1 0.05,0.734 0.05,0.5 C0.05,0.266 0,0 0,0 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className='absolute inset-0 bg-[url("/images/about-4.webp")] bg-cover bg-center bg-no-repeat'
                                style={{ clipPath: 'url(#cinch)' }}
                            />
                        </div>
                    </article>
                </MotionScrollInView>
            </main>
        </section>
    )
}
