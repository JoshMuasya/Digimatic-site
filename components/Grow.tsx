import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const Grow = () => {
    return (
        <div className='grow-bg w-full flex flex-col justify-center align-middle items-center relative'>
            {/* Overlay */}
            <div className='bg-black/70 absolute h-full left-0 w-full z-10' />

            {/* Top */}
            <div className='flex flex-col justify-center align-middle items-center py-10'>
                {/* Title */}
                <h1 className='text-6xl font-bold z-20 text-white pb-10'>
                    Grow With Us
                </h1>

                {/* Body */}
                <p className='font-medium z-20 text-white text-center w-1/3 text-lg'>
                    Unlock your business potential with our comprehensive services in software development, web development, graphics design, and soon, cybersecurity.
                    Our expert team leverages cutting-edge technology and innovative solutions to propel your growth, ensuring you stay ahead in a competitive market.
                </p>
            </div>

            {/* Image */}
            <div className='z-20'>
                <Image
                    src="/growth.jpg"
                    alt="Learn More"
                    width={1000}
                    height={800}
                    className='rounded-2xl'
                />
            </div>

            {/* Bottom */}
            <div className='flex flex-col justify-center align-middle items-center py-10'>
                {/* Statement */}
                <p className='font-medium z-20 text-white text-center w-1/3 text-lg'>
                    Unlock your business potential with our innovative solutions and expert team—let us help you open the future and drive your success today.
                </p>

                {/* CTA */}
                <div className='z-20 pt-8'>
                    <Button asChild className='text-2xl font-semibold p-7'>
                        <Link href="">Get in Touch</Link>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Grow
