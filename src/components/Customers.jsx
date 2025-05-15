import React, { useState } from 'react';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com',
      phone: '123-456-7890',
      prescriptionCount: 5,
      lastVisit: '2024-04-10',
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com',
      phone: '234-567-8901',
      prescriptionCount: 3,
      lastVisit: '2024-04-08',
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com',
      phone: '345-678-9012',
      prescriptionCount: 2,
      lastVisit: '2024-04-05',
      status: 'Inactive'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Customer Management</h1>
        <p className="text-gray-600">Manage customer profiles and prescriptions</p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="button-primary w-full md:w-auto">
          Add New Customer
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                <p className="text-sm text-gray-600">{customer.email}</p>
                <p className="text-sm text-gray-600">{customer.phone}</p>
              </div>
              <span 
                className={`px-2 py-1 text-xs rounded-full ${
                  customer.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {customer.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-surface rounded-md">
                <p className="text-2xl font-bold text-primary">{customer.prescriptionCount}</p>
                <p className="text-sm text-gray-600">Prescriptions</p>
              </div>
              <div className="text-center p-3 bg-surface rounded-md">
                <p className="text-sm font-semibold text-primary">{customer.lastVisit}</p>
                <p className="text-sm text-gray-600">Last Visit</p>
              </div>
            </div>

            <div className="flex justify-between">
              <button className="text-primary hover:text-opacity-80 text-sm font-medium">
                View Details
              </button>
              <button className="text-primary hover:text-opacity-80 text-sm font-medium">
                New Prescription
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;