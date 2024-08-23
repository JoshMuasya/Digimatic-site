import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="hero-bg w-full h-screen flex flex-col justify-center align-middle items-center">
            {/* Overlay */}
            <div className='bg-black/50 absolute top-0 left-0 w-full h-screen z-0' />

            {/* Items */}
            <div className='flex flex-col justify-center align-middle items-center md:items-end z-10 w-full md:w-1/2'>
                {/* Slogan & Mission */}
                <div className='flex flex-col justify-center items-center md:items-end align-middle'>
                    {/* Slogan */}
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-background pb-7'>
                            Open the Future
                        </h1>
                    </div>

                    {/* Mission */}
                    <div className=''>
                        <h1 className='text-lg md:text-xl lg:text-2xl text-background pb-7 font-medium text-center md:text-end'>
                            We strive to create seamless, intuitive, and secure digital experiences that propel our clients into the future.
                        </h1>
                    </div>
                </div>

                {/* CTA */}
                <div className=''>
                    <Button asChild className='text-xl md:text-2xl font-semibold p-7'>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
