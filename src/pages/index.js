import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Endo1 from '../images/s4.jpg';
import Highlights from '../components/highlights';

const IndexPage = () => (
  <div>
    <Layout>
      <div>
        <Head title="Home" />

        <div className="lg:flex">
          <div className="lg:w-3/5">
            <div className="mx-6">
              <img src={Endo1} alt="Endoscope" className="lg:hidden h-40 w-full object-cover object-center md:h-full  rounded-md shadow-lg" />
            </div>
            <h1 className="text-2xl font-bold px-6 py-4 text-gray-900 leading-tight">We fix and sell flexible and rigid endoscopes of any make and model.</h1>

            <h2 className="text-xl font-bold px-6 py-2 text-gray-800 leading-tight">
              We are the best kept secret in the heart of LA and an integral part of
              the local economy.
            </h2>
            <div className="">
              <div className="md:flex md:justify-center mx-6">
                <div className="mx-2 my-6 md:w-1/3">
                  <Link className="" to="/repairs">
                    <div className="block  text-center hover:bg-blue-700 shadow-lg text-white  px-5 py-3 rounded-md bg-blue-800 text-sm font-medium uppercase tracking-wide w-full active:bg-blue-900">Schedule a Repair</div>
                  </Link>
                </div>
                <div className="mx-2 my-6  md:w-1/3">
                  <Link className="" to="/refurbished">
                    <button className="block text-center hover:bg-blue-700 shadow-lg text-white  px-5 py-3 rounded-md bg-blue-800 text-sm font-medium uppercase tracking-wide w-full active:bg-blue-900">Purchase Refurbished</button>
                  </Link>
                </div>
                <div className="mx-2 my-6 md:w-1/3">
                  <Link className="" to="/contact">
                    <button className="block md:h-full text-center hover:bg-green-700 shadow-lg text-white px-5 py-3 rounded-md bg-green-800 text-sm font-medium uppercase tracking-wide w-full active:bg-green-900">Call Us Now!</button>
                  </Link>
                </div>
              </div>
            </div>

            <p className="py-2 px-6 text-gray-800 leading-normal">
              Our technicians are professionally trained and have years of experience. All equipment is calibrated and tested to meet the manufacturer's specifications, 100% Satisfaction Guaranteed.
            </p>
          </div>

          <div className="hidden mr-6 lg:block lg:w-2/5 lg:relative">
            <div className="mx-6">
              <img src={Endo1} alt="Endoscope" className="absolute inset-0 h-full w-full object-cover object-center mr-6 rounded-md shadow-lg" />
            </div>
          </div>

        </div>

        <Highlights />

      </div>

    </Layout>

  </div>
);
export default IndexPage;
