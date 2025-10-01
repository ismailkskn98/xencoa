import React from 'react'

export default async function ResetPasswordPage({ params }) {
    const { token } = await params;
    return (
        <div>ResetPasswordPage</div>
    )
}
