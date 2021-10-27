import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

import Partners from '../components/partners'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      endo2: file(relativePath: { eq: "s3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title='About' />
        <div className='px-6'>
          <h1 className='text-2xl md:text-3xl font-bold pt-4 pb-2 text-gray-900 leading-tight'>
            About 3 West Medical
          </h1>
          <h2 className='text-xl font-bold pb-6 text-gray-800 leading-tight'>
            100% Satisfaction Guaranteed
          </h2>

          <Img
            className=' h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg'
            fluid={data.endo2.childImageSharp.fluid}
            alt='Flexible Endoscope'
          />

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            If you’re doing Endoscopy or Surgery in Southern California, we’re
            someone you want to know. As a growing and expanding company, we’re
            always looking and working with partners who are on the cutting edge
            of new Medical Technologies.
          </p>

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            3 West Medical was founded over 15 years ago on the principles of
            quality, value, service, and integrity. We strive to provide the
            best products and services, a personalized customer experience, and
            unparalleled industry support.
          </p>

          <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
            Whether your department is in Gastroenterology, Pulmonology,
            Surgery, SPD or another Specialized Department involving Endoscopy,
            we’re here for you to help solve any problem or situation you may
            encounter. We will help you figure out how to attain more effective
            and verifiable results with a focus on helping you provide “Best
            Practice” in patient care available today.
          </p>

          <ul className='list-disc list-inside text-gray-800 leading-normal text-lg my-2 py-2'>
            <li>We Repair Large and Small Diameter Endoscopes</li>
            <li>Same Day Pick Up by 3 West Personnel</li>
            <li>Fast Turnaround Time</li>
            <li>Exceptional Customer Service</li>
            <li>Free No Obligation Estimates</li>
            <li>Free Loaner Program</li>
          </ul>
        </div>
        <Partners />
      </Layout>
    </div>
  )
}

export default AboutPage
