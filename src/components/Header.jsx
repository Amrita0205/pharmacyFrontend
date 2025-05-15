import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-2xl font-bold text-white hover:text-blue-100 transition-colors">PharmConnect</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/dashboard' ? 'border-b-2 border-white' : ''}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/inventory"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/inventory' ? 'border-b-2 border-white' : ''}`}
                >
                  Inventory
                </Link>
                <Link
                  to="/customers"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/customers' ? 'border-b-2 border-white' : ''}`}
                >
                  Customers
                </Link>
                <Link
                  to="/orders"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/orders' ? 'border-b-2 border-white' : ''}`}
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-blue-100 transition-colors">Login</Link>
                <Link to="/register" className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors">Register</Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-500">
            {user ? (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/dashboard"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/dashboard' ? 'font-bold' : ''}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/inventory"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/inventory' ? 'font-bold' : ''}`}
                >
                  Inventory
                </Link>
                <Link
                  to="/customers"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/customers' ? 'font-bold' : ''}`}
                >
                  Customers
                </Link>
                <Link
                  to="/orders"
                  className={`text-white hover:text-blue-100 transition-colors ${location.pathname === '/orders' ? 'font-bold' : ''}`}
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link to="/login" className="text-white hover:text-blue-100 transition-colors">Login</Link>
                <Link to="/register" className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors text-center">Register</Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};


export default Header;