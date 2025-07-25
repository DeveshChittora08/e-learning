import React from 'react'

import { coursesData } from '../../data'
import { useParams } from 'react-router-dom'

function CourseDetails() {

 const {id} = useParams();

 const course = coursesData.find(course=>{
        return course.id ===parseInt(id)
 })

  return (
    <div>
      <div>
        <div className='flex items-center justify-center  my-3 '>
          <div className=''>
            <h2 className=' md:text-3xl text-xl mb-3 font-bold text-blue-900 '>{course.name}</h2>
            <p className='text-md mb-3 w-[500px] '>{course.courseDetail.description}</p>
            <p className='' >{course.courseDetail.language}</p>
            <p>{course.courseDetail.date}</p>

            <div className='flex gap-5 items-center mt-3'>
              <h3 className='text-xl font-bold'>Price: ${course.price}</h3>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='button'>By Course</button>
            </div>          
          </div>
          <div>
              <img className='h-[500px] w-[500px]' src={course.image} alt="" />
            </div>
        </div>
       
       <div>
        <h2 className='mx-20 mb-3 text-3xl font-serif font-bold'>Curriculam</h2>
        <fieldset className=' border-2 mx-20 p-3 '>
          <legend className='font-medium text-lg'>Phase 01</legend>
          <h3 className='text-2xl font-bold'>{course.phase1.phaseName}</h3>
          <ul className='grid grid-cols-3 gap-3 my-2 '>
            <li>{course.phase1.phaseList}</li>
            <li>{course.phase1.phaseList1}</li>
            <li>{course.phase1.phaseList2}</li>
            <li>{course.phase1.phaseList3}</li>
            <li>{course.phase1.phaseList4}</li>
          </ul>
        </fieldset>
        <fieldset className=' border-2 mx-20 p-3 my-3 '>
          <legend className='font-medium text-lg'>Phase 02</legend>
          <h3 className='text-2xl font-bold'>{course.phase2.phaseName}</h3>
          <ul className='grid grid-cols-3 gap-3 my-2 '>
            <li>{course.phase2.phaseList}</li>
            <li>{course.phase2.phaseList1}</li>
            <li>{course.phase2.phaseList2}</li>
            <li>{course.phase2.phaseList3}</li>
            <li>{course.phase2.phaseList4}</li>
          </ul>
        </fieldset>
        <fieldset className=' border-2 mx-20 p-3 my-3 '>
          <legend className='font-medium text-lg'>Phase 03</legend>
          <h3 className='text-2xl font-bold'>{course.phase3.phaseName}</h3>
          <ul className='grid grid-cols-3 gap-3 my-2 '>
            <li>{course.phase3.phaseList}</li>
            <li>{course.phase3.phaseList1}</li>
            <li>{course.phase3.phaseList2}</li>
            <li>{course.phase3.phaseList3}</li>
            <li>{course.phase3.phaseList4}</li>
          </ul>
        </fieldset>
        <fieldset className=' border-2 mx-20 p-3 my-3 '>
          <legend className='font-medium text-lg'>Phase 04</legend>
          <h3 className='text-2xl font-bold'>{course.phase4.phaseName}</h3>
          <ul className='grid grid-cols-3 gap-3 my-2 '>
            <li>{course.phase4.phaseList}</li>
            <li>{course.phase4.phaseList1}</li>
            <li>{course.phase4.phaseList2}</li>
            <li>{course.phase4.phaseList3}</li>
            <li>{course.phase4.phaseList4}</li>
          </ul>
        </fieldset>
        
       </div>

      </div>
    </div>
  )
}

export default CourseDetails
