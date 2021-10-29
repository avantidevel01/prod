import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RepairForm from "../components/repair-form"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
        <SEO title="Flexible and Rigid Endoscope Repairs in Los Angeles" />
        <main>
          <div className="h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg">
            <Img
              className="h-40 w-full object-cover object-center  rounded-md shadow-lg"
              fluid={data.imgEleven.childImageSharp.fluid}
              alt="Flexible Endoscope being repaired"
            />
          </div>
          <div className="px-4 md:px-6">
            <h1 className="text-3xl font-bold mt-8 py-2 text-gray-900 leading-normal">
              Flexible and Rigid{" "}
              <span className="whitespace-nowrap"> Endoscope Repairs</span>
            </h1>

            <h2 className="text-xl font-semibold py-2 mb-4 text-blue-800 leading-normal">
              All repairs are performed by our technicians at our
              state-of-the-art repair lab
            </h2>
            <h3 className="text-lg italic pt-0 pb-2 text-gray-700 leading-tight">
              Fill out our{" "}
              <a
                href="#repair-order-form"
                className="underline hover:bg-gray-500 hover:text-gray-50"
              >
                repair form
              </a>{" "}
              to get a free estimate or schedule a repair
            </h3>

            <div className=" flex flex-wrap md:flex-nowrap">
              <div className="">
                <p className="text-gray-700 leading-normal text-lg my-2 py-2">
                  Our technicians are professionally trained and have on average
                  25 years of experience in the industry. All equipment is
                  calibrated and tested to meet the manufacturer's
                  specifications, and we pride ourselves on the fact that we are
                  truly a resource to the customers that we serve.
                </p>

                <p className="text-gray-700 leading-normal text-lg my-2 py-2">
                  Repair turnaround times are crucial to our customers and we
                  make every effort to be as effective as possible. On average,
                  minor repairs take 1-3 days and major overhauls take 5-7
                  business days to complete. Return shipment for all equipment
                  is complementary and included as part of our customer service
                  commitment to you.
                </p>

                <p className="text-gray-700 font-semibold leading-normal text-lg my-2 py-2">
                  These are some of the repairs we perform on flexible and rigid
                  endoscopes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <ul className="list-disc list-inside text-gray-800 leading-normal text-lg">
                      <li>CCD Repairs</li>
                      <li>Angulation Rebuilds</li>
                      <li>Biopsy Channels</li>
                      <li>Bending Rubbers</li>
                      <li>Insertion Tubes</li>
                      <li>Suction Channels</li>
                    </ul>
                  </div>

                  <div className="-mt-8 md:mt-0">
                    <ul className="list-disc list-inside text-gray-800 leading-normal text-lg">
                      <li>Video Buttons</li>
                      <li>Light Guide Bundles</li>
                      <li>Light Guide Tubes</li>
                      <li>Rod Lens Replacement</li>
                      <li>Insertion Tube Replacement</li>
                    </ul>
                  </div>

                  <div className="-mt-8 md:mt-0">
                    <ul className="list-disc list-inside text-gray-800 leading-normal text-lg ">
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
        </main>
      </Layout>
    </div>
  )
}

export default RepairsPage
