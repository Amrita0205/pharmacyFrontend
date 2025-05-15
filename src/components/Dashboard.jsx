import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardCard from './DashboardCard';
import InventoryTableCard from './InventoryTableCard';
import CustomerProfileCard from './CustomerProfileCard';
import OrderTimelineCard from './OrderTimelineCard';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
        <p className="text-blue-100 mt-2">Manage your pharmacy operations efficiently</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <DashboardCard />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <InventoryTableCard />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <CustomerProfileCard />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <OrderTimelineCard />
        </div>
      </div>
    </div>
  );
}