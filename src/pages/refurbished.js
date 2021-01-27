import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';


const RefurbishedPage = () => {
  return (
  <div>
    <Layout>
      <Head title="Refurbished" />
      <h1>Refurbished</h1>
      <p>3 West Medical provides endoscope rentals.</p>
      <ul>
        <li> Olympus® Colonoscopes, Gastroscopes and Duodenoscopes</li>
        <li>Pentax® models of Colonoscopes and Gastroscopes</li>
        <li>Storz® and Stryker® Surgical Camera Heads</li>
        <li>
          Most brands of Rigid Arthroscopes, Laporoscopes, Cystoscopes, etc.
        </li>
        <li>ACMI® Rigid and Semi-rigid Ureteroscopes</li>
        <li>Video and Fiber Bronchoscopes (Olympus and Pentax)</li>
        <li>Flexible Intubation Scopes (Olympus and Pentax)</li>
      </ul>
    </Layout>
  </div>
  );
};

export default RefurbishedPage;
