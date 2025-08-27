import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import socialLinks from '../../../public/data/socialLinks.json';
import { useState } from "react";

const icons = {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn
};

function SocialLinks() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ url, icon, label, hoverColor }, idx) => {
        const Icon = icons[icon];
        return (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors duration-300 text-white"
            aria-label={label}
            style={{
              backgroundColor: hovered === idx ? hoverColor : "#1f2937" // bg-gray-800
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;