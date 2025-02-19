// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
   // Added About Us link
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark'); // Add dark mode class to <html> element
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode class from <html> element
    }
  };

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 ease-in-out">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-auto"
                    src="https://surfatechintesoln.netlify.app/img/about1.png"
                    alt="SurfaTech Logo"
                  />
                </div>
              </div>

              {/* Centered Navigation */}
              <div className="flex-1 flex justify-center">
                <div className="hidden sm:flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-900 dark:text-gray-100 hover:text-blue-600 hover:underline transition duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Dark Mode Toggle Button */}
              <div className="hidden sm:flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 transition duration-300 ease-in-out"
                  aria-label="Toggle Dark Mode"
                >
                  
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button
                  aria-label="Open mobile menu"
                  className="text-gray-400 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
                >
                  {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-base font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-3 transition duration-200 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-2">
                <button
                  onClick={toggleTheme}
                  className="w-full text-left text-gray-700 dark:text-gray-100 hover:text-blue-600 transition duration-300 ease-in-out"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? (
                    <span role="img" aria-label="Light Mode">🌞 Light Mode</span>
                  ) : (
                    <span role="img" aria-label="Dark Mode">🌙 Dark Mode</span>
                  )}
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}