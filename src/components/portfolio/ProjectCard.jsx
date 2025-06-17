import React, { useState } from 'react';
import Carousel from './Carusel';

function ProjectCard({ proyecto }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
        <div className="aspect-w-16 h-64 relative">
          <img
            src={proyecto.image}
            alt={proyecto.title}
            className="object-cover w-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{proyecto.title}</h3>
            <p className="text-sm opacity-90">{proyecto.category}</p>
            <button
              className="mt-4 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setShowDetails(true)}
            >
              Ver más...
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
              onClick={() => setShowDetails(false)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <h4 className="text-3xl font-bold mb-4 text-gray-900">{proyecto.title}</h4>
            <p className="text-2xl font-bold mb-4 text-gray-900">{proyecto.year}</p>
            <p className="text-gray-600">{proyecto.category}</p>
            <p className="text-gray-600">{proyecto.description}</p>  
            <div className="gap-4 mb-4">
              {proyecto.images && proyecto.images.length > 0 && (
  <Carousel images={proyecto.images} alt={proyecto.title} />
)}
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;