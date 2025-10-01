import Image from 'next/image'
import React from 'react'

export default function FAQ() {
    const faqs = [
        {
            id: 1,
            question: "Do you handle international shipments?",
            answer: "Yes, we offer international shipping to a wide range of countries. Please check our shipping policy or contact customer support for specific destination availability."
        },
        {
            id: 2,
            question: "What types of shipping services do you offer?",
            answer: "We provide several shipping options including standard, expedited, and express services. The available options may vary depending on your location and the items ordered."
        },
        {
            id: 3,
            question: "Can I track my shipment?",
            answer: "Absolutely. Once your order is shipped, you will receive a tracking number via email. You can use this to monitor your shipment's progress in real time."
        },
        {
            id: 4,
            question: "How long does delivery take?",
            answer: "Delivery times vary depending on the shipping method and destination. Typically, international orders arrive within 5 to 15 business days. Express options may offer faster delivery."
        }
    ]

    return (
        <section id="faq" className="w-full gridContainer pt-24 pb-16">
            <main className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12'>
                <article className='w-fit h-fit flex flex-col items-center gap-3 mb-8'>
                    <span className='inline-block bg-custom-orange text-white text-sm px-4 py-2 rounded-full'>
                        FAQs
                    </span>
                    <div className='w-fit h-fit relative'>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 text-center">
                            Questions?<br />
                            Glad you asked
                        </h2>
                        <Image src="/images/xencoa-logo-item-top.webp" alt="Xencoa logo item" width={50} height={50} className='absolute left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-12 object-contain object-center h-10 sm:h-14 -rotate-138' />
                    </div>
                </article>
                <section className='w-full max-w-5xl'>
                    <div className="space-y-8">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-10 h-10 bg-custom-orange text-white rounded-full flex items-center justify-center text-lg font-base">
                                        {faq.id}
                                    </span>
                                    <h3 className="text-xl max-w-sm font-medium text-gray-900 leading-relaxed">
                                        {faq.question}
                                    </h3>
                                </div>
                                <div className="lg:pl-0 pl-14">
                                    <p className="text-gray-600 leading-relaxed text-base font-light">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    )
}
