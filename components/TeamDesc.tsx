import MemberTypes from '@/app/types'
import Link from 'next/link'
import React from 'react'

const TeamDesc = ({ memberphoto, memberdesc, linkedin, membername }: MemberTypes) => {
  return (
    <div className='flex flex-row justify-around items-start align-top w-1/3'>
        {/* Image */}
        <div className='w-1/2'>
            <img 
                src={memberphoto}
                alt='Member Photo'
                className='rounded-full h-40'
            />
        </div>

        {/* Text */}
        <div className='w-2/3'>
            {/* Name */}
            <h1 className='text-3xl font-bold pb-5'>
                {membername}
            </h1>

            {/* Paragraph */}
            <p className='text-lg'>
                {memberdesc}
            </p>

            {/* Link */}
            <Link href=''>
                {linkedin}
            </Link>
        </div>
    </div>
  )
}

export default TeamDesc
