// StudioGTA - Real Estate Media Source of Truth

export const COMPANY = {
  name: 'StudioGTA',
  tagline: 'Premium Real Estate Photography & Media Ontario',
  founder: 'StudioGTA Production Team',
  phone: '(647) 300-0315',
  phoneClean: '6473000315',
  phoneFormatted: '647-300-0315',
  email: 'info@studiogta.ca',
  address: '3601 Highway 7 East, Suite 1005, Unit DOB, Markham ON, L3R 0M3',
  addressLines: [
    '3601 Highway 7 East, Suite 1005, Unit DOB,',
    'Markham ON, L3R 0M3'
  ],
  mapUrl: 'https://maps.google.com/?q=3601+Highway+7+East,+Suite+1005,+Unit+DOB,+Markham+ON+L3R+0M3',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.790610363242!2d-79.33644072346743!3d43.84976797109355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4681648a313%3A0x6b7724a275464a4b!2s3601%20Hwy%207%2C%20Markham%2C%20ON%20L3R%200M3!5e0!3m2!1sen!2sca!4v1708300000000!5m2!1sen!2sca',
  serviceArea: 'Southwest Ontario & Greater Toronto Area',
  hours: 'Everyday: 7:00 AM – 7:00 PM',
  instagram: 'https://www.instagram.com/studiogta_realestatemedia',
  turnaround: '12-Hour Turnaround',
  guarantee: '100% Satisfaction Guaranteed (Pay After Approval)'
};

export const ANNOUNCEMENT_BAR = {
  active: true,
  badge: 'NEW CLIENT SPECIAL: 10% OFF',
  text: 'Get 10% off your first photoshoot — use code WELCOME10 at booking',
  ctaText: 'Claim 10% Off',
  ctaLink: '#book'
};

export const TRUST_STATS = [
  {
    number: '12',
    suffix: 'hr',
    label: 'Turnaround Time',
    subtext: 'Next-morning 9 AM delivery'
  },
  {
    number: '500',
    suffix: '+',
    label: '5-Star Reviews',
    subtext: 'Top realtor satisfaction'
  },
  {
    number: '32',
    suffix: '%',
    label: 'Faster Sales',
    subtext: 'Proven listing performance'
  },
  {
    number: '100',
    suffix: '%',
    label: 'Satisfaction Guarantee',
    subtext: 'Pay only after approval'
  }
];

export const SERVICE_AREAS = [
  {
    region: 'Greater Toronto Area (GTA)',
    cities: ['Toronto', 'Markham', 'Richmond Hill', 'Vaughan', 'Mississauga', 'Brampton', 'Oakville', 'Burlington', 'Pickering', 'Ajax'],
    travelFee: 'Free ($0 Travel)'
  },
  {
    region: 'Southwestern Ontario',
    cities: ['London', 'Kitchener-Waterloo', 'Cambridge', 'Guelph', 'Hamilton', 'Brantford', 'Woodstock', 'Windsor'],
    travelFee: 'Free in Core Zone'
  },
  {
    region: 'Eastern & Northern Ontario',
    cities: ['Barrie', 'Oshawa', 'Whitby', 'Peterborough', 'Niagara Region', 'St. Catharines'],
    travelFee: 'Standard Mileage'
  }
];

export const BROKERAGE_LOGOS = [
  { name: 'Royal LePage', sub: 'Signature & Terrequity' },
  { name: 'Century 21', sub: 'Leading Edge & Heritage' },
  { name: 'Coldwell Banker', sub: 'Canada' },
  { name: 'eXp Realty', sub: 'Brokerage' },
  { name: "Sotheby's", sub: 'International Realty' },
  { name: 'Compass', sub: 'Real Estate' },
  { name: 'Right At Home Realty', sub: 'Brokerage' },
  { name: 'HomeLife Realty', sub: 'Services Inc.' },
  { name: 'RE/MAX', sub: 'Realtron & Hallmark' },
  { name: 'Keller Williams', sub: 'Referred Realty' }
];

