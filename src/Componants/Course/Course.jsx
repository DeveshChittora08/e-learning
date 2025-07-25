import React from 'react'
import { FaChartSimple } from 'react-icons/fa6';

function Course({course}) {

const {image, name, price, standard} = course;

  return (
    <div>
      <div className=' h-[300px] flex md:flex-col  items-center border-2  md:gap-4 rounded-lg w-[400px] md:w-[250px] p-4 md:p-2 overflow-hidden my-2 md:mx-3'>
        <img className='md:h-32 h-40 md:w-32 w-40' src={image} alt="Course_img" />
        <div className='flex flex-col justify-center items-center'>
        <h3 className='text-lg text-center'>{name}</h3>
        <h4 className='font-semibold'>${price}</h4>
        <p className='flex items-center gap-1 text-[12px] '><FaChartSimple/>{standard}</p>
        <a className='border-2 px-2 mt-2 rounded-lg' href="">Explore</a>
        </div>
      </div>
    </div>
  )
}

export default Course
