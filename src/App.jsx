import React, { Suspense, useEffect } from 'react'; // Import useEffect
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import AboutSection from './components/about/AboutSection';
import ContactForm from './components/contact/ContactForm';
import BlogGrid from './components/blog/BlogGrid';
import AvisoPrivacidad from './components/Aviso-privacidad/AvisoPrivacidad';

import { useTranslation } from 'react-i18next'; // Import useTranslation
import { updatePageMetaTags } from './utils/seo'; // Your SEO utility

// Componente de carga para Suspense
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '1.2em',
    color: '#555'
  }}>
    Cargando traducciones... / Loading translations...
  </div>
);

// Componente que maneja el SEO y el idioma para cada ruta
function RouteWrapper({ children, pageKey }) {
  const { t, i18n } = useTranslation();
  const location = useLocation(); // Hook para obtener la ruta actual

  // Efecto para actualizar los metadatos SEO cuando cambie la ruta o el idioma
  useEffect(() => {
    // Aquí puedes definir la lógica para cada ruta
    // El 'pageKey' se pasa desde <RouteWrapper> en <Routes>
    updatePageMetaTags(t, pageKey);
  }, [location.pathname, t, pageKey]); // Dependencias: pathname de la ruta, función de traducción, y la clave de la página

  // `children` contendrá los componentes de la ruta (HeroSection, PortfolioGrid, etc.)
  return <>{children}</>;
}

function App() {
  const { i18n } = useTranslation(); // Accedemos a la instancia i18n para cambiar el idioma globalmente

  // Función para cambiar el idioma globalmente (será pasada al Header)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    // Envolvemos todo el Router en Suspense para que i18next cargue las traducciones
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Pasamos la función changeLanguage al Header */}
          <Header onChangeLanguage={changeLanguage} currentLanguage={i18n.language} />
          <main className="flex-grow">
            <Routes>
              {/* Ruta para la página de inicio */}
              <Route
                path="/"
                element={
                  <RouteWrapper pageKey="home"> {/* pageKey 'home' para SEO */}
                    <HeroSection />
                    <div className="container mx-auto px-4">
                      <section className="py-12">
                        <PortfolioGrid featured={false} preview={true} limit={3} />
                      </section>
                      <section className="py-12">
                        <AboutSection preview={true} />
                      </section>
                      <section className="py-12">
                        <BlogGrid preview={true} />
                      </section>
                    </div>
                  </RouteWrapper>
                }
              />

              {/* Otras rutas, cada una con su RouteWrapper y pageKey */}
              <Route
                path="/portfolio"
                element={<RouteWrapper pageKey="portfolio"><PortfolioGrid /></RouteWrapper>}
              />
              <Route
                path="/about"
                element={<RouteWrapper pageKey="about"><AboutSection /></RouteWrapper>}
              />
              <Route
                path="/contact"
                element={<RouteWrapper pageKey="contact"><ContactForm /></RouteWrapper>}
              />
              <Route
                path="/blog"
                element={<RouteWrapper pageKey="blog"><BlogGrid /></RouteWrapper>}
              />
              <Route
                path="/avisoprivacidad"
                element={<RouteWrapper pageKey="privacy"><AvisoPrivacidad /></RouteWrapper>}
              />
              {/* Aquí podrías añadir una ruta para 404/not found */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;