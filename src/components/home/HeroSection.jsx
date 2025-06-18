// src/components/home/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <picture>
        <img
          src="/assets/images/aux/190336_106.webp"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
          loading="lazy"
          />
        </picture>  
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Diseñando Experiencias Arquitectónicas Únicas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Somos un estudio de arquitectura de San Miguel de Allende, con una trayectoria reconocida por transformar espacios residenciales y comerciales de lujo. 
              Nuestra propuesta integra magistralmente el diseño contemporáneo con la esencia y el encanto de la arquitectura colonial
            </p>
            <div className="space-x-4">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200">
                Nuestros Proyectos
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors duration-200">
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;