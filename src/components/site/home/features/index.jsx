import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

export default function Features() {
    return (
        <section id="features" className="w-full gridContainer pt-24 pb-16">
            <main className='w-full mx-auto max-w-10/12 flex flex-col items-center gap-12'>
                <article className='w-fit h-fit flex flex-col items-center gap-3 mb-8'>
                    <span className='inline-block bg-custom-orange text-white text-sm px-4 py-2 rounded-full'>
                        Ürünlerimiz
                    </span>
                    <div className='w-fit h-fit relative'>
                        <h2 className="text-5xl font-light text-gray-900">
                            Yenilikçi Enerji Vizyonu
                        </h2>
                        <Image src="/images/xencoa-logo-item-top.webp" alt="Xencoa logo item" width={50} height={50} className='absolute left-1/2 -translate-x-1/2 -bottom-12 object-contain object-center h-14 -rotate-138' />
                    </div>
                </article>
                <section className='w-full grid grid-cols-3 gap-4 place-items-stretch rounded-lg overflow-hidden'>
                    <article className='col-span-2 p-6 bg-custom-orange/5 flex flex-col items-start gap-2 rounded-lg'>
                        <h3 className='text-2xl font-base text-gray-900'>Nano Akıllı Macun</h3>
                        <p className='text-gray-700 text-sm font-light leading-relaxed max-w-lg'>
                            Nano Akıllı Macun, elektrik iletkenliğini artıran ve enerji verimliliğini maksimize eden devrim niteliğinde bir üründür. Bu yenilikçi macun, elektrikli cihazların performansını artırırken enerji tüketimini azaltır, böylece hem çevre dostu hem de ekonomik bir çözüm sunar.
                        </p>
                        <Link href={"auth/login"} className='group relative bg-custom-dark-blue text-white py-1.5 pl-3 pr-4 rounded-l-lg mt-3'>
                            <span className='text-sm'>Get Started</span>
                            <span className='w-10 h-10 bg-custom-dark-blue rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-base -rotate-45 overflow-hidden'>
                                <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                            </span>
                        </Link>
                    </article>
                    <div className='w-full h-full bg-[url("/images/about-1.webp")] bg-cover bg-center rounded-lg' />
                </section>
                <section className='w-full grid grid-cols-3 gap-4 place-items-stretch rounded-lg overflow-hidden'>
                    <div className='w-full h-full bg-[url("/images/about-1.webp")] bg-cover bg-center rounded-lg' />
                    <article className='col-span-2 p-6 bg-custom-dark-blue/5 flex flex-col items-start gap-3 rounded-lg'>
                        <h3 className='text-2xl font-base text-gray-900'>Nano Akıllı Macun</h3>
                        <p className='text-gray-700 text-sm font-light leading-relaxed max-w-lg'>
                            Nano Akıllı Macun, elektrik iletkenliğini artıran ve enerji verimliliğini maksimize eden devrim niteliğinde bir üründür. Bu yenilikçi macun, elektrikli cihazların performansını artırırken enerji tüketimini azaltır, böylece hem çevre dostu hem de ekonomik bir çözüm sunar.
                        </p>
                        <Link href={"auth/login"} className='group relative bg-custom-orange text-white py-1.5 pl-3 pr-4 rounded-l-lg'>
                            <span className='text-sm'>Get Started</span>
                            <span className='w-10 h-10 bg-custom-orange rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-base -rotate-45 overflow-hidden'>
                                <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                            </span>
                        </Link>
                    </article>
                </section>
                <section className='w-full grid grid-cols-3 gap-4 place-items-stretch rounded-lg overflow-hidden'>
                    <article className='col-span-2 p-6 bg-custom-orange/5 flex flex-col items-start gap-2 rounded-lg'>
                        <h3 className='text-2xl font-base text-gray-900'>Nano Akıllı Macun</h3>
                        <p className='text-gray-700 text-sm font-light leading-relaxed max-w-lg'>
                            Nano Akıllı Macun, elektrik iletkenliğini artıran ve enerji verimliliğini maksimize eden devrim niteliğinde bir üründür. Bu yenilikçi macun, elektrikli cihazların performansını artırırken enerji tüketimini azaltır, böylece hem çevre dostu hem de ekonomik bir çözüm sunar.
                        </p>
                        <Link href={"auth/login"} className='group relative bg-custom-dark-blue text-white py-1.5 pl-3 pr-4 rounded-l-lg mt-3'>
                            <span className='text-sm'>Get Started</span>
                            <span className='w-10 h-10 bg-custom-dark-blue rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-base -rotate-45 overflow-hidden'>
                                <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                            </span>
                        </Link>
                    </article>
                    <div className='w-full h-full bg-[url("/images/about-1.webp")] bg-cover bg-center rounded-lg' />
                </section>
                <section className='w-full grid grid-cols-3 gap-4 place-items-stretch rounded-lg overflow-hidden'>
                    <div className='w-full h-full bg-[url("/images/about-1.webp")] bg-cover bg-center rounded-lg' />
                    <article className='col-span-2 p-6 bg-custom-dark-blue/5 flex flex-col items-start gap-3 rounded-lg'>
                        <h3 className='text-2xl font-base text-gray-900'>Nano Akıllı Macun</h3>
                        <p className='text-gray-700 text-sm font-light leading-relaxed max-w-lg'>
                            Nano Akıllı Macun, elektrik iletkenliğini artıran ve enerji verimliliğini maksimize eden devrim niteliğinde bir üründür. Bu yenilikçi macun, elektrikli cihazların performansını artırırken enerji tüketimini azaltır, böylece hem çevre dostu hem de ekonomik bir çözüm sunar.
                        </p>
                        <Link href={"auth/login"} className='group relative bg-custom-orange text-white py-1.5 pl-3 pr-4 rounded-l-lg'>
                            <span className='text-sm'>Get Started</span>
                            <span className='w-10 h-10 bg-custom-orange rounded-full absolute top-1/2 -translate-y-1/2 -right-6 text-white flex items-center justify-center text-base -rotate-45 overflow-hidden'>
                                <IoArrowForward className='group-hover:translate-x-12 group-hover:-translate-y-0 transition-all duration-200' />
                                <IoArrowForward className='absolute -left-6 top-5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-200' />
                            </span>
                        </Link>
                    </article>
                </section>
            </main>
        </section>
    )
}
