import React from 'react'
import HeroCarousel from './heroCarousel'

export default function Hero() {
    return (
        <main className='fluid relative z-10 w-full h-screen mt-[-112px] p-2'>
            <div className='fluid w-full h-full flex items-end shadow-md rounded-xl'>
                <HeroCarousel />
            </div>
        </main>
    )
}
