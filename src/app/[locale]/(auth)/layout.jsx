import React from 'react'

export default async function AuthLayout({ children, params }) {
    const { locale } = await params;
    return (
        <main className='w-full gridContainer font-geist-sans'>
            {children}
        </main>
    )
}
