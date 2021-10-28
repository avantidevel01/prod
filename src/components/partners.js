import React from 'react'
import Partners2 from '../images/logo-amilcare.png'
import Partners4 from '../images/logo-dryscopeaid.png'
import Partners5 from '../images/logo-sympliant.png'
import Partners6 from '../images/logo-acs.png'

const Partners = () => {
  return (
    <div className=''>
      <div className='flex flex-wrap m-8 p-6 items-center justify-center relative border-2 border-gray-400 border-solid rounded-lg'>
        <div className='text-gray-500 text-lg top-0 -mt-4 bg-gray-100 left-0 px-4 absolute'>
          Our Partners
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners4} alt='Dry Scope Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners2} alt='Amil Care Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners5} alt='Sympliant Logo' className='w-28' />
        </div>
        <div className='w-1/3 md:w-1/6 m-6'>
          <img src={Partners6} alt='ACS Logo' className='w-28' />
        </div>
      </div>
    </div>
  )
}
export default Partners