export const HERO_SLIDES = [
  {
    id: 'commercial',
    title: 'Commercial real estate photography',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    tag: 'FEATURED'
  },
  {
    id: 'photography',
    title: 'Modern architectural interior photography',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tag: 'INTERIOR'
  },
  {
    id: 'staging',
    title: 'Virtually staged luxury open-concept living',
    category: 'Virtual Staging',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    tag: 'STAGING'
  },
  {
    id: 'drone',
    title: 'Transport Canada certified 4K drone cinematography',
    category: 'Drone',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    tag: 'AERIAL'
  },
  {
    id: 'virtual-tour',
    title: '3D Matterport interactive virtual dollhouse walkthrough',
    category: 'Virtual Tour',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop',
    tag: '3D TOUR'
  },
  {
    id: 'floor-plans',
    title: 'Laser-accurate schematic 2D & 3D floor plans',
    category: 'Floor Plans',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    tag: 'SCHEMATIC'
  },
  {
    id: 'airbnb',
    title: 'High-converting Airbnb & boutique rental media',
    category: 'Airbnb',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=1200&auto=format&fit=crop',
    tag: 'HOSPITALITY'
  }
];

export const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Professional HDR Photography Package',
    originalPrice: 199,
    price: 199,
    discountApplied: false,
    sqft: 'Under 1,500 sqft',
    sqftLabel: 'Condos & Apartments',
    duration: '30 mins on-site',
    popular: false,
    badge: 'Essential',
    idealFor: 'Condos, starter homes & quick lease listings',
    features: [
      'Interior & Exterior Photos (Premium Quality)',
      '12-Hour Turnaround',
      'Blue Sky Replacement',
      '2D Floor Plan (Dimensioned)',
      'High-Resolution Print & Web MLS Files',
      'Zero Deposit: Pay After Approval'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    subtitle: 'Complete Media Package with Drone + 4K Video',
    originalPrice: 399,
    price: 359,
    discountApplied: true,
    discountPercent: '10% OFF',
    sqft: '1,500–2,500 sqft',
    sqftLabel: 'Townhomes & Semis',
    duration: '60 mins on-site',
    popular: true,
    badge: 'MOST POPULAR',
    idealFor: 'Detached single-family homes & competitive suburban listings',
    features: [
      '75% of agents choose this',
      'Interior & Exterior Photos (35–40)',
      '4K Cinematic Walkthrough Video',
      'Drone Aerial Photos & 4K Video',
      '2D & 3D Floor Plan with Room Dimensions',
      'Feature Single-Property Website',
      '12-Hour Turnaround Guarantee',
      'Zero Deposit: Pay After Approval'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Premium Package with Virtual Tours + Digital Staging',
    originalPrice: 599,
    price: 539,
    discountApplied: true,
    discountPercent: '10% OFF',
    sqft: '2,500–5,000 sqft',
    sqftLabel: 'Standard & Large Detached',
    duration: '90 mins on-site',
    popular: false,
    badge: 'LUXURY SHOWCASE',
    idealFor: 'Luxury properties, custom builds & waterfront estates',
    features: [
      'Standout luxury marketing package',
      '40–50+ Magazine-Grade HDR Photos',
      'Extended 4K Video with Agent Intro',
      'Full Drone Package (Photos + Video)',
      '3D Matterport Tour (6 Months Hosting)',
      '3 Virtually Staged Rooms',
      'Twilight / Dusk Photography',
      'Dedicated Custom Listing Website',
      'Priority Delivery'
    ]
  },
  {
    id: 'basic-plus',
    name: 'Basic+',
    subtitle: 'HDR Photography + Photo Slideshow Video + Floor Plans',
    originalPrice: 249,
    price: 249,
    discountApplied: false,
    sqft: 'Up to 2,200 sqft',
    sqftLabel: 'Mid-Sized Detached & Semis',
    duration: '45 mins on-site',
    popular: false,
    badge: 'Popular Upgrade',
    idealFor: 'Mid-sized detached homes, townhomes & semi-detached',
    features: [
      'Interior & Exterior Photos (30–35)',
      'Photo Slideshow Video with Licensed Music',
      '2D Floor Plan with Dimensions',
      '12-Hour Turnaround Guarantee',
      'Blue Sky & Green Grass Enhancement',
      'Zero Deposit: Pay After Approval'
    ]
  }
];

