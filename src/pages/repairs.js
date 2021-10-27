import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import RepairForm from '../components/repair-form'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const RepairsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imgEleven: file(relativePath: { eq: "slider-012.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title='Repairs' />
        <div className='h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg'>
          <Img
            className='h-40 w-full object-cover object-center  rounded-md shadow-lg'
            fluid={data.imgEleven.childImageSharp.fluid}
            alt='Flexible Endoscope being repaired'
          />
        </div>
        <div className='px-4 md:px-6'>
          <h1 className='text-2xl md:text-3xl font-bold py-4 text-gray-900 leading-tight'>
            Endoscope Repairs
          </h1>
          <div className=' flex flex-wrap md:flex-nowrap'>
            <div className=''>
              <h2 className='text-xl font-bold py-6 text-red-800 leading-tight'>
                Fill out the form below to receive a free estimate or to
                schedule a repair.
              </h2>

              <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
                All repairs are done by us at our state-of-the-art repair lab.
                Our technicians have over 25 years' experience in surgery and
                endoscopy repairs, and we pride ourselves on the fact that we
                are truly a resource to the customers that we serve.
              </p>
              <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
                We know repair turnaround times are crucial to our customers and
                make every effort to be as effective as possible. On average,
                minor repairs take 1-3 days and major overhauls take 5-7
                business days to complete. Return shipment for all equipment is
                complementary and included as part of our customer service
                commitment to you.
              </p>

              <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
                Here are some of the repairs we perform:
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                  <ul className='list-disc list-inside text-gray-800 leading-normal text-lg'>
                    <li>CCD Repairs</li>
                    <li>Angulation Rebuilds</li>
                    <li>Biopsy Channels</li>
                    <li>Bending Rubbers</li>
                    <li>Insertion Tubes</li>
                    <li>Suction Channels</li>
                  </ul>
                </div>

                <div className='-mt-8 md:mt-0'>
                  <ul className='list-disc list-inside text-gray-800 leading-normal text-lg'>
                    <li>Video Buttons</li>
                    <li>Light Guide Bundles</li>
                    <li>Light Guide Tubes</li>
                    <li>Rod Lens Replacement</li>
                    <li>Insertion Tube Replacement</li>
                  </ul>
                </div>

                <div className='-mt-8 md:mt-0'>
                  <ul className='list-disc list-inside text-gray-800 leading-normal text-lg '>
                    <li>Objective System Replacement</li>
                    <li>Eye Cup Replacement</li>
                    <li>
                      Off-Set Laparoscopes, Ureteroscopes and Small Joint
                      Arthroscopes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <RepairForm />
        </div>
      </Layout>
    </div>
  )
}

export default RepairsPage
