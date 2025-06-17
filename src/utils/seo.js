// src/utils/seo.js
export const defaultMetaTags = {
  title: 'Architecture Firm | San Miguel de Allende',
  description: 'Award-winning architecture firm in San Miguel de Allende, specializing in luxury residential and commercial projects that blend contemporary design with colonial heritage.',
  keywords: 'architect, San Miguel de Allende, luxury home design, colonial architecture, sustainable design, Mexico architect',
};

export const generateMetaTags = (pageMeta = {}) => {
  const meta = { ...defaultMetaTags, ...pageMeta };
  
  document.title = meta.title;
  
  // Update meta description
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', meta.description);
  
  // Update meta keywords
  let keywordsTag = document.querySelector('meta[name="keywords"]');
  if (!keywordsTag) {
    keywordsTag = document.createElement('meta');
    keywordsTag.setAttribute('name', 'keywords');
    document.head.appendChild(keywordsTag);
  }
  keywordsTag.setAttribute('content', meta.keywords);

  // Update Open Graph tags
  let ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (!ogTitleTag) {
    ogTitleTag = document.createElement('meta');
    ogTitleTag.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleTag);
  }
  ogTitleTag.setAttribute('content', meta.title);

  let ogDescTag = document.querySelector('meta[property="og:description"]');
  if (!ogDescTag) {
    ogDescTag = document.createElement('meta');
    ogDescTag.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescTag);
  }
  ogDescTag.setAttribute('content', meta.description);
};

export const updatePageMetaTags = (pageInfo) => {
  generateMetaTags({
    title: `${pageInfo.title} | Architecture Firm`,
    description: pageInfo.description,
    keywords: pageInfo.keywords,
  });
};