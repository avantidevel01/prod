import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'

const ContactPage = () => {
  return (
    <div>
      <Layout>
      <Head title="Contact" />
        <h1>Contact</h1>

        <p> Our goal is to provide the best products, service and support in the industry. 
        </p>
        <p>
          3 West Medical
          <br />
          9133 South La Cienega Blvd., Suite 170
          <br />
          Inglewood, CA 90301
          <br />
          Toll Free: 877-553-9378
          <br />
          Local : (310) 670-9378
          <br />
          Fax: (888) 812-6247
          <br />
        </p>

        <p>
          Use the form below to submit your question. We will get back to you as
          soon as possible.
        </p>
      </Layout>
    </div>
  );
};

export default ContactPage;
