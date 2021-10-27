import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Img404 from '../images/013.jpg'

const NotFound = () => {
  return (
    <Layout>
      <Head title='404 Page not found' />
      <h1 className='text-3xl text-center'>Page not found</h1>

      <div className='mr-16 md:w-full'>
        <img src={Img404} alt='Repairing Endoscope' className=' ' />
      </div>
      <p className='text-xl text-center'>
        In the meantime we will keep working on repairs...
      </p>

      <p className='text-xl text-center'>
        <Link to='/'>Click here to go to the main page</Link>
      </p>
    </Layout>
  )
}

export default NotFound
