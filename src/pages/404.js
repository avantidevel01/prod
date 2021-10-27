import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Img404 from '../images/013.jpg'

const NotFound = () => {
  return (
    <Layout>
      <Head title='404 Page not found' />
      <div className='m-6'>
        <h1 className='text-3xl font-semibold text-center'>Page not found</h1>

        <div className='my-8 flex w-full items-center  justify-center'>
          <Link to='/'>
            <img
              src={Img404}
              alt='Repairing Endoscope'
              className='rounded-lg'
            />
          </Link>
        </div>
        <p className='text-xl text-center'>
          <Link to='/'>In the meantime we will keep working on repairs...</Link>
        </p>

        <p className='text-xl text-center'>
          <Link to='/'>Click here to go to the main page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
