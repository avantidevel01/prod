import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import ContactFormRepairs from "../components/ContactFormRepairs";

const RepairsPage = () => {
  return (
    <div>
      <Layout>
      <Head title="Repairs" />
        <div className="px-6">
        <h1 className="py-4 text-2xl font-bold  text-gray-900 leading-tight">Equipment Repair</h1>

          <p>
            We repair all makes and models of flexible endoscopes in our state of
            the art service center.
          </p>
          <p>
            Our technicians are professionally trained and have years of
            experience executing both major and minor repairs. All equipment is
            calibrated and tested to meet the manufacturer's specifications. We
            offer a full range of repair services.
          </p>
            <div className="p-8">
              <h5 class="text-lg font-bold">Use our Equipment Repair Order Form below to order a repair:</h5>
              <ContactFormRepairs />
            </div>
            <p>NOTE: Cosmetic issues, i.e., scratches, dents, discolorations, etc., will not be recommended for repair unless those issue are causing an equipment system
failure. If you would like cosmetic issues to be repaired, please note these in your description of the problem.</p>
          </div>
      </Layout>

    </div>
  );
};

export default RepairsPage;