export const SERVICES = [
  {
    id: 'photography',
    name: 'HDR Photography',
    tagline: 'Flawlessly Exposed, Magazine-Quality Stills',
    desc: 'Multi-bracketed high dynamic range photography balanced for crisp interior details, vivid window views, and warm authentic ambiance.',
    price: 'From $199',
    features: [
      'Flawless window pull with clear exterior views',
      'True-to-life color accuracy & warm white balance',
      'Free blue sky replacement on overcast days',
      'Fireplace fire insertion & TV screen enhancement',
      'Delivered in MLS-ready (2048px) and print-res (300dpi)'
    ],
    turnaround: '12 Hours'
  },
  {
    id: 'cinematic-video',
    name: 'Cinematic 4K Video Tours',
    tagline: 'Emotional, Flowing Walkthroughs That Captivate',
    desc: 'Filmed on 3-axis stabilized cinema cameras in 4K resolution. Styled with elegant transitions, color grading, and commercial music licensing.',
    price: 'From $199',
    features: [
      'Smooth gimbal walkthrough showing the natural flow',
      'Licensed premium soundtrack included',
      'Horizontal 16:9 4K for MLS, YouTube, and Websites',
      'Vertical 9:16 optimized for Instagram Reels and TikTok',
      'Optional on-camera realtor introduction & voiceover'
    ],
    turnaround: '12–24 Hours'
  },
  {
    id: 'drone',
    name: 'Aerial Drone Media',
    tagline: 'Elevated Perspectives & Neighborhood Context',
    desc: 'Showcase lot size, architectural rooflines, surrounding greenery, proximity to parks, schools, and waterfronts from stunning bird’s-eye views.',
    price: 'From $149',
    features: [
      'Transport Canada Compliant & Insured Drone Pilots',
      'High-altitude 4K aerial video and 20MP stills',
      'Property boundary lot line overlays available',
      'Scenic neighborhood and sunset flyover shots'
    ],
    turnaround: '12 Hours'
  },
  {
    id: 'matterport',
    name: '3D Matterport Virtual Tours',
    tagline: '24/7 Immersive Open House for Remote Buyers',
    desc: 'Give out-of-town buyers and serious investors an interactive 3D dollhouse model and room-by-room virtual walk through the property.',
    price: 'From $199',
    features: [
      'Accurate 3D dollhouse and overhead floor views',
      'Measurement tool for buyers to verify furniture fit',
      '6 months of cloud hosting included',
      'Embeddable in MLS, Realtor.ca, and social media'
    ],
    turnaround: '24 Hours'
  },
  {
    id: 'floor-plans',
    name: 'Laser-Measured Floor Plans',
    tagline: 'Accurate 2D & 3D Schematics with Room Dimensions',
    desc: 'Buyers make purchasing decisions based on layout. Our digital floor plans display exact square footage, room names, and layout flow.',
    price: 'From $99',
    features: [
      'Laser-measured on-site with ±1% accuracy',
      'Total gross internal area (GIA) calculations',
      'Branded and unbranded MLS-compliant versions',
      'Delivered in high-resolution PDF and PNG formats'
    ],
    turnaround: '12 Hours'
  },
  {
    id: 'virtual-staging',
    name: 'Virtual Staging & Twilight',
    tagline: 'Turn Empty Rooms Into Warm, Buyer-Ready Homes',
    desc: 'Help buyers visualize potential without spending thousands on physical staging. We stage vacant living rooms, master suites, and patios digitally.',
    price: '$40 / photo',
    features: [
      'Modern, Scandinavian, or Luxury furnishings',
      'Photorealistic textures, shadows, and lighting match',
      'Virtual twilight conversion from daytime photos',
      'Decluttering & item removal services available'
    ],
    turnaround: '24 Hours'
  }
];

export const ALACARTE_ADDONS = [
  { name: 'Virtual Twilight Conversion', price: '$50', unit: 'per photo', desc: 'Convert daytime exterior to dramatic dusk sunset with glowing interior lights.' },
  { name: 'Real Twilight Photography Shoot', price: '$149', unit: 'on-site', desc: 'On-site golden hour & blue hour photoshoot for breathtaking luxury exteriors.' },
  { name: 'Virtual Staging', price: '$40', unit: 'per room photo', desc: 'Digitally furnish empty rooms with current designer furniture and decor.' },
  { name: '2D Measured Floor Plan (Stand-alone)', price: '$99', unit: 'up to 2,500 sq ft', desc: 'Laser accurate measurements with square footage breakdown.' },
  { name: '3D Matterport Tour (Stand-alone)', price: '$199', unit: 'up to 2,500 sq ft', desc: 'Interactive dollhouse 3D walkthrough with 6 months hosting.' },
  { name: 'Drone Aerial Photography (Stand-alone)', price: '$149', unit: '8–12 photos', desc: 'Transport Canada certified aerial high-res photos.' },
  { name: 'Social Media Reel (Vertical 9:16)', price: '$99', unit: 'per reel', desc: 'Fast-paced, hook-driven vertical video for Instagram Reels and TikTok.' },
  { name: 'Custom Listing Feature Website', price: '$49', unit: 'per listing', desc: 'Dedicated single-property website with custom domain and lead capture form.' }
];

