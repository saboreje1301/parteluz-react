import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Faltaba esta línea

function AboutSection({ preview = false }) {
  const [servicios, setServicios] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (!preview) {
      fetch('../data/servicios.json')
        .then((res) => res.json())
        .then(setServicios)
        .catch((err) => console.error('Error al cargar los servicios:', err));
    }
  }, [preview]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.title', 'Acerca de Nosotros')}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700">
              {t(
                'about.description',
                `Vamos más allá de la arquitectura y la construcción; nos convertimos en intérpretes de tu yo más auténtico. Tu necesidad primordial de ser reconocido y de que tu entorno hable por ti es la brújula que guía cada trazo, cada elección de material. Nos obsesionamos con comprender tus deseos tácitos, esas aspiraciones que a veces ni siquiera verbalizas. ¿Imaginas un espacio que no solo te inspire, sino que te valide, que silenciosamente afirme tu lugar y tu valor? Permítenos construir ese santuario personal o profesional donde cada detalle esté imbuido de tu esencia, un entorno que no solo habitas, sino que te empodera en cada instante. Porque sabemos que, en lo más profundo, anhelas un espacio que no solo te contenga, sino que te propulse hacia quien realmente estás destinado a ser.`
              )}
            </p>
            {!preview && (
              <>
                <h2>{t('about.subtitle', 'Tu Espacio Es Tu Voz Silenciosa: Permítenos Amplificarla.')}</h2>
                <p className="text-gray-700">
                  {t(
                    'about.description_parragraph',
                  '¿Sientes ese vacío? Ese anhelo por un espacio que no solo te rodee, sino que te complete? En ParteLuz Arquitectura, no construimos ladrillos, esculpimos reflejos de tu ser más auténtico. Tu necesidad primordial de pertenencia, de sentirte visto y comprendido, es el cimiento de cada diseño que creamos. Permítenos ser los arquitectos de ese santuario personal o profesional donde cada rincón resuene con tu identidad, donde cada detalle silenciosamente afirme: este es mi lugar. Confía en nosotros para materializar ese espacio esencial que, en el fondo, sabes que mereces.')}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">{t('about.experience_years', 'Años de Experiencia')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">30+</div>
                    <div className="text-sm text-gray-600">{t('about.completed_projects', 'Proyectos Completados')}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="relative h-64 md:h-full hidden md:block">
            <picture>
              <img
                src="/assets/images/aux/183722.webp"
                alt="Our Team"
                className="rounded-lg object-cover w-full h-full ocultar-en-movil"
              />
            </picture>
          </div>
        </div>
        {!preview && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">{t('about.our_services', 'Nuestros Servicios')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {servicios.map((servicio) => (
                <div key={servicio.id} className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">{servicio.title}</h4>
                  <p className="text-gray-600">{servicio.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutSection;