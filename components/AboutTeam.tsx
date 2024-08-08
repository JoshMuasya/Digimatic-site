import React from 'react'
import TeamDesc from './TeamDesc'

const AboutTeam = () => {
    return (
        <div className='flex flex-col justify-center items-center align-middle pb-14 pt-5 w-full'>
            {/* Title */}
            <div className='w-1/3'>
                <h1 className='flex flex-col text-5xl justify-center items-center align-middle text-center font-bold'>
                    Digimatic - Innovative Software Solutions
                </h1>
            </div>

            {/* Members */}
            <div className='flex flex-col justify-center align-middle items-center w-full px-10 pt-14'>
                {/* Top */}
                <div className='flex flex-row justify-around align-middle items-center'>
                    <TeamDesc
                        memberphoto={'/man.jpg'}
                        memberdesc={'Founder and chief visionary, John Doe is the driving force behind Digimatic. With over 20 years of experience in the software industry, Tony is passionate about creating software that helps businesses succeed.'}
                        linkedin={''}
                        membername={'John Doe, CEO'}
                    />

                    <TeamDesc
                        memberphoto={'/lady.jpg'}
                        memberdesc={'Jane Doe has over 15 years of experience in the software industry and has played a key role in the success of Digimatic. Her expertise in operations and management has helped us to grow and expand our business.'}
                        linkedin={''}
                        membername={'Jane Doe, COO'}
                    />
                </div>

                {/* Bottom */}
                <div className='flex flex-row justify-around align-middle items-center pt-10'>
                    <TeamDesc
                        memberphoto={'/man.jpg'}
                        memberdesc={'Our team of experienced developers is passionate about creating innovative software solutions. We provide support and guidance to our clients every step of the way.'}
                        linkedin={''}
                        membername={'John Doe, CTO'}
                    />

                    <TeamDesc
                        memberphoto={'/lady.jpg'}
                        memberdesc={'Jane Doe brings a wealth of international experience to Digimatic. Her financial expertise and strategic thinking have helped us to make sound business decisions and achieve our goals.'}
                        linkedin={''}
                        membername={'Jane Doe, CFO'}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutTeam
