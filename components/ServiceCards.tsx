import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ServiceCarousel from './ServiceCarousel'
import { LogoCarousel } from './LogoCarousel'

const ServiceCards = () => {
    return (
        <div className='flex flex-col justify-center align-middle items-center'>
            <div className='bg-destructive-foreground w-full flex flex-col lg:flex-row justify-center align-middle items-start py-3 md:py-10 px-5 md:px-14'>
                <Card className="w-full lg:w-1/3 mx-2 md:mx-5 mb-3 lg:mb-0">
                    <div className=''>
                        <img src="/software.jpg" alt="Hero Border"
                            className='rounded-t-2xl'
                        />
                    </div>
                    <CardContent className='pt-5'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl py-5'>
                            Software Development
                        </h1>

                        {/* Line */}
                        <div className="w-full h-px bg-primary"></div>

                        {/* Description */}
                        <p className='pt-5 font-medium lg:pb-6'>
                            Our software development services deliver custom solutions tailored to your business needs, from mobile apps to enterprise software. We leverage the latest technologies to create scalable, secure, and user-friendly software that drives efficiency and innovation. Let us turn your ideas into powerful digital products that propel your business forward.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full lg:w-1/3 mx-2 md:mx-5 mb-3 lg:mb-0">
                    <div className=''>
                        <img src="/website.jpg" alt="Hero Border"
                            className='rounded-t-2xl'
                        />
                    </div>

                    <CardContent className='pt-5'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl py-5'>
                            Website Development
                        </h1>

                        {/* Line */}
                        <div className="w-full h-px bg-primary"></div>

                        {/* Description */}
                        <p className='pt-5 font-medium'>
                            Our web development services craft responsive, visually stunning websites that engage users and drive results. We specialize in building customized web solutions, from e-commerce platforms to content management systems, ensuring your online presence is both dynamic and effective. With a focus on performance, security, and user experience, we help you create websites that leave a lasting impression.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full lg:w-1/3 mx-2 md:mx-5 mb-3 lg:mb-0">
                    <div className=''>
                        <img src="/graphic.jpg" alt="Hero Border"
                            className='rounded-t-2xl'
                        />
                    </div>

                    <CardContent className='pt-5'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl py-5'>
                            Graphics Design
                        </h1>

                        {/* Line */}
                        <div className="w-full h-px bg-primary"></div>

                        {/* Description */}
                        <p className='pt-5 font-medium'>
                            Our graphics design services bring your brand to life with visually compelling and creative designs. From branding and identity to UI/UX design, we create impactful visuals that resonate with your audience and enhance user experiences. Whether you need marketing materials, product packaging, or digital content, our designs are crafted to make a lasting impression and elevate your brand.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className='bg-destructive-foreground w-full flex flex-col lg:flex-row justify-center align-middle items-start py-10 px-5 md:px-14'>
                <Card className="w-full lg:w-1/3 mx-2 md:mx-5 mb-3 lg:mb-0">
                    <div className=''>
                        <img src="/marketing.jpg" alt="Hero Border"
                            className='rounded-t-2xl'
                        />
                    </div>
                    <CardContent className='pt-5'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl py-5'>
                            Digital Marketing
                        </h1>

                        {/* Line */}
                        <div className="w-full h-px bg-primary"></div>

                        {/* Description */}
                        <p className='pt-5 font-medium lg:pb-6'>
                            Our digital marketing services help you connect with your target audience and grow your online presence. We offer comprehensive strategies, including SEO, social media management, PPC advertising, and content marketing, to drive traffic, increase engagement, and boost conversions. Let us craft a customized digital marketing plan that elevates your brand and delivers measurable results.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full lg:w-1/3 mx-2 md:mx-5 mb-3 lg:mb-0">
                    <div className=''>
                        <img src="/security.jpg" alt="Hero Border"
                            className='rounded-t-2xl'
                        />
                    </div>

                    <CardContent className='pt-5'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl py-5'>
                            Cybersecurity
                        </h1>

                        {/* Line */}
                        <div className="w-full h-px bg-primary"></div>

                        {/* Description */}
                        <p className='pt-5 font-medium lg:pb-6'>
                            Our cybersecurity services protect your business from digital threats with comprehensive security strategies. We offer vulnerability assessments, threat detection, data encryption, and incident response to safeguard your critical assets. With a proactive approach to security, we help you stay ahead of cyber risks, ensuring your business operates safely and securely in a digital world.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full lg:w-1/3 mx-2 md:mx-5 mb-3 lg:mb-0">
                    <div className=''>
                        <img src="/support.jpg" alt="Hero Border"
                            className='rounded-t-2xl'
                        />
                    </div>

                    <CardContent className='pt-5'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl py-5'>
                            IT Consulting
                        </h1>

                        {/* Line */}
                        <div className="w-full h-px bg-primary"></div>

                        {/* Description */}
                        <p className='pt-5 font-medium'>
                            Our IT consulting services provide expert guidance to optimize your technology strategy and infrastructure. We help businesses navigate digital transformation, implement cutting-edge solutions, and streamline operations for greater efficiency and growth. Whether you need advice on IT strategy, infrastructure setup, or business process automation, our consultants deliver tailored solutions to align technology with your business goals.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Carousel */}
            <div className='w-full flex flex-col justify-center items-center align-middle py-5 bg-border'>
                <ServiceCarousel />

                {/* Companies */}
                <div className='pt-10 flex flex-col justify-center align-middle items-center'>
                    {/* Title */}
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        Our Clients
                    </h1>

                    {/* Logos */}
                    <div className='py-10 flex flex-col md:flex-row justify-center items-center align-middle flex-wrap'>
                        <div className='rounded-full bg-secondary h-40 w-40 flex flex-col justify-center align-middle items-center mx-5 mb-3 md:mb-0'>
                            <img src="/nma.png" alt="NMA" className='h-28' />
                        </div>

                        <div className='rounded-full bg-secondary h-40 w-40 flex flex-col justify-center align-middle items-center mx-5 mb-3 md:mb-0'>
                            <img src="/odyssey.png" alt="Odyssey" className='h-28' />
                        </div>

                        <div className='rounded-full bg-secondary h-40 w-40 flex flex-col justify-center align-middle items-center mx-5 mb-3 md:mb-0'>
                            <img src="/Thiiya.png" alt="Thiiya" className='h-48' />
                        </div>

                        <div className='rounded-full bg-secondary h-40 w-40 flex flex-col justify-center align-middle items-center mx-5 mb-3 md:mb-0'>
                            <img src="/storm.jpg" alt="Storm" className='h-28' />
                        </div>

                        <div className='rounded-full bg-secondary h-40 w-40 flex flex-col justify-center align-middle items-center mx-5 mb-3 md:mb-0'>
                            <img src="/ngara.png" alt="Ngara" className='h-28' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards
