import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'

const ProductsPage = () => {
  return (
    <div>
      <Layout>
      <Head title="Products" />
        <h1>Products</h1>
        <p>
          Driven by a spirit of innovation for new technology and a desire to be
          your resource for surgery and endoscopy, 3 West Medical continues to
          expand the scope of its product offerings and build on its position as
          a market leader in the area of endoscopy.
        </p>
        <p>
          With exciting products like Genii, the world's smallest, easiest, does
          it all, argon capable GI generator, and Mavaprint, an image management
          system that allows you to save patient information and images with an
          intuitive touchscreen control panel, 3 West Medical is an organization
          focused on the needs of its customers.
        </p>
      </Layout>
    </div>
  );
};

export default ProductsPage;
