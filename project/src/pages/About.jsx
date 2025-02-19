// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* About Us Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Us</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            At SurfaTech Integrated Solutions, we specialize in high-quality powder coating solutions tailored to meet the diverse needs of our clients. With over 20 years of industry experience, our founder,<strong>Mr. M.N. Desai,</strong>  has a proven track record of excellence, having worked with top companies like <strong>Kansai Nerolac Paints</strong> and <strong>Asian Paints</strong>.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Our commitment to innovation and quality ensures that we deliver exceptional results, making us a trusted partner in the powder coating industry.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>To be a leading provider of innovative powder coating solutions.</li>
            <li>Recognized for our commitment to quality, sustainability, and customer satisfaction.</li>
            <li>To contribute to a cleaner environment through advanced coating technologies.</li>
            <li>To set industry standards through continuous improvement and cutting-edge technology.</li>
          </ul>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>To deliver exceptional powder coating services that meet the unique needs of our clients.</li>
            <li>To foster a culture of innovation, integrity, and excellence within our team.</li>
            <li>To provide the highest quality products and services, ensuring complete customer satisfaction.</li>
            <li>To build long-lasting relationships based on trust and transparency.</li>
            <li>To invest in our people, technology, and processes to remain at the forefront of the industry.</li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li className="mt-2"><strong>Custom Solutions:</strong> Tailored services to meet your specific needs.</li>
            <li className="mt-2"><strong>Top Brands:</strong> Partnerships with industry leaders for quality assurance.</li>
            <li className="mt-2"><strong>Expert Team:</strong> Skilled professionals dedicated to excellence.</li>
            <li className="mt-2"><strong>Advanced Technology:</strong> Utilizing the latest equipment for precision.</li>
            <li className="mt-2"><strong>Quality Commitment:</strong> Strict quality control for superior results.</li>
            <li className="mt-2"><strong>Customer Focus:</strong> Building lasting relationships through outstanding service.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;