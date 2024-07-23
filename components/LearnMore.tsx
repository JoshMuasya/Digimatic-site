import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const LearnMore = () => {
    return (
        <div className='w-full flex flex-row z-10 pt-10 justify-center px-10'>
            {/* Left */}
            <div className='w-1/2 pt-52 pr-10'>
                <div className='flex flex-col justify-center align-middle'>
                    {/* Vision */}
                    <div>
                        <h1 className='text-xl text-foreground pb-7'>
                            To be the leading innovator in technology, empowering businesses and individuals to unlock their full potential and open the future through cutting-edge solutions and exceptional service.
                        </h1>
                    </div>

                    {/* Engagement Statement */}
                    <div className=''>
                        <h1 className='text-xl text-bforeground pb-7'>
                            We create unique experiences to drive engagement by empowering our teams to produce the most relevant and captivating content. With user satisfaction as our primary goal, we ensure our content consistently meets and exceeds user expectations.
                        </h1>
                    </div>
                </div>

                {/* CTA */}
                <div className=''>
                    <Button asChild className='text-2xl font-semibold p-7'>
                        <Link href="">Learn More</Link>
                    </Button>
                </div>

            </div>

            {/* Right */}
            <div className='w-1/2'>
                <img src="/phonetable.jpg" alt="Phone Table" />
            </div>
        </div >
    )
}

export default LearnMore
