import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Endo2 from '../images/s3.jpg'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title='About' />
        <div className='px-6'>
          <h1 className='text-2xl md:text-3xl font-bold py-4 text-gray-900 leading-tight'>
            About 3 West Medical
          </h1>

          <img
            src={Endo2}
            alt='Flexible Endoscope'
            className=' h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg'
          />

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            3 West Medical was founded over 15 years ago on the principles of
            quality, value, service, and integrity. We strive to provide the
            best products and services, a personalized customer experience, and
            unparalleled industry support.
          </p>

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            All repairs are done by us at our state-of-the-art repair lab. Our
            technicians have over 25 years experience in surgery and endoscopy
            repairs and we pride ourselves on the fact that we are truly a
            resource to the customers that we serve.
          </p>

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            We know repair turnaround times are crucial to our customers and
            make every effort to be as effective as possible. On average, minor
            repairs take 1-3 days and major overhauls take 5-8 business days to
            complete. Return shipment for all equipment is complementary and
            included as part of our customer service commitment to you.
          </p>

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            100% Satisfaction Guaranteed.
          </p>

          <ul className='list-disc list-inside text-gray-800 leading-normal text-lg my-2 py-2'>
            <li>Specializing in Both Large and Small Diameter Endoscopes</li>
            <li>Same Day Pick Up by 3 West Personnel</li>
            <li>Fast Turnaround Time</li>
            <li>Exceptional Customer Service</li>
            <li>Free No Obligation Estimates</li>
            <li>Free Loaner Program</li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
