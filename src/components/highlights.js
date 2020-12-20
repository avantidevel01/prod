import React from 'react';
import Dry2 from '../images/aid-cabinet-drying-system-dry-scope.jpg';
import Dry1 from '../images/jet-stream-dry-scope.jpg';
import Ensure1 from '../images/ensure-touch-hygiena.gif';

const Highlights = () => (
  <div>

    <div className="bg-gray-400 rounded-lg shadow-lg m-6 p-4 border-2 border-blue-800 border-solid">
      <div className="text-2xl font-bold px-6 py-4 text-gray-900 leading-tight">
        NEW PRODUCTS
      </div>
      <div className="flex flex-wrap md:flex-no-wrap  w-full justify-center">
        <div className="bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg lg:w-1/2">
          <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
            Dry-Scope Aid® Jet~Stream
          </h2>
          <img
            src={Dry1}
            alt="Dry-Scope Aid Jet-Stream Machine"
            className="h-56 rounded-md shadow-lg float-left mr-4"
          />
          <p>
            Dri-Scope Aid® Jet~Stream is designed to assist in the drying of
            the internal channels of an endoscope. The internal chan-nels are
            an ideal environment for colonization of bacteria. It is for this
            reason, SGNA, AAMI, AORN and scope manufac-turers all state that
            the internal channels of an endoscope should be purged with air
            until dry.
          </p>
        </div>
        <div className="bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg lg:w-1/2">
          <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
            Dry-Scope Aid® Cabinet
          </h2>
          <img
            src={Dry2}
            alt="Dry-Scope Aid Cabinet"
            className="h-56 rounded-md shadow-lg float-left mr-4"
          />
          <p>
            The Dri-Scope Aid® Cabinet supplies HEPA-filtered air to all
            internal channels to aid in drying endoscopes with an auto-mated
            drying cycle for improved turn-around time, and a continuous
            venting cycle for overnight storage. The Dri-Scope Aid® Cabinet
            converts your scope cabinet into a complete drying system.
            {' '}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-no-wrap w-full justify-center">
        <div className="bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg lg:w-1/2">
          <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
            EnSURE Touch by Hygiena
          </h2>
          <img
            src={Ensure1}
            alt="EnSURE Touch by Hygiena"
            className="h-56 rounded-md shadow-lg float-left mr-4"
          />
          <p>
            Hygiena understands patient health and maximizing insurance reimbursements are essential to your business. Your success
            depends on the cleanliness of your facility. Published research shows that even with best efforts put forward, on average, only
            34-40% of hospital surfaces are actually cleaned to policy standards. Your constant battle against C. difficile, MRSA, and other healthcare-associated infections require a proven and effective cleaning verification program. Implementing a monitoring system improves cleaning thoroughness from 40% to 82%1. The EnSURE Touch provides you with the data you need to ensure patient health and maximize insurance reimbursements.
          </p>
        </div>
        <div className="bg-gray-100 m-6 p-4 border-2 border-blue-800 border-solid rounded-md shadow-lg lg:w-1/2">
          <h2 className="text-xl font-bold mb-5 text-gray-800 leading-tight">
            Dry-Scope Aid® Cabinet
          </h2>
          <img
            src={Dry2}
            alt="Dry-Scope Aid Cabinet"
            className="h-56 rounded-md shadow-lg float-left mr-4"
          />
          <p>
            The Dri-Scope Aid® Cabinet supplies HEPA-filtered air to all
            internal channels to aid in drying endoscopes with an auto-mated
            drying cycle for improved turn-around time, and a continuous
            venting cycle for overnight storage. The Dri-Scope Aid® Cabinet
            converts your scope cabinet into a complete drying system.
            {' '}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Highlights;
