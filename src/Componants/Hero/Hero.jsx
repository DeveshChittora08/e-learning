import React from 'react'
import classroom from '../../assets/class.jpg'

function Hero() {
  return (
    <div>
      <div className='bg-sky-200 pt-5' >
        <h1 className='text-center font-bold text-3xl text-blue-900 m-3 '>Unlock Your Potential With Top-Tier Online Courses</h1>
        <p className='text-center text-lg'>Persnalize Learning experiance designed to help you achive your proffesionals & presonal goals. Gain the skills to excel in today's fast-pased world.</p>

        <div className='flex items-center justify-center'>
            <a className='p-2 border-2 rounded-lg px-3 my-5 border-sky-600 hover:bg-sky-800 hover:text-white hover:border-0'>Explore Courses</a>
        </div>

      <div className='flex justify-center'>
      <img className=' h-80 md:h-[500px] w-auto rounded-xl mb-6 ' src={classroom} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Hero
