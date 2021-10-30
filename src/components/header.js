import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo3west: file(relativePath: { eq: "3WestLogo.png" }) {
        childImageSharp {
          fixed(width: 222, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [showMenu, setShowMenu] = useState(false)

  let menu

  if (showMenu) {
    menu = (
      <div className="block mx-4 px-2 pt-2 pb-4">
        <Link
          className="uppercase block border-gray-500  flex-1 px-2 py-1 text-gray-800 font-semibold rounded hover:text-gray-100 hover:bg-blue-800"
          to="/"
        >
          Home
        </Link>

        <Link
          className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800"
          to="/repairs"
        >
          Repairs
        </Link>

        <Link
          className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800"
          to="/products"
        >
          Products
        </Link>

        <Link
          className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800"
          to="/about"
        >
          About
        </Link>
      </div>
    )
  }

  return (
    <div>
      <header className="bg-gray-200 sticky top-0  max-w-screen-md lg:max-w-screen-lg mx-auto ">
        <nav className="shadow flex items-center justify-between px-4 py-3">
          <div>
            <Link to="/">
              <Img
                className="h-20"
                fixed={data.logo3west.childImageSharp.fixed}
                alt="3 West Medical Logo"
              />
            </Link>
          </div>

          <div className="hidden  w-7/12 md:flex md:h-20 md:justify-between md:items-stretch ">
            <Link
              to="/"
              className="w-1/4 pt-2 mx-1  mt-10 h-10  align-center text-blue-800 rounded hover:bg-blue-800"
            >
              <div className="uppercase text-lg text-center text-blue-800  font-semibold  hover:text-gray-100 ">
                Home
              </div>
            </Link>

            <Link
              to="/repairs"
              className="w-1/4 pt-2 mx-1  mt-10 h-10  align-center text-blue-800 rounded hover:bg-blue-800"
            >
              <div className="uppercase text-lg text-center text-blue-800  font-semibold  hover:text-gray-100 ">
                Repairs
              </div>
            </Link>
            <Link
              to="/products"
              className="w-1/4 pt-2 mx-1  mt-10 h-10  align-center text-blue-800 rounded hover:bg-blue-800"
            >
              <div className="uppercase text-lg text-center text-blue-800  font-semibold  hover:text-gray-100 ">
                Products
              </div>
            </Link>
            <Link
              to="/about"
              className="w-1/4 pt-2 mx-1  mt-10 h-10  align-center text-blue-800 rounded hover:bg-blue-800"
            >
              <div className="uppercase text-lg text-center text-blue-800  font-semibold  hover:text-gray-100 ">
                About
              </div>
            </Link>
          </div>

          <div className="md:hidden">
            <div className={`${!showMenu ? "block" : "hidden"}`}>
              <button
                type="button"
                className="mt-1 mr-4 focus:outline-none focus:border-gray-200"
                aria-label="Open the menu"
              >
                <FontAwesomeIcon
                  className="text-4xl block text-gray-700 hover:text-gray-600"
                  icon={faBars}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </button>
            </div>

            <div className={`${showMenu ? "block" : "hidden"} `}>
              <button
                type="button"
                className="mt-1 mr-4 focus:outline-none focus:border-gray-200"
                aria-label="Close the menu"
              >
                <FontAwesomeIcon
                  className="text-4xl fill-current block text-gray-700 hover:text-gray-600"
                  icon={faTimes}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </button>
            </div>
          </div>
        </nav>

        {menu}
      </header>
    </div>
  )
}
export default Header
