import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="bg-gray-100 py-6">
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto">
          {children}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
