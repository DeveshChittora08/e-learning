import React,{createContext,useState} from 'react'
import { coursesData } from '../../data'

export const CourseContext = createContext()



const CourseContextProvider = ({children}) => {

  const[courses, setCourse]=useState(coursesData)

  return (
    <CourseContext.Provider value={{courses}}>
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContextProvider