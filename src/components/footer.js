import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className='bg-gray-200 text-sm p-3 font-semibold text-gray-800 bottom-0 text-center w-full'>
      <p>
        24007 Ventura Blvd. Suite 120, Calabasas, CA 91302 |
        &nbsp;Phone:&nbsp;(747)&nbsp;444-9179
      </p>
      <p>All Rights Reserved {data.site.siteMetadata.author}, © 2021</p>
    </footer>
  )
}
export default Footer
