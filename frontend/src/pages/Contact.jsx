import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`Thank you for your inquiry! Reference ID: ${data.enquiryId}`);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`pt-32 bg-white dark:bg-gray-800 min-h-screen transition-all duration-300`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 text-gray-900 dark:text-gray-100 hover:text-blue-600 transition duration-300 ease-in-out"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Google Maps Location */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Location</h3>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.789270254951!2d73.13661517519768!3d19.209556982032464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796a0b2f2d27f%3A0x6e862a4d74b5d64a!2sKalyan%20Murbad%20Road%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="w-full h-72 md:h-96"
          ></iframe>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Have a question or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</h3>
            <div className="flex items-center">
              <FaPhone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-4 text-gray-500 dark:text-gray-300">+91 8928292594</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-4 text-gray-500 dark:text-gray-300">surfaintsol@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-4 text-gray-500 dark:text-gray-300">Kalyan Murbad Road, Maharashtra, India 421301</span>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              {['name', 'email', 'phone', 'message'].map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      id={field}
                      rows="4"
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                                 focus:border-blue-500 focus:ring-blue-500 
                                 dark:bg-gray-700 dark:border-gray-600 
                                 dark:text-white dark:focus:border-blue-400"
                    ></textarea>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      id={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                                 focus:border-blue-500 focus:ring-blue-500 
                                 dark:bg-gray-700 dark:border-gray-600 
                                 dark:text-white dark:focus:border-blue-400"
                    />
                  )}
                </div>
              ))}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent 
                             rounded-md shadow-sm text-sm font-medium text-white 
                             bg-blue-600 hover:bg-blue-700 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 
                             focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
