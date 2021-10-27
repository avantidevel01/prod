import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Highlights from '../components/products-highlights'
import Products from '../components/products'

const ProductsPage = () => {
  return (
    <div>
      <Layout>
        <Head title='Products' />
        <div className='px-6'>
          <h1 className='text-2xl md:text-3xl font-bold py-4 text-gray-900 leading-tight'>
            Products
          </h1>
          <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
            Driven by a spirit of innovation for new technology and a desire to
            be your resource for surgery and endoscopy, 3 West Medical continues
            to expand the scope of its product offerings and build on its
            position as a market leader in the area of endoscopy.
          </p>

          <h2 className='text-xl text-center font-bold pt-0 pb-8 text-red-800 leading-tight'>
            Call us today at{' '}
            <a href='phone:(747) 444-9179' className='underline'>
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
