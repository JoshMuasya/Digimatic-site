import { EnvelopeOpenIcon, InstagramLogoIcon, LinkedInLogoIcon, MobileIcon, TargetIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import React from 'react'

const Contact = () => {
    return (
        <div className='pt-10 bg-card-foreground w-full h-full'>
            {/* Content */}
            <div className='w-full flex flex-col justify-center items-center align-middle'>
                {/* Icons */}
                <div className='w-1/3 flex flex-row justify-around align-middle items-center'>
                    {/* Instagram */}
                    <div className='bg-muted rounded-full p-5'>
                        <InstagramLogoIcon
                            className='text-primary w-10 h-10'
                        />
                    </div>

                    {/* X */}
                    <div className='bg-muted rounded-full p-5'>
                        <FaXTwitter
                            className='text-primary w-10 h-10'
                        />
                    </div>

                    {/* Linked In */}
                    <div className='bg-muted rounded-full p-5'>
                        <LinkedInLogoIcon
                            className='text-primary w-10 h-10'
                        />
                    </div>
                </div>

                {/* Text */}
                <div className='flex flex-col justify-center align-middle items-center py-10 w-full'>
                    {/* Top */}
                    <div className='pb-5 flex flex-row justify-center items-center align-middle'>
                        {/* Address */}
                        {/* address icon */}
                        <div className='bg-muted rounded-full p-2'>
                            <TargetIcon
                                className='text-primary w-5 h-5'
                            />
                        </div>

                        <p className='text-center font-medium text-lg text-muted pl-5'>
                            Westlands Commercial Center, Westlands, Nairobi, Kenya
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className='flex flex-row justify-around align-middle items-center w-1/3'>
                        {/* Phone */}
                        <div className='pb-5 flex flex-row justify-center items-center align-middle'>
                            {/* Mobile icon */}
                            <div className='bg-muted rounded-full p-2'>
                                <MobileIcon
                                    className='text-primary w-5 h-5'
                                />
                            </div>
                            <p className='text-center font-medium text-lg text-muted pl-3'>
                                +254 798 040 353
                            </p>
                        </div>

                        {/* Email */}
                        <div className='pb-5 flex flex-row justify-center items-center align-middle'>
                            {/* Email icon */}
                            <div className='bg-muted rounded-full p-2'>
                                <EnvelopeOpenIcon
                                    className='text-primary w-5 h-5'
                                />
                            </div>
                            <p className='text-center font-medium text-lg text-muted pl-3'>
                                info@digimaticmarketers.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <div>
                    <img src="/logo.png" alt="Logo" />
                </div>

                {/* Copyright */}
                <div className='h-16 w-full bg-secondary-foreground flex flex-row justify-center align-middle items-center mt-10'> 
                    {/* Copyright Icon */}
                    <div className='bg-muted rounded-full p-2'>
                        <FaRegCopyright
                            className='text-primary w-5 h-5'
                        />
                    </div>

                    <p className='text-center text-muted pl-2'>
                        2024 digimaticmarketers
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
