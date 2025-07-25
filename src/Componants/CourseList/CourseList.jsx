import React,{useContext} from 'react'

import {Link} from 'react-router-dom'


import { CourseContext } from '../CourseContext/CourseContext'
import Course from '../Course/Course'

function CourseList() {

    const {courses} = useContext(CourseContext)

    console.log(courses)
  return (
    <div id='course'>
      <div>
        <h2 className='text-3xl font-bold my-3'>In- Demand Courses</h2>
        <div className='flex flex-col items-center'>
        <div className='grid grid-col md:grid-cols-4  md:mx-30  '>
            {courses.map((course,index)=>{
                return(
                    
                   <Link to={`/course/${course.id}`} key={index}><Course course={course}/></Link>

                    
                )
            })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default CourseList
