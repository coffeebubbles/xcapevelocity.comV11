import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({ 
  title = 'AI Automation Solutions for Startups',
  description = 'Transform your startup with affordable AI automation solutions. Get enterprise-grade AI capabilities without the enterprise price tag. Start scaling faster today.',
  keywords = 'AI automation, startup solutions, machine learning, process automation, AI integration',
  ogImage = 'https://xscapevelocity.com/og-image.jpg'
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://xscapevelocity.com${location.pathname}`;
  const fullTitle = `Xscape Velocity | ${title}`;

  React.useEffect(() => {
    // Update meta tags
    document.title = fullTitle;
    
    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:image', ogImage);
    
    // Twitter
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', currentUrl);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical URL
    updateCanonicalUrl(currentUrl);
  }, [title, description, keywords, ogImage, currentUrl, fullTitle]);

  return null;
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
}