import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { 
      id: '#1234',
      customerName: 'John Doe',
      date: '2024-04-10',
      total: 45.97,
      status: 'Fulfilled',
      items: [
        { name: 'Paracetamol', quantity: 2, price: 5.99 },
        { name: 'Amoxicillin', quantity: 1, price: 12.99 },
      ],
      timeline: [
        { stage: 'Order Received', time: '09:00 AM', completed: true },
        { stage: 'Prescription Verified', time: '09:30 AM', completed: true },
        { stage: 'Fulfilled', time: '10:00 AM', completed: true }
      ]
    },
    { 
      id: '#1235',
      customerName: 'Jane Smith',
      date: '2024-04-10',
      total: 26.97,
      status: 'Processing',
      items: [
        { name: 'Omeprazole', quantity: 3, price: 8.99 },
      ],
      timeline: [
        { stage: 'Order Received', time: '10:30 AM', completed: true },
        { stage: 'Prescription Verified', time: '11:00 AM', completed: true },
        { stage: 'Fulfilled', time: '', completed: false }
      ]
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Order Management</h1>
        <p className="text-gray-600">Track and manage prescription orders</p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="button-primary w-full md:w-auto">
          New Order
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order {order.id}
                  </h3>
                  <p className="text-sm text-gray-600">{order.customerName}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'Fulfilled'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                {order.timeline.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                      {step.completed ? '✓' : ''}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{step.stage}</p>
                      {step.time && (
                        <p className="text-xs text-gray-500">{step.time}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;