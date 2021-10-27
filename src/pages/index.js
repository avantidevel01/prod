import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import RepairForm from '../components/repair-form'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      endoScope1: file(relativePath: { eq: "s4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className='px-4 md:px-6'>
          <Head title='Home' />

          <div className='lg:flex'>
            <div className='lg:w-3/5'>
              <div className=''>
                <Img
                  className='lg:hidden h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg'
                  fluid={data.endoScope1.childImageSharp.fluid}
                  alt='Flexible Endoscope'
                />
              </div>
              <h1 className='text-3xl font-bold mt-2 py-4 text-gray-900 leading-tight'>
                We fix endoscopes.
                <br />
                We sell refurbished.
              </h1>

              <p className='py-2 mr-6 text-gray-700 leading-normal text-lg'>
                3 West Medical is your #1 source for endoscope repair and
                refurbished equipment in Los Angeles.
              </p>
              <p className='py-2 mr-6 text-gray-700 leading-normal text-lg'>
                Our technicians are professionally trained and have on average
                25 years of experience in the industry. All equipment is
                calibrated and tested to meet the manufacturer's specifications.
              </p>
              <p className='py-2  text-gray-700 leading-normal font-bold text-lg'>
                100% Satisfaction Guaranteed.
              </p>

              <div className=''>
                <div className='md:flex md:justify-center lg:mr-6 '>
                  <div className='mx-2 my-6 md:w-1/3'>
                    <Link className='' to='/repairs'>
                      <div className='block md:text-xl text-lg text-center hover:bg-blue-700 shadow-lg text-white  px-4 py-3 rounded-md bg-blue-800 font-medium uppercase tracking-wide w-full active:bg-blue-900'>
                        Repair
                      </div>
                    </Link>
                  </div>
                  <div className='mx-2 my-6  md:w-1/3'>
                    <Link className='' to='/products'>
                      <button className='block text-center hover:bg-blue-700 shadow-lg text-white  px-4 py-3 rounded-md bg-blue-800 md:text-xl text-lg font-medium uppercase tracking-wide w-full active:bg-blue-900'>
                        Purchase
                      </button>
                    </Link>
                  </div>
                  <div className='mx-2 my-6 md:w-1/3'>
                    <a href='tel:8775539378'>
                      <button className='block md:h-full text-center hover:bg-green-700 shadow-lg text-white px-4 py-3 rounded-md bg-green-800 md:text-xl text-lg font-medium uppercase tracking-wide w-full active:bg-green-900'>
                        Call
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden mr-4 lg:block lg:w-1/2 '>
              <div className='h-full w-full mr-6'>
                <Img
                  className='h-full w-full object-cover object-right rounded-md shadow-lg'
                  fluid={data.endoScope1.childImageSharp.fluid}
                  alt='Flexible Endoscope'
                />
              </div>
            </div>
          </div>

          <RepairForm />
        </div>
      </Layout>
    </div>
  )
}
export default IndexPage
