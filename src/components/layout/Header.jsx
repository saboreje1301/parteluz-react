import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { i18n, t } = useTranslation()
  const [navigation, setNavigation] = useState([])

  // Actualiza la navegación cuando cambia el idioma
  useEffect(() => {
    setNavigation([
      { name: t('nav.home'), href: '/' },
      { name: t('nav.portfolio'), href: '/portfolio' },
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.blog'), href: '/blog' },
      { name: t('nav.contact'), href: '/contact' },
    ])
  }, [i18n.language]) // <-- re-render on language change

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold">
            ParteLuz Arquitectura
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-black font-semibold'
                    : 'text-gray-600 hover:text-black'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-sm text-gray-500 hover:text-black transition"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            <span className="sr-only">{t('nav.menu')}</span>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-black font-semibold'
                    : 'text-gray-600'
                } block py-2`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="mt-2 text-sm text-gray-500 hover:text-black"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
