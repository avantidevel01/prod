import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'

const AboutPage = () => {
  return (
    <div>
      <Layout>
      <Head title="About" />
        <h1>About</h1>

        <p>
          You can count on 3 West to consistently provide the highest quality
          repairs at competitive prices, making us your one call solution for
          all of your endoscopic needs.
        </p>

        <p>100% Satisfaction Guaranteed.</p>

        <ul>
          <li>Specializing in Both Large and Small Diameter Endoscopes</li>
          <li>Same Day Pick Up by 3 West Personnel</li>
          <li>Fast Turnaround Time</li>
          <li>Exceptional Customer Service</li>
          <li>Free No Obligation Estimates</li>
          <li>Free Loaner Program</li>
        </ul>

      </Layout>
    </div>
  );
};

export default AboutPage;
