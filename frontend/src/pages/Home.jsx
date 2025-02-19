import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const features = [
  {
    name: 'Industrial Powder Supply',
    description: 'We provide a wide range of premium powder coating materials for various industrial applications.',
  },
  {
    name: 'Touch-up Solutions',
    description: 'Precision touch-up sprays and coatings ensure a flawless and long-lasting finish.',
  },
  {
    name: 'Industrial Ovens',
    description: 'Advanced curing ovens designed for optimal efficiency and high-performance results.',
  },
  {
    name: 'Paint Booth Setup',
    description: 'Customized paint booth solutions to enhance efficiency and environmental safety.',
  },
];

const sliderImages = [
  {
    url: 'https://media.istockphoto.com/id/609811204/photo/colorful-powder-coating.jpg?s=612x612&w=0&k=20&c=93mknVZ2rL0EqRc2ILeS32AH2vHgjF30PbxzSM4izSM=',
    alt: 'Industrial Powder Coating',
  },
  {
    url: 'https://t4.ftcdn.net/jpg/09/77/48/77/240_F_977487770_M5mdcVYnNQEcrHzms3GWZ6U4UB5YJNgE.jpg',
    alt: 'Touch-up Solutions',
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/1/ZC/JS/RC/1604625/powder-coating-oven.jpg',
    alt: 'Industrial Ovens',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1661342419920-63ded0f67423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaW50JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Paint Booth Setup',
  },
];

export default function Home() {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change images every 3 seconds
    arrows: false,
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
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

      {/* Hero Section with Slider */}
      <div className="relative">
        <Slider {...sliderSettings} className="w-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.url}
                alt={image.alt}
                className="h-[500px] w-full object-cover"
              />
              <div className={`absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-black/50' : 'bg-black/30'} text-white text-center px-6`}>
                <h1 className="text-4xl sm:text-6xl font-extrabold">{image.alt}</h1>
                <p className="mt-4 text-lg text-gray-200">
                  Premium solutions for all your powder coating needs.
                </p>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="/contact"
                    className="inline-block rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-700 shadow-md transition hover:bg-gray-200"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-lg font-semibold text-white hover:underline"
                  >
                    Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-blue-600">Our Expertise</h2>
          <p className="mt-2 text-4xl font-extrabold">
            Comprehensive Powder Coating Solutions
          </p>
          <p className="mt-4 text-lg">
            We bring cutting-edge technology and expertise to enhance your industrial coating needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`flex items-start space-x-4 rounded-lg p-6 shadow-md transition hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <CheckCircleIcon className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">{feature.name}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}