export const GUARANTEES = [
  {
    title: '100% Satisfaction Guarantee',
    desc: 'We are confident you will love your media. If anything does not meet your high standards, we will reshoot or re-edit until you are thrilled.'
  },
  {
    title: 'On-Time Delivery Guarantee',
    desc: 'Your photos will be ready in your inbox within 12 hours (guaranteed by 9:00 AM next morning). If we are ever late, you receive 50% off.'
  },
  {
    title: 'Pay After Approval',
    desc: 'Zero upfront deposit required. We shoot, edit, and send watermarked previews. You only pay once you review and approve the final product.'
  },
  {
    title: 'Unlimited Free Revisions',
    desc: 'Need a sky change, grass greener, exposure adjusted, or a photo re-ordered? We perform adjustments quickly at no additional charge.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Book in 60 Seconds',
    desc: 'Choose your package, pick your preferred shoot date and time, and enter the property address. No deposit required.'
  },
  {
    step: '02',
    title: 'We Capture the Property',
    desc: 'Our certified real estate media specialists arrive on time with cinema cameras, lighting, drones, and laser measurement tools.'
  },
  {
    step: '03',
    title: '12-Hour Professional Editing',
    desc: 'Our in-house editorial team balances exposures, performs sky replacements, color grades video, and builds floor plans overnight.'
  },
  {
    step: '04',
    title: 'Review, Approve & Launch',
    desc: 'Download your high-resolution print files and MLS-optimized photos ready to upload immediately.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'StudioGTA has been a game-changer for my listings. The 12-hour turnaround is real — I shot a luxury detached home at 3 PM and had high-res photos and drone footage ready to upload by 8:30 AM the next day.',
    author: 'David Chen',
    brokerage: 'RE/MAX Realtron Realty Inc.',
    location: 'Markham / Richmond Hill',
    rating: 5
  },
  {
    quote: 'The video quality is cinema-grade. The property sold in 4 days with multiple offers, and the buyers specifically mentioned the video walkthrough in their decision. Pay after approval gives me complete peace of mind.',
    author: 'Sarah Jenkins',
    brokerage: 'Royal LePage Signature Realty',
    location: 'Toronto / GTA',
    rating: 5
  },
  {
    quote: 'I used to struggle with photographers missing deadlines or delivering dark photos. StudioGTA’s HDR photos are vibrant, windows are clear, and customer service is always responsive.',
    author: 'Michael Tremblay',
    brokerage: 'Century 21 Heritage Group',
    location: 'London & Southwestern ON',
    rating: 5
  }
];

export const FAQS = [
  {
    category: 'Booking & Scheduling',
    q: 'How far in advance do I need to book a shoot?',
    a: 'We typically recommend booking 24 to 48 hours in advance. However, we keep dedicated emergency slots open for last-minute same-day shoots.'
  },
  {
    category: 'Booking & Scheduling',
    q: 'What is your cancellation and weather policy?',
    a: 'You can cancel or reschedule free of charge up to 12 hours prior to the appointment. If adverse weather impacts exterior or drone work, we will return for exteriors at no charge or reschedule free of charge.'
  },
  {
    category: 'Turnaround & Delivery',
    q: 'What is your turnaround time?',
    a: 'HDR photography and floor plans are delivered within 12 hours (guaranteed by 9:00 AM the following morning). Cinematic video walkthroughs and 3D Matterport tours are delivered within 12–24 hours.'
  },
  {
    category: 'Pricing & Payment',
    q: 'Do you require a deposit before shooting?',
    a: 'No! Zero upfront deposit required. We capture and edit the media, send you watermarked previews, and you only pay once you review and approve the final product.'
  }
];
