import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Endo1 from '../images/s4.jpg'
import RepairForm from '../components/repair-form'

const IndexPage = () => (
  <div>
    <Layout>
      <div>
        <Head title='Home' />

        <div className='lg:flex'>
          <div className='lg:w-3/5'>
            <div className='mx-6'>
              <img
                src={Endo1}
                alt='Flexible Endoscope'
                className='lg:hidden h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg'
              />
            </div>
            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-gray-900 leading-tight'>
              We fix endoscopes.
              <br />
              We sell refurbrished.
            </h1>

            <p className='py-2 px-6 text-gray-700 leading-normal text-lg'>
              3 West Medical is your #1 source for endoscope repair and
              refurbrished equipment in Los Angeles.
            </p>
            <p className='py-2 px-6 text-gray-700 leading-normal text-lg'>
              Our technicians are professionally trained and have on average 25
              years of experience in the industry. All equipment is calibrated
              and tested to meet the manufacturer's specifications.
            </p>
            <p className='py-2 px-6 text-gray-700 leading-normal text-lg'>
              100% Satisfaction Guaranteed.
            </p>

            <div className=''>
              <div className='md:flex md:justify-center mx-6'>
                <div className='mx-2 my-6 md:w-1/3'>
                  <Link className='' to='/repairs'>
                    <div className='block md:text-xl text-lg text-center hover:bg-blue-700 shadow-lg text-white  px-5 py-3 rounded-md bg-blue-800 font-medium uppercase tracking-wide w-full active:bg-blue-900'>
                      Repair
                    </div>
                  </Link>
                </div>
                <div className='mx-2 my-6  md:w-1/3'>
                  <Link className='' to='/refurbished'>
                    <button className='block text-center hover:bg-blue-700 shadow-lg text-white  px-5 py-3 rounded-md bg-blue-800 md:text-xl text-lg font-medium uppercase tracking-wide w-full active:bg-blue-900'>
                      Purchase
                    </button>
                  </Link>
                </div>
                <div className='mx-2 my-6 md:w-1/3'>
                  <a href='tel:8775539378'>
                    <button className='block md:h-full text-center hover:bg-green-700 shadow-lg text-white px-5 py-3 rounded-md bg-green-800 md:text-xl text-lg font-medium uppercase tracking-wide w-full active:bg-green-900'>
                      Call
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='hidden mr-6 lg:block lg:w-2/5 lg:relative'>
            <div className='mx-6'>
              <img
                src={Endo1}
                alt='Endoscope'
                className='absolute inset-0 h-full w-full object-cover object-center mr-6 rounded-md shadow-lg'
              />
            </div>
          </div>
        </div>

        <RepairForm />
      </div>
    </Layout>
  </div>
)
export default IndexPage
