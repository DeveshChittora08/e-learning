
import { SiEducative } from 'react-icons/si'
import { Link } from 'react-router-dom'
// import {faceboook} from '../../assets/facebook_icon.png'
// import {twitter} from '../../assets/twitter_icon.png'
// import {linkedin} from '../../assets/linkedin_icon.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    
     <footer className='w-full bg-[#050440] h-40 flex flex-col items-center justify-center gap-8 '>
      <div className='text-center '>
          <Link to='/'>
                     <div className='flex text-white items-center gap-3 text-2xl md:text-3xl'>
                         <div><SiEducative/></div>
                         <h2>E<span className='text-amber-400' >-Learning</span></h2>
                     </div>
                     </Link>
      </div>

      <div className='flex  justify-center items-center text-3xl text-white gap-5'>
                <FaFacebook/>
                <FaTwitter/>
                <FaLinkedin/>
      </div>
    </footer>
  
  )
}

export default Footer
