import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Highlights from '../components/highlights'

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
          <p className='text-gray-700 leading-normal text-lg my-2 py-2'>
            With exciting products like Genii, the world's smallest, easiest,
            does it all, argon capable GI generator, and Mavaprint, an image
            management system that allows you to save patient information and
            images with an intuitive touchscreen control panel, 3 West Medical
            is an organization focused on the needs of its customers.
          </p>

          <Highlights />
        </div>
      </Layout>
    </div>
  )
}

export default ProductsPage
