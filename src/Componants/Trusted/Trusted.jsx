import React from 'react'
import glovo from '../../assets/glovo-logo.svg'
import oracal from '../../assets/oracle-logo.svg'
import paypal from '../../assets/paypal-logo.svg'
import payoneer from '../../assets/payoneer-logo.svg'
import stripe from '../../assets/stripe-logo.svg'

function Trusted() {
  return (
    <div id='alumine'>
      <div>
        <div className='mt-6'>
            <h3 className='text-center text-2xl font-semibold'>Our Alumine Work in this Compony</h3>
            <div className='flex justify-center gap-4 h-[40px] md:h-[90px] mt-3'>
                <img src={glovo} alt="logo" />
                <img src={oracal} alt="logo" />
                <img src={paypal} alt="logo" />
                <img src={payoneer} alt="logo" />
                <img src={stripe} alt="logo" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted
