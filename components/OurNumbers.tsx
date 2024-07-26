import React from 'react'

const OurNumbers = () => {
    return (
        <div className='numbers-bg w-full h-60 mt-20 flex flex-col  justify-center'>
            <div className='bg-black/70 absolute left-0 w-full h-60 z-0' />
            {/* Numbers */}
            <div className='flex flex-row z-20 justify-around align-middle items-center text-white'>
                {/* First */}
                <div className='flex flex-col justify-center align-middle items-center z-20'>
                    {/* Number */}
                    <div className='font-bold text-4xl pb-4'>
                        20+
                    </div>

                    {/* Description */}
                    <div className='font-medium text-2xl text-center'>
                        Flexible options to meet <br/> your needs
                    </div>
                </div>

                {/* Second */}
                <div className='flex flex-col justify-center align-middle items-center z-20'>
                    {/* Number */}
                    <div className='font-bold text-4xl pb-4'>
                        300+
                    </div>

                    {/* Description */}
                    <div className='font-medium text-2xl text-center'>
                        Beautiful design elements to <br/>enhance your website
                    </div>
                </div>

                {/* Third */}
                <div className='flex flex-col justify-center align-middle items-center z-20'>
                    {/* Number */}
                    <div className='font-bold text-4xl pb-4'>
                        10+
                    </div>

                    {/* Description */}
                    <div className='font-medium text-2xl'>
                        Amazing Softwares
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurNumbers
