import React from 'react'
import Partners1 from '../images/logo-hygiena.png'
import Partners2 from '../images/logo-amilcare.png'
import Partners3 from '../images/logo-medtrica.png'
import Partners4 from '../images/logo-dryscopeaid.png'
import Partners5 from '../images/logo-sympliant.png'
import Partners6 from '../images/logo-acs.png'

const Partners = () => {
  return (
    <div className=''>
      <div className='flex flex-wrap m-8 p-6 items-center justify-center relative border-2 border-gray-400 border-solid rounded-lg'>
        <div className='text-gray-500 text-lg top-0 -mt-4 bg-white left-0 px-4 absolute'>
          Our Partners
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners1} alt='Hygiena Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners2} alt='Hygiena Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners3} alt='Hygiena Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners4} alt='Hygiena Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners5} alt='Hygiena Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners6} alt='Hygiena Logo' className='w-28' />
        </div>
      </div>
    </div>
  )
}
export default Partners
