
import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import React from 'react'

export default async function SiteLayout({ children, params }) {
    const { locale } = await params;
    return (
        <main className='w-full gridContainer font-geist-sans bg-site-background'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
