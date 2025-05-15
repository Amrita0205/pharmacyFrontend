import React from 'react';

const DashboardCard = () => {
  const stats = [
    { title: 'Total Orders', value: '120', icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )},
    { title: 'Pending Prescriptions', value: '45', icon: (
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )},
    { title: 'Low Stock Alerts', value: '8', icon: (
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )}
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Overview</h3>
      <p className="text-gray-600 mb-6">
        Real-time insights into your pharmacy operations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              {stat.icon}
              <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
            </div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;