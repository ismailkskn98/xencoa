import { CustomTimeline } from '@/components/ui/customTimeline';
import Image from 'next/image';
import React from 'react'
import { useTranslations } from 'next-intl';
import MotionScrollInViewVariant from '../../common/motionScrollInViewVariant';
import MotionScrollInView from '../../common/motionScrollInView';

export default function Timeline() {
    const t = useTranslations('HomePage.timeline');

    const data = [
        {
            title: t('items.0.year'),
            content: (
                <>
                    <h3 className="mb-2 text-lg font-medium md:text-xl text-white">
                        {t('items.0.title')}
                    </h3>
                    <p className="mb-8 text-sm font-normal md:text-base text-neutral-200 leading-relaxed">
                        {t('items.0.description')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/about-1.webp"
                            alt="nano technology research"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <Image
                            src="/images/about-2.webp"
                            alt="research process"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </>
            ),
        },
        {
            title: t('items.1.year'),
            content: (
                <>
                    <h3 className="mb-2 text-lg font-medium md:text-xl text-white">
                        {t('items.1.title')}
                    </h3>
                    <p className="mb-8 text-sm font-normal md:text-base text-neutral-200 leading-relaxed">
                        {t('items.1.description')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/about-3.webp"
                            alt="technology development"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <Image
                            src="/images/about-4.webp"
                            alt="product maturation"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </>
            ),
        },
        {
            title: t('items.2.year'),
            content: (
                <>
                    <h3 className="mb-2 text-lg font-medium md:text-xl text-white">
                        {t('items.2.title')}
                    </h3>
                    <p className="mb-8 text-sm font-normal md:text-base text-neutral-200 leading-relaxed">
                        {t('items.2.description')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/about-1.webp"
                            alt="international certification"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <Image
                            src="/images/about-2.webp"
                            alt="quality approvals"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </>
            ),
        },
        {
            title: t('items.3.year'),
            content: (
                <>
                    <h3 className="mb-2 text-lg font-medium md:text-xl text-white">
                        {t('items.3.title')}
                    </h3>
                    <p className="mb-8 text-sm font-normal md:text-base text-neutral-200 leading-relaxed">
                        {t('items.3.description')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/about-3.webp"
                            alt="xencoa turkey"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <Image
                            src="/images/about-4.webp"
                            alt="xencoa launch"
                            width={500}
                            height={500}
                            className="h-32 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </>
            ),
        },
    ];

    return (
        <section id="timeline" className="w-full fluid bg-gradient-to-br from-black to-[#232323] gridContainer pt-20 lg:pt-24 pb-10 lg:pb-16">
            <main className='w-full mx-auto max-w-max xl:max-w-11/12 2xl:max-w-10/12 flex flex-col items-start gap-0'>
                <MotionScrollInViewVariant className={"w-fit h-fit max-w-3xl flex flex-col gap-3 mb-8 lg:mb-12"}>
                    <span className='inline-block w-fit bg-custom-orange text-white/90 text-sm px-4 py-2 rounded-full'>
                        {t('title')}
                    </span>
                    <div className='w-fit h-fit relative'>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/90">
                            {t('subtitle')}
                        </h2>
                    </div>
                </MotionScrollInViewVariant>
                <MotionScrollInView className={"relative w-full overflow-clip"}>
                    <CustomTimeline data={data} />
                </MotionScrollInView>
            </main>
        </section>
    )
}
