"use client"

import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"

import { FaQuoteLeft } from "react-icons/fa";

const ServiceCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className='w-full flex flex-col justify-center align-middle items-center'>
            <Carousel
                plugins={[plugin.current]}
                className="w-full lg:max-w-2xl h-1/2"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className='w-full'>
                    <CarouselItem className='w-full '>
                        <div className="p-1 w-full ">
                            <Card className='carousel-1 w-full h-full flex flex-row justify-center items-center aspect-square'>
                                <CardContent className='w-full md:h-1/2 flex flex-row justify-center items-start pt-3 md:pt-0'>
                                    {/* Icon */}
                                    <CardContent className="flex aspect-square items-center justify-center bg-primary rounded-xl">
                                        <FaQuoteLeft
                                            className='text-white w-3 h-3 md:w-10 md:h-10'
                                        />
                                    </CardContent>

                                    {/* Text */}
                                    <CardContent className="flex flex-col justify-center bg-white">
                                        <p className='text-left  p-5'>
                                            Digimatic has completely transformed our operations at Odyssey Africa Hikes through their outstanding software development, graphics design, digital marketing, and IT consultation services. Our new software solution is intuitive and efficient, our brand's visual appeal has been elevated, and our digital marketing efforts have significantly increased our online visibility and bookings. Their expert team is dedicated and highly skilled, making Digimatic a fantastic partner for any business looking to enhance their digital presence.
                                        </p>

                                        {/* Name Tag */}
                                        <div className='flex flex-row justify-center align-middle items-start'>
                                            {/* Image */}
                                            {/* <div className='w-10'>
                                                <img
                                                    src='/man.jpg'
                                                    alt='Member Photo'
                                                    className='rounded-full'
                                                />
                                            </div> */}

                                            {/* Text */}
                                            <div className='pl-5'>
                                                {/* Name */}
                                                <h1 className='text-xl font-semibold'>
                                                    John Doe - Odyssey Africa Hikes                                                    
                                                </h1>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className='w-full '>
                        <div className="p-1 w-full ">
                        <Card className='carousel-1 w-full h-full flex flex-row justify-center items-center aspect-square'>
                                <CardContent className='w-full md:h-1/2 flex flex-row justify-center items-start pt-3 md:pt-0'>
                                    {/* Icon */}
                                    <CardContent className="flex aspect-square items-center justify-center bg-primary rounded-xl">
                                        <FaQuoteLeft
                                            className='text-white w-3 h-3 md:w-10 md:h-10'
                                        />
                                    </CardContent>

                                    {/* Text */}
                                    <CardContent className="flex flex-col justify-center bg-white">
                                        <p className='text-left  p-5'>
                                        Digimatic has significantly enhanced our operations at Nyiha Mathenge Advocates through their exceptional software development, graphics design, and IT consultation services. The custom software they developed has streamlined our case management, our brand’s image has been refreshed and modernized, and our online presence and client engagement have seen remarkable growth. Their professional and knowledgeable team has been a vital partner in elevating our firm's digital footprint.
                                        </p>

                                        {/* Name Tag */}
                                        <div className='flex flex-row justify-center align-middle items-start'>
                                            {/* Image */}
                                            {/* <div className='w-10'>
                                                <img
                                                    src='/man.jpg'
                                                    alt='Member Photo'
                                                    className='rounded-full'
                                                />
                                            </div> */}

                                            {/* Text */}
                                            <div className='pl-5'>
                                                {/* Name */}
                                                <h1 className='text-xl font-semibold'>
                                                    Nyiha Mathenge - NMA                                                   
                                                </h1>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default ServiceCarousel
