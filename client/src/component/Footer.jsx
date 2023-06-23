import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <div className = 'text-center h-40 bg-blue-300 opacity-70'>
            <Link className = 'm-14 no-underline hover:underline text-black'>About</Link>
            <Link className = 'm-14 no-underline hover:underline text-black'>Contact</Link>
        </div>
    )
}