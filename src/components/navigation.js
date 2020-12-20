import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/3WestLogo.png';

const Navigation = () => (
  <div>

    <nav className="flex items-center justify-between px-4 py-3">

      <div className="">
        <Link to="/">
          <img className="h-20" src={Logo} alt="3 West Medical" />
        </Link>
      </div>

      <div>
        <button type="button" className="block text-gray-400 hover:text-gray-300 focus:text-gray-300 focus:outline-none">
          <svg className="h-8 w-8 fill-current" viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8" />
            <rect y="30" width="100" height="20" rx="8" />
            <rect y="60" width="100" height="20" rx="8" />
          </svg>
        </button>
      </div>

      <div className="hidden">
        <ul className="flex">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/repairs">
              Repairs
            </Link>
          </li>
          <li>
            <Link to="/refurbished">
              Refurbished
            </Link>
          </li>
          <li>
            <Link to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

    </nav>

  </div>
);

export default Navigation;
