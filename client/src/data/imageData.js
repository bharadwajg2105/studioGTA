// src/data/imageData.js
// Vite dynamically glob-imports all client images from public/images/:category/:location/:file

const rawModules = import.meta.glob(
  '/public/images/*/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

function formatTitle(str) {
  if (!str) return '';
  const map = {
    yongestreet: 'Yonge Street',
    centralpark: 'Central Park',
    marriot: 'Marriott',
    revcoe: 'Revcoe',
    lakeshore: 'Lakeshore',
    allenbury: 'Allenbury',
    'dupont street': 'Dupont Street',
    'power street': 'Power Street',
    'quarrington lane': 'Quarrington Lane',
    'creek bank': 'Creek Bank',
    'york street': 'York Street',
    'hotel delta': 'Hotel Delta',
    'lisbon airbnb': 'Lisbon Airbnb',
    'the palms': 'The Palms'
  };
  const lower = str.trim().toLowerCase();
  if (map[lower]) return map[lower];
  return lower.replace(/\b[a-z]/g, (c) => c.toUpperCase());
}

function formatCategory(cat) {
  const map = {
    architecture: 'Architecture',
    commercial: 'Commercial',
    hotel: 'Hotel',
    residential: 'Residential'
  };
  const lower = (cat || '').toLowerCase();
  return map[lower] || lower.charAt(0).toUpperCase() + lower.slice(1);
}

export const ALL_CLIENT_IMAGES = Object.entries(rawModules)
  .map(([rawPath, moduleUrl], index) => {
    const normalized = rawPath.replace(/\\/g, '/');
    const parts = normalized.split('/');
    const imgIndex = parts.indexOf('images');
    const category = imgIndex !== -1 && parts[imgIndex + 1] ? parts[imgIndex + 1].toLowerCase() : '';
    const location = imgIndex !== -1 && parts[imgIndex + 2] ? parts[imgIndex + 2] : '';
    const filename = parts[parts.length - 1];

    const categoryName = formatCategory(category);
    const locationName = formatTitle(location);
    const publicPath = normalized.replace(/^\/public/, '');
    const title = `${locationName} ${categoryName}`;

    return {
      id: `client-img-${index + 1}`,
      rawPath,
      publicPath,
      src: moduleUrl || publicPath,
      category,
      categoryName,
      location,
      locationName,
      filename,
      title,
      badge: `${categoryName} • ${locationName}`
    };
  })
  .sort((a, b) => a.category.localeCompare(b.category) || a.location.localeCompare(b.location));

export const ALL_IMAGES = ALL_CLIENT_IMAGES;

// Category Filtered Lists
export const ARCHITECTURE_IMAGES = ALL_CLIENT_IMAGES.filter((img) => img.category === 'architecture');
export const COMMERCIAL_IMAGES = ALL_CLIENT_IMAGES.filter((img) => img.category === 'commercial');
export const HOTEL_IMAGES = ALL_CLIENT_IMAGES.filter((img) => img.category === 'hotel');
export const RESIDENTIAL_IMAGES = ALL_CLIENT_IMAGES.filter((img) => img.category === 'residential');

// Specific selections
export const HERO_ARCH_IMAGE =
  ARCHITECTURE_IMAGES.find((img) => img.publicPath.includes('allenbury') && img.filename.startsWith('108')) ||
  ARCHITECTURE_IMAGES[0] ||
  {
    src: '/images/architecture/allenbury/108.jpg',
    badge: 'Architecture • Allenbury',
    locationName: 'Allenbury',
    categoryName: 'Architecture',
    title: 'Allenbury Architecture'
  };

// Best 3 images from residential and architecture for Home Hero Carousel
export const HOME_HERO_SLIDES = [
  {
    id: 'hero-arch-allenbury',
    title: 'Modern Architectural Elevation & Design Intent',
    category: 'Architecture',
    location: 'Allenbury',
    badge: 'Architecture • Allenbury',
    image: HERO_ARCH_IMAGE.src,
    tag: 'FEATURED'
  },
  {
    id: 'hero-res-lakeshore',
    title: 'Waterfront Luxury Living & Panoramic Views',
    category: 'Residential',
    location: 'Lakeshore',
    badge: 'Residential • Lakeshore',
    image: (
      RESIDENTIAL_IMAGES.find((img) => img.publicPath.includes('lakeshore')) ||
      RESIDENTIAL_IMAGES[0] ||
      ARCHITECTURE_IMAGES[1]
    ).src,
    tag: 'RESIDENTIAL'
  },
  {
    id: 'hero-res-revcoe',
    title: 'High-Ceiling Interior Detailing & Natural Light',
    category: 'Residential',
    location: 'Revcoe',
    badge: 'Residential • Revcoe',
    image: (
      RESIDENTIAL_IMAGES.find((img) => img.publicPath.includes('revcoe')) ||
      RESIDENTIAL_IMAGES[1] ||
      ARCHITECTURE_IMAGES[2]
    ).src,
    tag: 'INTERIOR'
  }
];
