import { useState, useEffect } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
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

  const projects = [
    {
      id: 1,
      title: 'Industrial Equipment Coating',
      description: 'Heavy machinery powder coating with enhanced durability',
      image: 'https://media.istockphoto.com/id/609811204/photo/colorful-powder-coating.jpg?s=612x612&w=0&k=20&c=93mknVZ2rL0EqRc2ILeS32AH2vHgjF30PbxzSM4izSM=',
    },
    {
      id: 2,
      title: 'Automotive Parts',
      description: 'Custom color matching for automotive components',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800',
    },
    {
      id: 3,
      title: 'Architectural Elements',
      description: 'Weather-resistant coating for architectural applications',
      image: 'https://media.istockphoto.com/id/2002664201/photo/the-construction-worker-uses-aluminum-tape-and-they-had-a-roller-for-vapor-barrier-joints-on.jpg?s=612x612&w=0&k=20&c=bsZeEpej-ZNVc0F_23M-B7GUV-vMTiT6IPmPgPHf-V8=',
    },
    {
      id: 4,
      title: 'Metal Furniture',
      description: 'Decorative powder coating for furniture pieces',
      image: 'https://media.istockphoto.com/id/1316508825/photo/3d-rendering-of-a-dining-table-design.jpg?s=612x612&w=0&k=20&c=_YV7UhCYz8I_WIAoG08LnWJLKfu_xKlMzIwr9L-jdsA=',
    },
    {
      id: 5,
      title: 'Industrial Machinery',
      description: 'Protective coating for industrial equipment',
      image: 'https://media.istockphoto.com/id/461778719/photo/water-filter.jpg?s=612x612&w=0&k=20&c=_vlFXOROFGEC0KZYle1rFf_F9brclu0Ljn-hU07TJC0=',
    },
    {
      id: 6,
      title: 'Custom Projects',
      description: 'Specialized coating solutions for unique requirements',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
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
              Project Gallery
            </h1>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our portfolio of successful powder coating projects
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedImage(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}