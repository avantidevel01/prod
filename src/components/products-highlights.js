import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Highlights = () => {
  const data = useStaticQuery(graphql`
    query {
      dry2: file(
        relativePath: { eq: "aid-cabinet-drying-system-dry-scope.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dry1: file(relativePath: { eq: "jet-stream-dry-scope.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medicapture: file(relativePath: { eq: "medi-capture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medbios: file(relativePath: { eq: "amilcare-biodisinfection.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ensure: file(relativePath: { eq: "ensure-touch.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className=''>
        <h2 className='text-2xl font-bold pb-6 text-gray-800 leading-tight text-center'>
          Complementary Products and Equipment
        </h2>
        <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
          With exciting products like Genii, the world's smallest, easiest, does
          it all, argon capable GI generator, and Mavaprint, an image management
          system that allows you to save patient information and images with an
          intuitive touchscreen control panel, 3 West Medical is an organization
          focused on the needs of its customers.
        </p>
        <div className=' w-full justify-center'>
          <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg'>
            <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
              Medi Capture - MVR Pro
            </h2>
            <div className='flex flex-col md:flex-row w-auto m-3'>
              <div className='mr-8 md:w-1/3'>
                <Img
                  className='md:mr-4 rounded-lg'
                  fluid={data.medicapture.childImageSharp.fluid}
                  alt='Medi Capture MVR Pro'
                />
              </div>
              <div className='md:w-2/3'>
                <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                  The MVR Pro is an Image Management Device that Captures Still
                  images and Video with Storage while acting as a small monitor.
                  It also works with off the shelf wireless printers which saves
                  the you money.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg'>
            <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
              MedBios Micronebulizer by AMILcare
            </h2>
            <div className='flex flex-col md:flex-row w-auto m-3'>
              <div className='mr-8 md:w-1/3'>
                <Img
                  className='md:mr-4 rounded-lg'
                  fluid={data.medbios.childImageSharp.fluid}
                  alt='AmilCare MedBios Micronebulizer'
                />
              </div>
              <div className='md:w-2/3'>
                <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                  The Medbios device is a micronebulizer of new generation,
                  practical, manageable, and technologically advanced for
                  biodisinfection. It is a class I Medical Device. It was
                  designed for use in various hospital departments. All
                  configuration settings for treatments are performed with a
                  display and keyboard.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg'>
            <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
              Dry-Scope Aid® Jet~Stream
            </h2>
            <div className='flex flex-col md:flex-row w-auto m-3'>
              <div className='mr-8 md:w-1/3'>
                <Img
                  className='md:mr-4 rounded-lg'
                  fluid={data.dry1.childImageSharp.fluid}
                  alt='Dry-Scope Aid Jet-Stream Machine'
                />
              </div>
              <div className='md:w-2/3'>
                <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                  Dri-Scope Aid® Jet~Stream is designed to assist in the drying
                  of the internal channels of an endoscope. The internal
                  chan-nels are an ideal environment for colonization of
                  bacteria. It is for this reason, SGNA, AAMI, AORN and scope
                  manufac-turers all state that the internal channels of an
                  endoscope should be purged with air until dry.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg '>
            <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
              Dry-Scope Aid® Cabinet
            </h2>
            <div className='flex flex-col md:flex-row w-auto m-3'>
              <div className='mr-8 w-1/3 md:w-1/4'>
                <Img
                  className='md:mr-4 rounded-lg'
                  fluid={data.dry2.childImageSharp.fluid}
                  alt='Dry-Scope Aid Cabinet'
                />
              </div>
              <div className='md:w-2/3'>
                <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                  The Dri-Scope Aid® Cabinet supplies HEPA-filtered air to all
                  internal channels to aid in drying endoscopes with an
                  auto-mated drying cycle for improved turn-around time, and a
                  continuous venting cycle for overnight storage. The Dri-Scope
                  Aid® Cabinet converts your scope cabinet into a complete
                  drying system.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:flex-no-wrap w-full justify-center'>
          <div className='bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg '>
            <h2 className='text-xl font-bold mb-5 text-gray-800 leading-tight'>
              EnSURE Touch by Hygiena
            </h2>
            <div className='flex flex-col md:flex-row w-auto m-3'>
              <div className='mr-8 w-1/3'>
                <Img
                  className='md:mr-4 rounded-lg'
                  fluid={data.ensure.childImageSharp.fluid}
                  alt='EnSURE Touch by Hygiena'
                />
              </div>
              <div className='md:w-2/3'>
                <p className='text-gray-800 leading-normal text-lg my-2 py-2'>
                  Hygiena understands patient health and maximizing insurance
                  reimbursements are essential to your business. Your success
                  depends on the cleanliness of your facility. Published
                  research shows that even with best efforts put forward, on
                  average, only 34-40% of hospital surfaces are actually cleaned
                  to policy standards. Your constant battle against C.
                  difficile, MRSA, and other healthcare-associated infections
                  require a proven and effective cleaning verification program.
                  Implementing a monitoring system improves cleaning
                  thoroughness from 40% to 82%1. The EnSURE Touch provides you
                  with the data you need to ensure patient health and maximize
                  insurance reimbursements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Highlights
