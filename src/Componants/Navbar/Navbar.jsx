import { SiEducative } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='w-full bg-[#18776c] h-20   '>
        <div className='flex items-center justify-between px-6'>
            <Link to='/'>
            <div className='flex text-white items-center gap-3 text-2xl md:text-3xl'>
                <div><SiEducative/></div>
                <h2>E<span className='text-amber-400' >-Learning</span></h2>
            </div>
            </Link>

            <div className='md:px-16'>
                <ul className='flex items-center md:text-xl font-light  py-6 gap-5 md:gap-10 text-white'>
                    <li><a href='#course' className='scroll-m-1'>Courses</a></li>
                    <li><a href='#alumine'>Our Alumine</a></li>
                    <li><a href='#details'>Course Details</a></li>
                    {/* <li><a>Blog</a></li> */}
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
