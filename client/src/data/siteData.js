// StudioGTA - Real Estate Media Source of Truth

export const COMPANY = {
  name: 'StudioGTA',
  tagline: 'Premium Real Estate Photography & Media Ontario',
  founder: 'StudioGTA Production Team',
  phone: '(647) 300-0315',
  phoneClean: '6473000315',
  phoneFormatted: '647-300-0315',
  email: 'TOUR@STUDIOGTA.CA',
  emailClean: 'tour@studiogta.ca',
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
  guarantee: '100% Satisfaction Guaranteed (Pay After Approval)',
  pricingFootnote: 'Quote is for less than 3000 sq ft, every extra 1000 sq ft + CAD 25, Prices are subject to tax.'
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
  }
];

export const PACKAGES = [
  {
    id: 'basic-photo',
    name: 'Basic Photo Package',
    subtitle: 'High Resolution Still Images & Complete Web Marketing Kit',
    price: 185,
    currency: 'CAD',
    sqft: 'Under 3,000 sq ft',
    sqftLabel: 'Condos, Townhomes & Detached',
    duration: '30–45 mins on-site',
    popular: false,
    badge: 'Essential',
    idealFor: 'Condos, starter homes & quick MLS listings',
    features: [
      'High Resolution Still Images',
      'Unbranded & Branded Webpage',
      'Marketing Kit + Local Map',
      'Photos are ready to upload to MLS',
      'Facebook, Twitter & WeChat Sharing'
    ]
  },
  {
    id: 'premium-photo',
    name: 'Premium Photo Package',
    subtitle: 'Magazine Style Editing + HDR & Flash Photography',
    price: 265,
    currency: 'CAD',
    sqft: 'Under 3,000 sq ft',
    sqftLabel: 'High-End Detached & Custom Homes',
    duration: '45–60 mins on-site',
    popular: false,
    badge: 'Magazine Quality',
    idealFor: 'Luxury listings requiring editorial-grade lighting & polish',
    features: [
      'Everything from Regular Photo Package Included',
      'Magazine Style Editing + HDR & Flash'
    ]
  },
  {
    id: 'photo-regular-video',
    name: 'Photo & Regular Video Package',
    subtitle: 'High Resolution Still Images + HD Video Tour & Marketing Kit',
    price: 280,
    currency: 'CAD',
    sqft: 'Under 3,000 sq ft',
    sqftLabel: 'Single-Family Homes & Townhomes',
    duration: '60–75 mins on-site',
    popular: true,
    badge: 'MOST POPULAR',
    idealFor: 'Top realtors wanting complete photo + video marketing',
    features: [
      'High Resolution Still Images',
      'HD Video Tour',
      'Unbranded & Branded Webpage',
      'Marketing Kit + Local Map',
      'Photos are ready to upload to MLS',
      'Facebook, Twitter & WeChat Sharing'
    ]
  },
  {
    id: 'photo-premium-walkthrough',
    name: 'Photo & Premium Walkthrough Video Package',
    subtitle: 'Everything from Regular Video + Upgraded Gimbal Walkthrough',
    price: 420,
    currency: 'CAD',
    sqft: 'Under 3,000 sq ft',
    sqftLabel: 'Luxury Homes & Large Estates',
    duration: '90 mins on-site',
    popular: false,
    badge: 'PREMIUM SHOWCASE',
    idealFor: 'Luxury properties and custom showcase homes',
    features: [
      'Everything from Regular Video Package Included',
      'Upgraded Walkthrough Video with Gimbal',
      'Custom Music Selection'
    ]
  }
];

