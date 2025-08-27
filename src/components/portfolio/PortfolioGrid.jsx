import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useNavigate, useLocation } from 'react-router-dom';

function PortfolioGrid({ limit = null, preview = true }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isPortfolioPage = location.pathname === '/portfolio';

  const title = isPortfolioPage ? "Nuestros Proyectos" : "Proyectos Destacados";
  const showButton = !isPortfolioPage;

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const renderProjects = (list) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
      {list.map((project) => (
        <ProjectCard key={project.id} proyecto={project} />
      ))}
    </div>
  );

  if (loading) return <p className="text-center">Cargando proyectos...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;
  if (!projects.length) return <p className="text-center">No hay proyectos disponibles.</p>;

  return (
    <div className="container mx-auto px-2">
      <h2 className="text-3xl font-bold text-center mb-8">
        {title}
      </h2>

      {/* Renderiza los proyectos */}
      {renderProjects(isPortfolioPage ? projects : projects.slice(0, limit))}
      {/* Lógica de renderizado para cuando no es la página de portfolio */}
      {/* Si estás en la página de portfolio, puedes eliminar el "limit" en el renderizado de arriba y usar solo `projects` */}


      {showButton && (
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Ver Todos los Proyectos
          </button>
        </div>
      )}

      {/* Este bloque de código está duplicado. Se recomienda unificar la lógica de renderizado. */}
      {/* {!preview && (
        <div className="mt-12 text-center grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} proyecto={project} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default PortfolioGrid;