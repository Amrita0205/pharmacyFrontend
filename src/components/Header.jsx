import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext'; // Add this import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDarkMode } = useTheme(); // Use ThemeContext for dark mode
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
    <header
      className={`shadow-lg ${
        isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-blue-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            {/* <span
              className={`text-2xl font-bold text-white  transition-colors`}
            > */}
              {/* <span className="text-blue-600"></span> */}
              {/* PharmConnect
            </span> */}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none ${
              isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${
                    location.pathname === '/dashboard'
                      ? isDarkMode
                        ? 'border-b-2 border-gray-300'
                        : 'border-b-2 border-white'
                      : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/inventory"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${
                    location.pathname === '/inventory'
                      ? isDarkMode
                        ? 'border-b-2 border-gray-300'
                        : 'border-b-2 border-white'
                      : ''
                  }`}
                >
                  Inventory
                </Link>
                <Link
                  to="/customers"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${
                    location.pathname === '/customers'
                      ? isDarkMode
                        ? 'border-b-2 border-gray-300'
                        : 'border-b-2 border-white'
                      : ''
                  }`}
                >
                  Customers
                </Link>
                <Link
                  to="/orders"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${
                    location.pathname === '/orders'
                      ? isDarkMode
                        ? 'border-b-2 border-gray-300'
                        : 'border-b-2 border-white'
                      : ''
                  }`}
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`md:hidden py-4 border-t transition-all duration-300 ${
              isDarkMode ? 'border-gray-600' : 'border-blue-500'
            }`}
          >
            {user ? (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/dashboard"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${location.pathname === '/dashboard' ? 'font-bold' : ''}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/inventory"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${location.pathname === '/inventory' ? 'font-bold' : ''}`}
                >
                  Inventory
                </Link>
                <Link
                  to="/customers"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${location.pathname === '/customers' ? 'font-bold' : ''}`}
                >
                  Customers
                </Link>
                <Link
                  to="/orders"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors ${location.pathname === '/orders' ? 'font-bold' : ''}`}
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors w-full ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/login"
                  className={`${
                    isDarkMode ? 'text-gray-100 hover:text-gray-300' : 'text-white hover:text-blue-100'
                  } transition-colors`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors text-center ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                      : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;