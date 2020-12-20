import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/3WestLogo.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="block mx-4 px-2 pt-2 pb-4">
        <Link className="uppercase block border-gray-500  flex-1 px-2 py-1 text-gray-800 font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/">
          Home
        </Link>

        <Link className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/repairs">
          Repairs
        </Link>

        <Link className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/refurbished">
          Refurbished
        </Link>

        <Link className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/products">
          Products
        </Link>

        <Link className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/about">
          About
        </Link>

        <Link className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/blog">
          Blog
        </Link>

        <Link className="uppercase mt-1 block px-2 py-1 text-gray-800  font-semibold rounded hover:text-gray-100 hover:bg-blue-800" to="/contact">
          Contact
        </Link>

      </div>
    );
  }

  return (
    <div>
      <header className="bg-gray-200 sticky top-0  max-w-screen-md lg:max-w-screen-lg mx-auto ">
        <nav className="shadow flex items-center justify-between px-4 py-3">
          <div>
            <Link to="/">
              <img className="h-20" src={Logo} alt="3 West Medical" />
            </Link>
          </div>

          <div>

            <div className={`${!showMenu ? 'block' : 'hidden'}`}>
              <button type="button" className="mt-1 mr-4 focus:outline-none focus:border-gray-200">
                <FontAwesomeIcon
                  className="text-4xl block text-gray-700 hover:text-gray-600"
                  icon={faBars}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </button>
            </div>

            <div className={`${showMenu ? 'block' : 'hidden'}`}>
              <button type="button" className="mt-1 mr-4 focus:outline-none focus:border-gray-200">
                <FontAwesomeIcon
                  className="text-4xl fill-current block text-gray-700 hover:text-gray-600"
                  icon={faTimes}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </button>
            </div>

          </div>
        </nav>

        { menu }

      </header>
    </div>
  );
};
export default Header;
