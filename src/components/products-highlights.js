import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      blackeye: file(relativePath: { eq: "black-eye-marker.jpg" }) {
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
      steriview: file(
        relativePath: { eq: "steriview-instrument-inspection.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desertcabinets: file(relativePath: { eq: "desert-air-cabinets.jpg" }) {
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
      <h2 className="text-2xl font-bold pb-6 text-gray-800 leading-tight ">
        Integrative Devices
      </h2>
      <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
          Black Eye Endoscopic Marker
        </h2>
        <div className="flex flex-col md:flex-row w-auto m-3">
          <div className="mr-8 md:w-1/3">
            <Img
              className="md:mr-4 rounded-lg"
              fluid={data.blackeye.childImageSharp.fluid}
              alt="Black Eye Endoscopic Marker - 5ml syringe box of 10"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-normal text-lg my-2 py-2">
              Keep an eye on that lesion. Black Eye™ is indicated for
              permanently marking lesions in the GI tract. "No shake" necessary.
              Easier, faster, safer! Black Eye™ proprietary formula provides
              stable emulsion and suspension. It is more viscous and does not
              migrate like other tattoo products; Resulting in consistently
              dark, permanent marks.
              <p>
                SAFE - Used in over 50 countries since 2013. Blister packaging
                acts as a barrier and protects against cross-contamination.
              </p>
              <p>
                PERMANENT - Black Eye™ leaves a permanent mark, as carbon black
                is a stable and safe pigment. Resulting in a "Lifetime of
                Surveillance".
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
          Dry-Scope Aid® Jet~Stream
        </h2>
        <div className="flex flex-col md:flex-row w-auto m-3">
          <div className="mr-8 md:w-1/3">
            <Img
              className="md:mr-4 rounded-lg"
              fluid={data.dry1.childImageSharp.fluid}
              alt="Dry-Scope Aid Jet-Stream Machine"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-normal text-lg my-2 py-2">
              Dri-Scope Aid® Jet~Stream is designed to assist in the drying of
              the internal channels of an endoscope. The internal chan-nels are
              an ideal environment for colonization of bacteria. It is for this
              reason, SGNA, AAMI, AORN and scope manufac-turers all state that
              the internal channels of an endoscope should be purged with air
              until dry.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg ">
        <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
          Dry-Scope Aid® Cabinet
        </h2>
        <div className="flex flex-col md:flex-row w-auto m-3">
          <div className="mr-8 w-1/3 md:w-1/4">
            <Img
              className="md:mr-4 rounded-lg"
              fluid={data.dry2.childImageSharp.fluid}
              alt="Dry-Scope Aid Cabinet"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-normal text-lg my-2 py-2">
              The Dri-Scope Aid® Cabinet supplies HEPA-filtered air to all
              internal channels to aid in drying endoscopes with an auto-mated
              drying cycle for improved turn-around time, and a continuous
              venting cycle for overnight storage. The Dri-Scope Aid® Cabinet
              converts your scope cabinet into a complete drying system.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
          DesertAir Drying Cabinets
        </h2>
        <div className="flex flex-col md:flex-row w-auto m-3">
          <div className="mr-8 w-1/3 md:w-1/4">
            <Img
              className="md:mr-4 rounded-lg"
              fluid={data.desertcabinets.childImageSharp.fluid}
              alt="Desert Air Drying Cabinet"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-normal text-lg my-2 py-2">
              DesertAir Drying Cabinets were designed from scratch to satisfy
              current industry recommendations for the drying and storage of
              heat-sensitive medical instruments. DesertAir combines the
              superior quality and durability of stainless steel components,
              unparalleled workmanship and construction with the time-tested
              performance of the Dri-Scope Aid™ channel drying system – arguably
              the most recognized name in the channel drying business. Together,
              they represent a new high water mark in dual HEPA-filtered drying
              and storage capability.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg ">
        <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
          SteriView Inspection System
        </h2>
        <div className="flex flex-col md:flex-row w-auto m-3">
          <div className="mr-8 md:w-1/3">
            <Img
              className="md:mr-4 rounded-lg"
              fluid={data.steriview.childImageSharp.fluid}
              alt="EnSURE Touch by Hygiena"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-normal text-lg my-2 py-2">
              SteriView™ Inspection System is designed to inspect the internal
              channels of endoscopes and surgical devices to assist in the
              visualization of any soiled, wet, or damaged areas that the eye
              can’t see. The internal channels are an ideal environment for
              colonization of bacteria. It is for this reason, SGNA, AAMI, AORN
              and manufacturers IFU’s all state that scopes must be inspected
              prior to use.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full justify-center">
        <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
            Medi Capture - MVR Pro
          </h2>
          <div className="flex flex-col md:flex-row w-auto m-3">
            <div className="mr-8 md:w-1/3">
              <Img
                className="md:mr-4 rounded-lg"
                fluid={data.medicapture.childImageSharp.fluid}
                alt="Medi Capture MVR Pro"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-800 leading-normal text-lg my-2 py-2">
                The MVR Pro is an Image Management Device that Captures Still
                images and Video with Storage while acting as a small monitor.
                It also works with off the shelf wireless printers which saves
                the you money.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 md:mx-6 mb-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
          MediBios Micronebulizer by AMILcare
        </h2>
        <div className="flex flex-col md:flex-row w-auto m-3">
          <div className="mr-8 md:w-1/3">
            <Img
              className="md:mr-4 rounded-lg"
              fluid={data.medbios.childImageSharp.fluid}
              alt="AmilCare MedBios Micronebulizer"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-normal text-lg my-2 py-2">
              The MediBios device is a micronebulizer of new generation,
              practical, manageable, and technologically advanced for
              biodisinfection. It is a class I Medical Device. It was designed
              for use in various hospital departments. All configuration
              settings for treatments are performed with a display and keyboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Highlights
