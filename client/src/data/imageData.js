// src/data/imageData.js
// Client images catalog in client/public/images/
// Referenced using direct absolute paths starting with '/' as public assets.
// Zero module imports or bundler overhead. All paths and spaces strictly encoded (%20).

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

// Scanned client image files located in client/public/images/
const RAW_CATALOG = [
  // Architecture (9 items)
  { category: 'architecture', location: 'QUARRINGTON LANE', filename: '009.jpg' },
  { category: 'architecture', location: 'QUARRINGTON LANE', filename: '014.jpg' },
  { category: 'architecture', location: 'allenbury', filename: '108.jpg' },
  { category: 'architecture', location: 'allenbury', filename: 'hf_20260705_025619_2bd45dbd-edce-4d2b-ad77-e7635d3b1116.png' },
  { category: 'architecture', location: 'dupont street', filename: '002 copy.jpg' },
  { category: 'architecture', location: 'dupont street', filename: '008 copy.jpg' },
  { category: 'architecture', location: 'power street', filename: 'DSC_2227.jpg' },
  { category: 'architecture', location: 'power street', filename: 'DSC_2240.jpg' },
  { category: 'architecture', location: 'power street', filename: 'hf_20260705_031741_be599267-473b-4461-b2c0-9517d99bff43.png' },

  // Commercial (8 items)
  { category: 'commercial', location: 'YONGESTREET', filename: '003.jpg' },
  { category: 'commercial', location: 'YONGESTREET', filename: '009.jpg' },
  { category: 'commercial', location: 'centralpark', filename: '109 _.jpg' },
  { category: 'commercial', location: 'centralpark', filename: '112 _.jpg' },
  { category: 'commercial', location: 'creek bank', filename: '0007_007.jpg' },
  { category: 'commercial', location: 'creek bank', filename: '0023_023.jpg' },
  { category: 'commercial', location: 'york street', filename: '0010.jpg' },
  { category: 'commercial', location: 'york street', filename: '0026.jpg' },

  // Hotel (7 items)
  { category: 'hotel', location: 'HOTEL DELTA', filename: 'DSC_4659_edit.jpg' },
  { category: 'hotel', location: 'HOTEL DELTA', filename: 'H63_5051_edit.jpg' },
  { category: 'hotel', location: 'LISBON AIRBNB', filename: '009.jpg' },
  { category: 'hotel', location: 'LISBON AIRBNB', filename: '015.jpg' },
  { category: 'hotel', location: 'marriot', filename: 'DSC_6032-1.jpg' },
  { category: 'hotel', location: 'marriot', filename: 'DSC_6177-1.jpg' },
  { category: 'hotel', location: 'the palms', filename: 'DSC_2919.jpg' },

  // Residential (3 items)
  { category: 'residential', location: 'lakeshore', filename: '002.jpg' },
  { category: 'residential', location: 'revcoe', filename: '003.jpg' },
  { category: 'residential', location: 'revcoe', filename: '050.jpg' }
];

export const ALL_CLIENT_IMAGES = RAW_CATALOG
  .map((item, index) => {
    // Explicit absolute path starting with leading slash: /images/category/location/filename
    const rawPath = `/images/${item.category}/${item.location}/${item.filename}`;
    // Encode spaces as %20 for strict web standards
    const encodedSrc = encodeURI(rawPath);
    const categoryName = formatCategory(item.category);
    const locationName = formatTitle(item.location);
    const title = `${locationName} ${categoryName}`;

    return {
      id: `client-img-${index + 1}`,
      rawPath,
      src: encodedSrc,
      category: item.category.toLowerCase(),
      categoryName,
      location: item.location,
      locationName,
      filename: item.filename,
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

// Specific Hero Image for Architectural Section (/images/architecture/allenbury/108.jpg)
export const HERO_ARCH_IMAGE =
  ARCHITECTURE_IMAGES.find((img) => img.src.includes('allenbury') && img.src.includes('108')) ||
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
      RESIDENTIAL_IMAGES.find((img) => img.src.includes('lakeshore')) ||
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
      RESIDENTIAL_IMAGES.find((img) => img.src.includes('revcoe')) ||
      RESIDENTIAL_IMAGES[1] ||
      ARCHITECTURE_IMAGES[2]
    ).src,
    tag: 'INTERIOR'
  }
];
