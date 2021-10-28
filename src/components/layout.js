import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className='bg-gray-100'>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='bg-gray-100 py-6'>
          <div className='max-w-screen-md lg:max-w-screen-lg mx-auto'>
            {children}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
