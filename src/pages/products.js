import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Highlights from '../components/products-highlights'
import Products from '../components/products'

const ProductsPage = () => {
  return (
    <div>
      <Layout>
        <Head title='Refurbished Flexible and Rigid Endoscopes for Sale' />
        <div className='px-6'>
          <h1 className='text-2xl md:text-3xl font-bold py-4 text-gray-900 leading-tight'>
            Flexible, Rigid Endoscopes & Complementary Products
          </h1>
          <h2 className='text-xl  font-bold pt-0 pb-8 text-green-800 leading-tight'>
            Call us today at{' '}
            <a href='tel:(747) 444-9179' className='underline'>
              (747) 444-9179
            </a>{' '}
            for more information!
          </h2>
          <Products />

          <Highlights />
        </div>
      </Layout>
    </div>
  )
}

export default ProductsPage
