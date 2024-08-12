import ServiceCards from '@/components/ServiceCards'
import ServiceHeader from '@/components/ServiceHeader'
import React from 'react'

const page = () => {
  return (
    <div className='w-full mt-32'>
      <ServiceHeader />
      <ServiceCards />
    </div>
  )
}

export default page
