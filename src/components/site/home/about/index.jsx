import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section id="about" className="w-full gridContainer pt-16">
            <main className='w-full flex items-center gap-16'>
                <article className='w-full flex flex-col items-start gap-12'>
                    <div className='w-fit h-fit flex flex-col items-start gap-3'>
                        <span className='inline-block bg-custom-orange text-white text-sm px-4 py-2 rounded-full'>
                            Xencoa Nedir?
                        </span>
                        <div className='w-fit h-fit relative'>
                            <h2 className="text-5xl font-light text-gray-900">
                                Yenilikçi Enerji Vizyonu
                            </h2>
                            <Image src="/images/xencoa-logo-item-top.webp" alt="Xencoa logo item" width={50} height={50} className='absolute -bottom-7 left-3.5 object-contain object-center h-12 -rotate-138' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start leading-relaxed max-w-2xl text-gray-600 text-base gap-2'>
                        <p className="w-full">
                            <span className='text-custom-orange font-medium'>Xencoa</span>, geleceğin enerji vizyonunu bugünden hayata taşımayı hedefleyen yenilikçi bir projedir.
                            Dünyada geliştirilen <strong>Nano Akıllı Macun</strong> Teknolojisini Türkiye’ye getirerek, enerji alanında devrim niteliğinde çözümler sunar.
                        </p>
                        <p className="w-full">
                            Aynı zamanda bu teknolojiyi yatırım fırsatı haline getiren, Nano Teknoloji, Network Marketing ve Kripto dünyasını bir araya getiren vizyoner bir girişimdir.Her yeni kullanıcıyla büyüyen, paylaşım temelli iş modeli sayesinde<span className='text-custom-orange font-medium'> Xencoa</span>; hem bireylere ek gelir sağlar, hem de enerji sektöründe sürdürülebilir bir dönüşümün parçası olma şansı verir.
                        </p>
                    </div>
                </article>
                <article className='w-full grid grid-cols-4 grid-rows-2 gap-6'>
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
            </main>
        </section>
    )
}