export const SERVICES = [
  {
    id: 'photography',
    name: 'HDR Photography',
    tagline: 'Flawlessly Exposed, Magazine-Quality Stills',
    desc: 'Multi-bracketed high dynamic range photography balanced for crisp interior details, vivid window views, and warm authentic ambiance.',
    price: 'From CAD 185',
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
    name: 'Cinematic Video Tours',
    tagline: 'Emotional, Flowing Walkthroughs That Captivate',
    desc: 'Filmed on 3-axis stabilized cinema cameras in HD and 4K resolution. Styled with elegant transitions, color grading, and commercial music licensing.',
    price: 'From CAD 280',
    features: [
      'Smooth gimbal walkthrough showing the natural flow',
      'Licensed premium soundtrack included',
      'Horizontal 16:9 for MLS, YouTube, and Websites',
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
    price: 'From CAD 200',
    features: [
      'Transport Canada Compliant & Insured Drone Pilots',
      'High-altitude aerial video and high-resolution stills',
      'Property boundary lot line overlays available',
      'Scenic neighborhood and sunset flyover shots'
    ],
    turnaround: '12 Hours'
  },
  {
    id: 'matterport',
    name: '3D Matterport & 2D Floor Plans',
    tagline: '24/7 Immersive Open House for Remote Buyers',
    desc: 'Give out-of-town buyers and serious investors an interactive 3D dollhouse model and room-by-room virtual walk through the property.',
    price: 'From CAD 200',
    features: [
      'Accurate 3D dollhouse and overhead floor views',
      'Measurement tool for buyers to verify furniture fit',
      '6 months of cloud hosting included',
      'Embeddable in MLS, Realtor.ca, and social media'
    ],
    turnaround: '24 Hours'
  },
  {
    id: 'twilight',
    name: 'Twilight Exterior Photography',
    tagline: 'Dramatic Blue Hour & Sunset Exterior Showcase',
    desc: 'Capture the architectural drama, landscape lighting, and warm welcoming interior glows of luxury properties at sunset.',
    price: 'CAD 150',
    features: [
      '2–3 Evening Exterior Photography high-res stills',
      'Golden hour and blue hour transition shots',
      'Warm window glow and exterior accent lighting',
      'Perfect for hero listing and cover photos'
    ],
    turnaround: '12 Hours'
  },
  {
    id: 'feature-sheets',
    name: 'Feature Sheets & Custom Design',
    tagline: 'Premium Printed Presentation Materials',
    desc: 'High-quality tangible print collateral that buyers take home from open houses and showings to keep your listing top of mind.',
    price: 'From CAD 25',
    features: [
      '25 copies 4 pages (CAD 80) or 50 copies 2 pages (CAD 80)',
      'Custom graphic layout & professional design (CAD 25)',
      'Heavy premium cardstock with vivid color fidelity',
      'Fast turnaround delivered ready for open house'
    ],
    turnaround: '24 Hours'
  }
];

export const ALACARTE_ADDONS = [
  {
    name: '3D Matterport & 2D Floor Plan (<1,000 sq ft Condo)',
    price: 'CAD 200',
    unit: '<1,000 sq ft (Condo)',
    desc: 'Interactive 3D Matterport walkthrough and laser-accurate 2D schematic floor plan.'
  },
  {
    name: '3D Matterport & 2D Floor Plan (Up to 3,000 sq ft)',
    price: 'CAD 270',
    unit: 'up to 3,000 sq ft',
    desc: 'Interactive 3D virtual tour and dimensioned 2D floor plan for standard homes.'
  },
  {
    name: '3D Matterport & 2D Floor Plan (Up to 4,000 sq ft)',
    price: 'CAD 350',
    unit: 'up to 4,000 sq ft',
    desc: 'Comprehensive 3D walkthrough and detailed 2D floor plan for large homes.'
  },
  {
    name: '3D Matterport & 2D Floor Plan (Up to 5,000 sq ft)',
    price: 'CAD 400',
    unit: 'up to 5,000 sq ft',
    desc: 'Full estate 3D Matterport virtual model and complete laser-measured floor plans.'
  },
  {
    name: '3D Matterport & 2D Floor Plan (Up to 6,000 sq ft)',
    price: 'CAD 450',
    unit: 'up to 6,000 sq ft',
    desc: 'Luxury estate 3D Matterport dollhouse tour and precision 2D floor plans.'
  },
  {
    name: 'Aerial Drone Photography (4 Stills)',
    price: 'CAD 200',
    unit: '4 high-res stills',
    desc: '4 High Resolution Still Images captured by Transport Canada certified drone pilots.'
  },
  {
    name: 'Aerial Drone Photo & HD Video',
    price: 'CAD 250',
    unit: '4 stills + HD video',
    desc: '4 High Res Photo & HD Video aerial cinematography showing lot and neighborhood context.'
  },
  {
    name: 'Twilight Exterior Photography',
    price: 'CAD 150',
    unit: '2–3 evening stills',
    desc: '2–3 Evening Exterior Photography stills captured during sunset blue hour.'
  },
  {
    name: 'Feature Sheets (25 Copies - 4 Pages)',
    price: 'CAD 80',
    unit: '25 copies (4 pages)',
    desc: '25 copies 4 pages premium heavy cardstock printed listing brochures.'
  },
  {
    name: 'Feature Sheets (50 Copies - 2 Pages)',
    price: 'CAD 80',
    unit: '50 copies (2 pages)',
    desc: '50 copies 2 pages double-sided glossy presentation sheets.'
  },
  {
    name: 'Feature Sheets Design',
    price: 'CAD 25',
    unit: 'per listing design',
    desc: 'Custom professional graphic design and layout formatting for feature sheets.'
  }
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
