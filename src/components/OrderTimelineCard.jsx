import React from 'react';

const OrderTimelineCard = () => {
  const order = {
    id: '#1234',
    status: 'Fulfilled',
    timeline: [
      { stage: 'Order Received', completed: true, time: '09:00 AM' },
      { stage: 'Prescription Verified', completed: true, time: '09:30 AM' },
      { stage: 'Fulfilled', completed: true, time: '10:15 AM' }
    ]
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Order Processing</h3>
          <p className="text-gray-600 mt-1">Track order status and timeline</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          New Order
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 rounded-full p-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-800">Order {order.id}</span>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {order.status}
          </span>
        </div>
        <div className="relative">
          {order.timeline.map((step, index) => (
            <div key={index} className="flex items-center mb-8 last:mb-0">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-800">{step.stage}</p>
                  <span className="text-sm text-gray-500">{step.time}</span>
                </div>
              </div>
              {index < order.timeline.length - 1 && (
                <div className="absolute h-full w-0.5 bg-blue-200 left-5 top-10 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTimelineCard;