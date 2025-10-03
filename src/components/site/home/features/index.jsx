import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import MotionScrollInView from '../../common/motionScrollInView';
import MotionScrollInViewVariant from '../../common/motionScrollInViewVariant';

export default function Features() {
    const t = useTranslations('HomePage.features');

    return (
        <section id="features" className="w-full fluid gridContainer pt-20 lg:pt-24 pb-16">
            <main className='w-full mx-auto max-w-full xl:max-w-11/12 2xl:max-w-10/12 flex flex-col items-center gap-12'>
                <MotionScrollInViewVariant className={"w-fit h-fit flex flex-col items-start lg:items-center gap-3 mb-5 lg:mb-8"}>
                    <span className='inline-block bg-custom-orange text-white text-sm px-4 py-2 rounded-full'>
                        {t('title')}
                    </span>
                    <div className='w-fit h-fit relative'>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 text-start lg:text-center">
                            {t('subtitle')}
                        </h2>
                        <Image src="/images/xencoa-logo-item-top.webp" alt="Xencoa logo item" width={50} height={50} className='absolute left-2 lg:left-1/2 translate-x-0 lg:-translate-x-1/2 -bottom-8 lg:-bottom-10 object-contain object-center h-14 -rotate-138' />
                    </div>
                </MotionScrollInViewVariant>
                <MotionScrollInView className={"w-full"}>
                    <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 2xl:gap-8 min-h-56 place-items-stretch rounded-lg overflow-hidden'>
                        <article className='col-span-1 md:col-span-2 p-6 bg-custom-orange/5 flex flex-col items-start justify-center gap-3 rounded-lg'>
                            <h3 className='text-2xl font-medium text-gray-900'>{t('items.0.title')}</h3>
                            <p className='text-gray-700 text-sm font-light leading-relaxed max-w-xl'>
                                {t('items.0.description')}
                            </p>
                        </article>
                        <div className='w-full h-52 md:h-full bg-[url("/images/hero-carousel/3.webp")] bg-cover bg-bottom md:bg-center bg-no-repeat rounded-lg' />
                    </section>
                </MotionScrollInView>
                <MotionScrollInView className={"w-full"}>
                    <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 2xl:gap-8 min-h-56 place-items-stretch rounded-lg overflow-hidden'>
                        <div className='w-full h-52 md:h-full bg-[url("/images/hero-carousel/6.webp")] bg-cover bg-bottom md:bg-center bg-no-repeat rounded-lg' />
                        <article className='col-span-1 md:col-span-2 p-6 bg-custom-dark-blue/5 flex flex-col items-start justify-center gap-3 rounded-lg'>
                            <h3 className='text-2xl font-medium text-gray-900'>{t('items.1.title')}</h3>
                            <p className='text-gray-700 text-sm font-light leading-relaxed max-w-xl'>
                                {t('items.1.description')}
                            </p>
                        </article>
                    </section>
                </MotionScrollInView>
                <MotionScrollInView className={"w-full"}>
                    <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 2xl:gap-8 min-h-56 place-items-stretch rounded-lg overflow-hidden'>
                        <article className='col-span-1 md:col-span-2 p-6 bg-custom-orange/5 flex flex-col items-start justify-center gap-3 rounded-lg'>
                            <h3 className='text-2xl font-medium text-gray-900'>{t('items.2.title')}</h3>
                            <p className='text-gray-700 text-sm font-light leading-relaxed max-w-xl'>
                                {t('items.2.description')}
                            </p>
                        </article>
                        <div className='w-full h-52 md:h-full bg-[url("/images/xencoa-2.webp")] bg-cover bg-bottom md:bg-center bg-no-repeat rounded-lg' />
                    </section>
                </MotionScrollInView>
                <MotionScrollInView className={"w-full"}>
                    <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 2xl:gap-8 min-h-56 place-items-stretch rounded-lg overflow-hidden'>
                        <div className='w-full h-52 md:h-full bg-[url("/images/xencoa-3.webp")] bg-cover bg-bottom md:bg-center bg-no-repeat rounded-lg' />
                        <article className='col-span-2 p-6 bg-custom-dark-blue/5 flex flex-col items-start justify-center gap-3 rounded-lg'>
                            <h3 className='text-2xl font-medium text-gray-900'>{t('items.3.title')}</h3>
                            <p className='text-gray-700 text-sm font-light leading-relaxed max-w-xl'>
                                {t('items.3.description')}
                            </p>
                        </article>
                    </section>
                </MotionScrollInView>
                <MotionScrollInView className={"w-full"}>
                    <section className='w-full mt-0 lg:mt-8 p-8 bg-gradient-to-br from-custom-orange/10 to-custom-dark-blue/10 rounded-lg'>
                        <h3 className='text-2xl font-medium text-gray-900 mb-3'>{t('additional.title')}</h3>
                        <p className='text-gray-700 text-base leading-relaxed max-w-3xl'>
                            {t('additional.description')}
                        </p>
                    </section>
                </MotionScrollInView>
            </main>
        </section>
    )
}
