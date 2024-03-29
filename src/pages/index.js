import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import RepairForm from "../components/repair-form"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      endoScope1: file(relativePath: { eq: "endoscope-repair-3west.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Endoscope Repair and Sales",
    provider: {
      "@type": "Local Business",
      name: "3 West Medical",
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    name: "3 West Medical",
    description:
      "Specializing in Endoscope Repair and Refurbished Endoscope Sales in the Area of Los Angeles.",
    image: "https://3westmedical.com/3WestLogo.png",
    url: "https://3westmedical.com",
    telephone: "‪(747) 444-9179‬",
  }
  return (
    <div>
      <Layout>
        <SEO
          title="3 West Medical | Endoscope Repair and Sales in Southern California"
          schemaMarkup={schema}
        />

        <main>
          <div className="px-4 md:px-6">
            <div className="lg:flex">
              <div className="lg:w-3/5">
                <div className="">
                  <Img
                    className="lg:hidden h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg"
                    fluid={data.endoScope1.childImageSharp.fluid}
                    alt="Flexible Endoscope"
                    loading="eager"
                  />
                </div>
                <h1 className="text-3xl font-bold mt-2 py-4 text-gray-900 leading-normal">
                  <span className="text-blue-800 text-4xl">
                    We repair endoscopes.
                  </span>
                  <br />
                  <span className="text-gray-500 text-3xl">
                    But that's not all we do.
                  </span>
                </h1>

                <h2 className="text-xl  font-bold  pt-3 pb-4 md:pr-4 text-gray-700 leading-tight">
                  3 West Medical is your #1 source for repairing and selling
                  flexible and rigid endoscopes and we carry a comprehensive
                  line of innovative devices to help you run your department
                  more efficiently.
                </h2>
                <div className="py-2  text-gray-700 leading-normal font-bold text-lg">
                  We do it right the first time, so you can get back to things
                  that matter most, such as patient care.
                </div>

                <p className="py-2  text-gray-700 leading-normal font-bold text-lg">
                  100% Satisfaction Guaranteed.
                </p>

                <div className="">
                  <div className="md:flex md:justify-center lg:mr-6 ">
                    <div className="mx-2 my-6 md:w-1/3">
                      <Link className="" to="/repairs">
                        <div className="block md:text-xl text-lg text-center hover:bg-blue-700 shadow-lg text-white  px-4 py-3 rounded-md bg-blue-800 font-medium uppercase tracking-wide w-full active:bg-blue-900">
                          Repair
                        </div>
                      </Link>
                    </div>
                    <div className="mx-2 my-6  md:w-1/3">
                      <Link className="" to="/products">
                        <button className="block text-center hover:bg-blue-700 shadow-lg text-white  px-4 py-3 rounded-md bg-blue-800 md:text-xl text-lg font-medium uppercase tracking-wide w-full active:bg-blue-900">
                          Purchase
                        </button>
                      </Link>
                    </div>
                    <div className="mx-2 my-6 md:w-1/3">
                      <a href="tel:8775539378">
                        <button className="block md:h-full text-center hover:bg-green-700 shadow-lg text-white px-4 py-3 rounded-md bg-green-800 md:text-xl text-lg font-medium uppercase tracking-wide w-full active:bg-green-900">
                          Call
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden mr-4 lg:block lg:w-1/2 ">
                <div className="h-full w-full mr-6">
                  <Img
                    className="h-full w-full object-cover object-right rounded-md shadow-lg"
                    fluid={data.endoScope1.childImageSharp.fluid}
                    alt="Flexible Endoscope"
                    loading="eager"
                  />
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
export default IndexPage
