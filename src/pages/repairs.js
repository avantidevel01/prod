import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Endo3 from '../images/005.jpg'
import RepairForm from '../components/repair-form'

const RepairsPage = () => {
  return (
    <div>
      <Layout>
        <Head title='Repairs' />
        <div className='px-6'>
          <h1 className='text-2xl md:text-3xl font-bold py-4 text-gray-900 leading-tight'>
            Endoscope Repairs
          </h1>
          <div className='flex flex-wrap'>
            <div className=''>
              <img
                src={Endo3}
                alt='Flexible Endoscope being repaired'
                className=' h-44 block w-3/12 object-cover object-bottom rounded-md shadow-lg mr-4 my-8'
              />
            </div>
            <div>
              <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
                We repair all makes and models of flexible endoscopes in our
                state of the art service center.
              </p>
              <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
                Our technicians are professionally trained and have years of
                experience executing both major and minor repairs. All equipment
                is calibrated and tested to meet the manufacturer's
                specifications. We offer a full range of repair services.
              </p>
            </div>
          </div>

          <RepairForm />
        </div>
      </Layout>
    </div>
  )
}

export default RepairsPage
