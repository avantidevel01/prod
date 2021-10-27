import React from 'react'
import Products1 from '../images/flexible-endoscopes.jpg'
import Products2 from '../images/rigid-endoscopes.jpg'

const Highlights = () => (
  <div>
    <div className=''>
      <h2 className='text-2xl font-bold pb-6 text-gray-800 leading-tight text-center'>
        Refurbrished Endoscopes
      </h2>
      <div className=' w-full justify-center'>
        <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg'>
          <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
            Flexible Endoscopes
          </h2>
          <div className='flex flex-col md:flex-row w-auto m-3'>
            <div className='mr-8 md:w-1/3'>
              <img
                src={Products1}
                alt='Dry-Scope Aid Jet-Stream Machine'
                className='md:mr-4'
              />
            </div>
            <div className='md:w-2/3'>
              <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                We offer a full range of flexible endoscopes both small and
                large diameter such as Olympus, Pentax, Storz, Fujinon, ACMI and
                others.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg '>
          <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
            Rigid Endoscopes
          </h2>
          <div className='flex flex-col md:flex-row w-auto m-3'>
            <div className='mr-8 md:w-1/3'>
              <img
                src={Products2}
                alt='Dry-Scope Aid Cabinet'
                className=' md:mr-4'
              />
            </div>
            <div className='md:w-2/3'>
              <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                We offer an extensive range of rigid endoscopes, including
                Olympus, Storz, Stryker, Dyonics, Wolf and others. We also have
                Off-Set Laparoscopes, Self Dilating Ureteroscopes, and Small
                Joint Arthroscopes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Highlights
