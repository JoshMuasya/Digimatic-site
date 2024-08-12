import React from 'react'

const ServiceHeader = () => {
    return (
        <div>
            <div className='about-bg w-full relative z-20'>
                {/* Overlay */}
                <div className='absolute inset-0 bg-black opacity-50 z-20'></div>

                {/* Text */}
                <h1 className='text-6xl font-black text-input py-14 pl-14 relative z-30'>
                    Services
                </h1>
            </div>
        </div>
    )
}

export default ServiceHeader
