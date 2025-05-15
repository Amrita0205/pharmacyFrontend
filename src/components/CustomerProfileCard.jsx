import React from 'react';

const CustomerProfileCard = () => {
  const customerProfile = {
    name: 'John Doe',
    prescriptionHistory: 5,
    documents: 2,
    lastVisit: '2024-04-10',
    status: 'Active'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Customer Management</h3>
          <p className="text-gray-600 mt-1">Track customer profiles and history</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Add Customer
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 rounded-full p-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{customerProfile.name}</h4>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {customerProfile.status}
              </span>
            </div>
          </div>
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            View Details
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{customerProfile.prescriptionHistory}</p>
            <p className="text-sm font-medium text-gray-600 mt-2">Prescriptions</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{customerProfile.documents}</p>
            <p className="text-sm font-medium text-gray-600 mt-2">Documents</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{customerProfile.lastVisit}</p>
            <p className="text-sm font-medium text-gray-600 mt-2">Last Visit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileCard;