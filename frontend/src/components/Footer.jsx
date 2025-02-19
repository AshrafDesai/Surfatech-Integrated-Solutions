import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <img
              src="https://surfatechintesoln.netlify.app/img/about1.png"
              alt="SurfaTech Integrated Solutions Logo"
              className="h-10 w-auto mb-3"
            />
            <p className="text-gray-400 mt-1 text-sm">
              Professional powder coating solutions for industrial and commercial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-3">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-400 text-sm">+91 89282 92594</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-400 text-sm">surfaintsoln@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-400 text-sm">Kalyan Murbad Road, Maharashtra, India 421301</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-3">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} SurfaTech Integrated Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}