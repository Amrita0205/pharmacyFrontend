// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
        isDarkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-indigo-900 to-indigo-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-blue-600">Pharm</span>
              <span
                className={`${
                  isDarkMode ? 'text-white hover:text-indigo-200' : 'text-white hover:text-indigo-200'
                } transition-colors`}
              >
                Connect
              </span>
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-indigo-100'}`}>
              Empowering pharmacy operations with modern solutions for better healthcare management.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/inventory"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                >
                  Customers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                  aria-label="Visit Help Center"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                  aria-label="View Documentation"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className={`${
                    isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                  } transition-colors`}
                  aria-label="View FAQs"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className={`${
                  isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                } transition-colors`}
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                className={`${
                  isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                } transition-colors`}
                aria-label="Follow us on X"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                className={`${
                  isDarkMode ? 'text-gray-300 hover:text-indigo-200' : 'text-indigo-100 hover:text-indigo-200'
                } transition-colors`}
                aria-label="Follow us on GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.819-.26.819-.578 0-.284-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`mt-8 pt-8 border-t text-center ${
            isDarkMode ? 'border-gray-700 text-gray-300' : 'border-indigo-700 text-indigo-100'
          }`}
        >
          <p>© {currentYear} PharmConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;