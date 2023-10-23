import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Property Rental Platform',
    description: 'Welcome to the frontend repository of our Property Rental Platform project. This platform allows users to easily list, search, and book rental properties, as well as provide feedback and ratings.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
