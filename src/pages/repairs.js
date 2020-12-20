import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'

const RepairsPage = () => {
  return (
    <div className="px-6">
      <Layout>
      <Head title="Repairs" />
      <h1 className="py-4 text-2xl font-bold  text-gray-900 leading-tight">Repairs</h1>

        <p>
          We repair all makes and models of flexible endoscopes in our state of
          the art service center.
        </p>
        <div>
          Use the form below to schedule a repair.
        </div>
        <p>
          Our technicians are professionally trained and have years of
          experience executing both major and minor repairs. All equipment is
          calibrated and tested to meet the manufacturer's specifications. We
          offer a full range of repair services.
        </p>


      
      </Layout>
    </div>
  );
};

export default RepairsPage;
