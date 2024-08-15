import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactUsForm } from './ContactUsForm';

const ContactBody = () => {
    return (
        <div className='w-full my-10 flex flex-col md:flex-row justify-center md:justify-around px-20 align-middle items-start'>
            {/* Left */}
            <div className='flex flex-col justify-center items-start align-middle w-full'>
                {/* Top */}
                <div>
                    <p className='text-xl font-bold'>
                        Let&apos;s get in touch!
                    </p>
                </div>

                {/* Bottom */}
                <div className='w-full'>
                    <ContactUsForm />
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col justify-center items-start align-middle w-1/2'>

                {/* Title */}
                <h1 className='text-3xl font-bold pb-8'>
                    DIGIMATIC MARKETERS
                </h1>

                {/* Details */}
                <div className='flex flex-col justify-center items-start align-middle'>
                    {/* Address */}
                    <div className='flex flex-row justify-center align-middle pb-5'>
                        {/* Icon */}
                        <div>
                            <FaLocationDot className='w-20 text-2xl text-primary' />
                        </div>

                        <p>
                            Westlands Commercial Center, Westlands, Nairobi, Kenya
                        </p>
                    </div>

                    {/* Number */}
                    <div className='flex flex-row justify-center align-middle pb-5'>
                        {/* Icon */}
                        <div>
                            <FaWhatsapp className='w-20 text-2xl text-primary' />
                        </div>

                        <p>
                            +254 798 040 353
                        </p>
                    </div>

                    {/* Email */}
                    <div className='flex flex-row justify-center align-middle pb-5'>
                        {/* Icon */}
                        <div>
                            <MdEmail className='w-20 text-2xl text-primary' />
                        </div>

                        <p>
                            info@digimaticmarkerters.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBody
