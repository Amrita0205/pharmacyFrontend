// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDarkMode } = useTheme();
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
      className={`shadow-md ${
        isDarkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-indigo-700 to-indigo-900'
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
              className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-white'} hover:${
                isDarkMode ? 'text-indigo-200' : 'text-indigo-200'
              } transition-colors`}
            >
              <span className="text-blue-600">Pharm</span>Connect
            </span> */}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none ${
              isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
            } transition-colors`}
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
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${
                    location.pathname === '/dashboard'
                      ? isDarkMode
                        ? 'border-b-2 border-indigo-200'
                        : 'border-b-2 border-indigo-200'
                      : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/inventory"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${
                    location.pathname === '/inventory'
                      ? isDarkMode
                        ? 'border-b-2 border-indigo-200'
                        : 'border-b-2 border-indigo-200'
                      : ''
                  }`}
                >
                  Inventory
                </Link>
                <Link
                  to="/customers"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${
                    location.pathname === '/customers'
                      ? isDarkMode
                        ? 'border-b-2 border-indigo-200'
                        : 'border-b-2 border-indigo-200'
                      : ''
                  }`}
                >
                  Customers
                </Link>
                <Link
                  to="/orders"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${
                    location.pathname === '/orders'
                      ? isDarkMode
                        ? 'border-b-2 border-indigo-200'
                        : 'border-b-2 border-indigo-200'
                      : ''
                  }`}
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600 hover:text-indigo-200'
                      : 'bg-indigo-800 text-white hover:bg-indigo-700 hover:text-indigo-200'
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
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600 hover:text-indigo-200'
                      : 'bg-indigo-800 text-white hover:bg-indigo-700 hover:text-indigo-200'
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
              isDarkMode ? 'border-gray-600' : 'border-indigo-600'
            }`}
          >
            {user ? (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/dashboard"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${location.pathname === '/dashboard' ? 'font-bold' : ''}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/inventory"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${location.pathname === '/inventory' ? 'font-bold' : ''}`}
                >
                  Inventory
                </Link>
                <Link
                  to="/customers"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${location.pathname === '/customers' ? 'font-bold' : ''}`}
                >
                  Customers
                </Link>
                <Link
                  to="/orders"
                  className={`${
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors ${location.pathname === '/orders' ? 'font-bold' : ''}`}
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors w-full ${
                    isDarkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600 hover:text-indigo-200'
                      : 'bg-indigo-800 text-white hover:bg-indigo-700 hover:text-indigo-200'
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
                    isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                  } transition-colors`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-lg shadow-md transition-colors text-center ${
                    isDarkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600 hover:text-indigo-200'
                      : 'bg-indigo-800 text-white hover:bg-indigo-700 hover:text-indigo-200'
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