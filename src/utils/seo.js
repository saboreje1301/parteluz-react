// src/utils/seo.js
// Default meta tags (placeholders, actual values come from i18n)
export const defaultMetaTags = {
  title: 'Default Title',
  description: 'Default Description',
  keywords: 'default, keywords',
  ogImage: '/images/default-og-image.jpg' // Path to your default Open Graph image
};

export const generateMetaTags = (meta = {}) => {
  // Set the document title
  document.title = meta.title;

  // Helper to update or create a meta tag
  const updateOrCreateMetaTag = (nameOrProperty, value, isProperty = false) => {
    const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(isProperty ? 'property' : 'name', nameOrProperty);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', value);
  };

  updateOrCreateMetaTag('description', meta.description);
  updateOrCreateMetaTag('keywords', meta.keywords);

  // Open Graph tags
  updateOrCreateMetaTag('og:title', meta.title, true);
  updateOrCreateMetaTag('og:description', meta.description, true);
  // Ensure the OG image URL is absolute
  updateOrCreateMetaTag('og:image', window.location.origin + (meta.ogImage || defaultMetaTags.ogImage), true);

  // --- Crucial for multilingual SEO: Add hreflang tags ---
  // Import i18n here if you need its state like `i18n.languages`
  // import i18n from '../i18n'; // Make sure this path is correct

  // Remove existing hreflang tags to avoid duplicates on re-render
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  // Define your supported languages for hreflang
  const supportedLangs = ['es', 'en']; // Hardcoding this for simplicity with current App.jsx.
                                      // If you want it dynamic, you'd need to pass i18n.languages

  supportedLangs.forEach(lang => {
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'alternate');
    linkTag.setAttribute('hreflang', lang);
    // *** IMPORTANT: Adjust this URL to match your actual language routing strategy! ***
    // Currently, your App.jsx does NOT change the URL for language.
    // So, if you want Google to see different language versions, you need to tell it
    // which URL corresponds to which language. The query parameter is one way,
    // but not the best for discovery.
    linkTag.setAttribute('href', `${window.location.origin}/?lang=${lang}`); // Example for query param routing
    document.head.appendChild(linkTag);
  });

  // Add x-default for default language/no specific preference
  const xDefaultLinkTag = document.createElement('link');
  xDefaultLinkTag.setAttribute('rel', 'alternate');
  xDefaultLinkTag.setAttribute('hreflang', 'x-default');
  xDefaultLinkTag.setAttribute('href', window.location.origin); // Your default entry point without specific language
  document.head.appendChild(xDefaultLinkTag);
};

// --- MODIFIED updatePageMetaTags function ---
// It now takes the `t` (translation) function from react-i18next and a `pageKey`
export const updatePageMetaTags = (t_function, pageKey) => {
  // Fetch translated SEO meta from your translation JSON using the passed t_function
  const translatedTitle = t_function(`seo.title_${pageKey}`);
  const translatedDescription = t_function(`seo.description_${pageKey}`);
  const translatedKeywords = t_function(`seo.keywords_${pageKey}`);
  // If you have specific OG images per language, you'd add keys for them in JSON
  const translatedOgImage = t_function(`seo.og_image_${pageKey}`, { defaultValue: defaultMetaTags.ogImage });


  generateMetaTags({
    title: translatedTitle,
    description: translatedDescription,
    keywords: translatedKeywords,
    ogImage: translatedOgImage
  });
};