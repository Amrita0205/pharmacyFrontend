import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function LandingPage() {
  const { user } = useAuth();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-background'}`}>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Welcome to PharmConnect
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete pharmacy management solution
            </p>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 mb-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="space-x-4">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="button-primary inline-block"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="inline-block px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Create Account
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="button-primary inline-block"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="feature-card">
              <h3 className="feature-title">Inventory Management</h3>
              <p className="feature-description">
                Track your pharmacy inventory in real-time with advanced analytics
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Customer Profiles</h3>
              <p className="feature-description">
                Manage patient information and prescription history securely
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Order Timeline</h3>
              <p className="feature-description">
                Monitor order status and maintain detailed transaction records
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="toggle-mode">
        <button className="toggle-button" onClick={toggleMode}>
          Toggle Dark/Light Mode
        </button>
      </div>
      <div className="category-section">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="category-card">Vitamins & Supplements</div>
          <div className="category-card">Hair and Skin Care</div>
          <div className="category-card">Diabetic Care</div>
          <div className="category-card">General Wellness</div>
        </div>
      </div>
    </>
  );
}