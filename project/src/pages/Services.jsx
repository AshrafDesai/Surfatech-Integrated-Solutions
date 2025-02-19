import { useState, useEffect } from 'react';
import { FaSprayCan, FaIndustry, FaFire, FaPaintRoller, FaTools, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Services() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' // Persist theme across reloads
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const services = [
    {
      icon: FaSprayCan,
      title: 'Industrial Powder Supply',
      description: 'High-quality powder coating materials for various industrial applications, including epoxy, polyester, and hybrid powders.',
    },
    {
      icon: FaPaintRoller,
      title: 'Touch-up Sprays',
      description: 'Professional-grade touch-up solutions for quick repairs and maintenance of powder-coated surfaces.',
    },
    {
      icon: FaFire,
      title: 'Industrial Ovens',
      description: 'State-of-the-art curing ovens designed for optimal powder coating results and maximum efficiency.',
    },
    {
      icon: FaIndustry,
      title: 'Paint Booth Setup',
      description: 'Complete paint booth solutions including design, installation, and maintenance services.',
    },
    {
      icon: FaTools,
      title: 'Equipment Maintenance',
      description: 'Regular maintenance and repair services for powder coating equipment and systems.',
    },
    {
      icon: FaCog,
      title: 'Custom Solutions',
      description: 'Tailored powder coating solutions to meet your specific industrial requirements.',
    },
  ];

  return (
    <div className={`bg-gray-50 dark:bg-gray-900 transition-all duration-300`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 text-gray-900 dark:text-gray-100 hover:text-blue-600 transition duration-300 ease-in-out"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <span role="img" aria-label="Light Mode">
            🌞 Light Mode
          </span>
        ) : (
          <span role="img" aria-label="Dark Mode">
            🌙 Dark Mode
          </span>
        )}
      </button>

      {/* Header */}
      <div className="bg-blue-600 py-16 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive powder coating solutions for all your industrial needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Contact us to discuss your specific requirements and get a tailored solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}