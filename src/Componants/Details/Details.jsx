
import { BiBook, BiVideo } from 'react-icons/bi'
import { FaCertificate } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'

function Details() {
  return (
    <div id='details'>
      <div className='px-3 flex gap-4 mt-5 justify-evenly bg-[#040b35] p-3'>
        <div className='bg-white border-2 border-gray-200 shadow-lg w-32 text-center rounded-xl p-4'>
            <div className='flex justify-center text-3xl'>
                <BiVideo/>
            </div>
            <div>
                <h2 className='font-s'>2000+</h2>
                <p className='text-sm '>Video Courses</p>
            </div>
        </div>
        <div className='bg-white border-2 border-gray-200 shadow-lg w-32 text-center rounded-xl p-4'>
            <div className='flex justify-center text-3xl'>
                <BiBook/>
            </div>
            <div>
                <h2 className='font-s'>1000+</h2>
                <p className='text-sm '>E-Books</p>
            </div>
        </div>
        <div className='bg-white border-2 border-gray-200 shadow-lg w-32 text-center rounded-xl p-4'>
            <div className='flex justify-center text-3xl'>
                <GiTeacher/>
            </div>
            <div>
                <h2 className='font-s'>300+</h2>
                <p className='text-sm '>Expert Trainers</p>
            </div>
        </div>
        <div className='bg-white border-2 border-gray-200 shadow-lg w-32 text-center rounded-xl p-4'>
            <div className='flex justify-center text-3xl'>
                <FaCertificate/>
            </div>
            <div>
                <h2 className='font-s'>1000+</h2>
                <p className='text-sm '>Certificate issue</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
