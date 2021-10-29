import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Highlights = () => {
  const data = useStaticQuery(graphql`
    query {
      products1: file(relativePath: { eq: "flexible-endoscopes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      products2: file(relativePath: { eq: "rigid-endoscopes.jpg" }) {
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
      <div className="">
        <h2 className="text-2xl font-bold pb-2 text-gray-800 leading-tight ">
          Certified Pre-Owned Endoscopes
        </h2>
        <p className="text-gray-700 leading-normal text-lg mb-2 py-2">
          We have an extensive inventory of certified pre-owned rigid and
          flexible endoscopes including the most current and up to date
          technology available for sale. All endoscopes are 100% guaranteed.
        </p>
        <div className=" w-full justify-center">
          <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
              Flexible Endoscopes
            </h2>
            <div className="flex flex-col md:flex-row w-auto m-3">
              <div className="mr-8 md:w-1/3">
                <Img
                  className="md:mr-4"
                  fluid={data.products1.childImageSharp.fluid}
                  alt="Flexible Endoscope"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-800 leading-normal text-lg my-2 py-2">
                  We sell the following flexible endoscopes: Olympus, Pentax,
                  Fujinon, and Karl Storz.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg ">
            <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
              Rigid Endoscopes
            </h2>
            <div className="flex flex-col md:flex-row w-auto m-3">
              <div className="mr-8 md:w-1/3">
                <Img
                  className="md:mr-4"
                  fluid={data.products2.childImageSharp.fluid}
                  alt="Rigid Endoscopes"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-800 leading-normal text-lg my-2 py-2">
                  We sell the following rigid endoscopes: Olympus, Karl Storz,
                  Stryker.
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
