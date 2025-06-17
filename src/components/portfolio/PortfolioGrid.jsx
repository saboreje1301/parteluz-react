import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';


function PortfolioGrid({ featured = true, limit = null, preview = true }) {
  const [proyectos, setProyectos] = useState([]);

useEffect(() => {
  
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(setProyectos)
      .catch(error => console.error('Error fetching projects:', error));
  
}, []);

  return (
     

    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        {featured ? 'Nuestro Portafolio' : 'Proyectos Destacados'}
      </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {(limit ? proyectos.slice(0, limit) : proyectos).map((proyecto) => (
    <ProjectCard key={proyecto.id} proyecto={proyecto} />
  ))}
</div>

      {/* Ejemplo de botón sin renderizar proyectos dentro */}
      {!featured && (
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
            Ver Todos los Proyectos
          </button>
        </div>
      )}

      {!preview && (
        <div className="mt-12 text-center grid md:grid-cols-3 gap-6">
          {proyectos.map ((proyecto) => (
            <ProjectCard key = {proyecto.id} proyecto = {proyecto} />
          ))}
          </div>
      )}
    </div>

  );
}

export default PortfolioGrid;