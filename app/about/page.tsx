import AboutBorder from '@/components/AboutBorder'
import AboutHeader from '@/components/AboutHeader'
import AboutLearn from '@/components/AboutLearn'
import AboutSolution from '@/components/AboutSolution'
import AboutTeam from '@/components/AboutTeam'
import React from 'react'

const page = () => {
  return (
    <div className='w-full mt-32'>
      <AboutHeader />
      <AboutLearn />
      <AboutSolution />
      {/* <AboutTeam /> */}
    </div>
  )
}

export default page
