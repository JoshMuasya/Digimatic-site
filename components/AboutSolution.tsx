import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const AboutSolution = () => {
    return (
        <div className='w-full flex flex-row pt-10 pb-12 justify-between px-14'>
            {/* Left */}
            <div className='w-1/2 flex flex-col items-start pl-16'>
                <Image
                    src="/solution.jpg"
                    alt="Learn More"
                    width={500}
                    height={500}
                    className='rounded-2xl'
                />
            </div>

            {/* Right */}
            <div className='w-1/2 pt-32 pr-10'>
                <div className='flex flex-col justify-center align-middle'>
                    {/* Vision */}
                    <div>
                        <h1 className='text-4xl font-bold text-foreground pb-7'>
                            Our Software Solutions
                        </h1>
                    </div>

                    {/* Engagement Statement */}
                    <div className=''>
                        <h1 className='text-xl text-bforeground pb-7'>
                            At Digimatic, we are committed to providing our clients with the best software solutions on the market. Our team of experts works tirelessly to ensure that our software is user-friendly, reliable, and efficient.
                        </h1>

                        <h1 className='text-xl text-bforeground pb-7'>
                            Start with the customer – find out what they want and give it to them.
                        </h1>
                    </div>
                </div>

                {/* CTA */}
                <div className=''>
                    <Button asChild className='text-2xl font-semibold p-7'>
                        <Link href="/contact">Learn More</Link>
                    </Button>
                </div>

            </div>
        </div >
    )
}

export default AboutSolution
