import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks.jsx';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('common.company_name')}</h3>
            <p className="text-gray-400">
              {t('footer.slogan', 'Creando experiencias arquitectónicas excepcionales en San Miguel de Allende.')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links', 'Enlaces Directos')}</h4>
            <ul className="space-y-1">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">{t('common.portfolio_link')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">{t('common.about_link')}</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">{t('common.blog_link')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">{t('common.contact_us')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact', 'Contacto')}</h4>
            <ul className="space-y-1 text-gray-400">
              <li>{t('footer.address', 'San Miguel de Allende, Mexico')}</li>
              <li>{t('footer.email', 'contact@parteluzarquitectura.com')}</li>
              <li>{t('footer.phone', '+52 (415) 145-1007')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.follow_us', 'Síguenos')}</h4>
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-5 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {t('common.company_name')}. {t('footer.rights', 'Todos los derechos reservados.')}
          </p>
          <Link to="/avisoprivacidad" className="underline hover:text-white">
            {t('common.privacy_policy_link')}
          </Link>
        </div>  
      </div>
    </footer>
  );
}

export default Footer;