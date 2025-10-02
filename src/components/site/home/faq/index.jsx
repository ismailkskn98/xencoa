import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import MotionScrollInViewVariant from '../../common/motionScrollInViewVariant';

export default function FAQ() {
    const t = useTranslations('HomePage.faq');

    const questions = [
        { question: t('items.0.question'), answer: t('items.0.answer') },
        { question: t('items.1.question'), answer: t('items.1.answer') },
        { question: t('items.2.question'), answer: t('items.2.answer') },
        { question: t('items.3.question'), answer: t('items.3.answer') },
        { question: t('items.4.question'), answer: t('items.4.answer') },
        { question: t('items.5.question'), answer: t('items.5.answer') },
    ]

    return (
        <section id="faq" className="w-full fluid gridContainer pt-24 pb-16">
            <main className='w-full mx-auto max-w-max lg:max-w-11/12 xl:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12'>
                <MotionScrollInViewVariant className={"w-fit h-fit flex flex-col items-center gap-3 mb-8"}>
                    <span className='inline-block bg-custom-orange text-white text-sm px-4 py-2 rounded-full font-medium'>
                        {t('title')}
                    </span>
                    <div className='w-fit h-fit relative'>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 text-center max-w-3xl">
                            {t('subtitle')}
                        </h2>
                        <Image src="/images/xencoa-logo-item-top.webp" alt="Xencoa logo item" width={50} height={50} className='absolute left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-12 object-contain object-center h-10 sm:h-14 -rotate-138' />
                    </div>
                </MotionScrollInViewVariant>
                <MotionScrollInViewVariant className={"w-full max-w-5xl flex flex-col items-start gap-8"}>
                    {questions.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-start">
                            <div className="flex sm:flex-row flex-col items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 bg-custom-orange text-white rounded-full flex items-center justify-center text-lg font-medium">
                                    {index + 1}
                                </span>
                                <h3 className="text-xl max-w-sm font-medium text-gray-900 leading-relaxed">
                                    {item.question}
                                </h3>
                            </div>
                            <div className="lg:pl-0 pl-4">
                                <p className="text-gray-600 leading-relaxed text-base font-light">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </MotionScrollInViewVariant>
            </main>
        </section>
    )
}
