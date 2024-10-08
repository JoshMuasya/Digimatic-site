import React from 'react'

const AboutHeader = () => {
    return (
        <div className='w-full'>
            <div className='about-bg w-full relative z-20'>
                {/* Overlay */}
                <div className='absolute inset-0 bg-black opacity-50 z-20'></div>

                {/* Text */}
                <h1 className='text-6xl font-black text-input py-14 pl-14 relative z-30'>
                    About Us
                </h1>
            </div>

            <div className='w-full'>
                <div className='absolute top-[-15%] z-0 w-full'>
                    <img src="/heroborder1.png" alt="Hero Border" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default AboutHeader
