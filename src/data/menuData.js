export const restaurantInfo = {
  name: 'Kolhapur Spice House',
  marathiSubtitle: 'कोल्हापूर स्पाईस हाऊस • अस्सल शाही पाहुणचार',
  tagline: 'Authentic Kolhapuri Flavours, Served with Passion',
  established: 'Est. 1998 • Royal Culinary Heritage',
  address: 'Plot 14, Royal Heritage Arcade, Near Rankala Lake Promenade, Tarabai Park, Kolhapur, Maharashtra 416003 (Sample Demo Address)',
  phoneDisplay: '+91 98765 00000 (Demo)',
  phoneRaw: '919876500000',
  email: 'reservations@kolhapurspicehouse.demo',
  hours: {
    lunch: '12:00 PM – 03:30 PM (Daily)',
    dinner: '07:00 PM – 11:00 PM (Mon – Sun)',
    note: 'Freshly stone-pounded Kanda Lasun Masala prepared at dawn & dusk.',
  },
};

export const menuCategories = ['All', 'Veg', 'Non-Veg', 'Specialities'];

export const menuItems = [
  {
    id: 'mutton-thali',
    name: 'Shahi Kolhapuri Mutton Thali',
    shortName: 'Mutton Thali',
    category: 'Non-Veg',
    isSpeciality: true,
    price: 680,
    spiceLevel: 'Fiery Authentic',
    prepTime: '25 mins',
    badge: "Royal Signature",
    image: '/images/hero-thali.png',
    description:
      'Our crown jewel served on a hammered kansya thali: slow-braised Sukka Mutton roasted in dark coconut-poppy masala, unlimited fiery Tambda Rassa & velvety Pandhra Rassa, Mutton Kheema wati, hand-patted Jowar Bhakri, fragrant Indrayani steamed rice, and chilled Kokum Solkadhi.',
    pairings: ['Unlimited Rassa Refills', 'Indrayani Rice', '2 Jowar Bhakris'],
  },
  {
    id: 'kolhapuri-chicken',
    name: 'Gavran Kolhapuri Chicken Sukka',
    shortName: 'Kolhapuri Chicken',
    category: 'Non-Veg',
    isSpeciality: true,
    price: 440,
    spiceLevel: 'High Heat',
    prepTime: '20 mins',
    badge: 'Best Seller',
    image: '/images/kolhapuri-chicken.png',
    description:
      'Succulent cuts of country chicken pan-roasted in iron kadhais with sun-dried Lavangi red chillies, stone-crushed dagad phool (black stone flower), toasted sesame, and deeply browned dry copra.',
    pairings: ['Pairs with Tandul Bhakri', 'Fresh Onion-Lemon Kachumber'],
  },
  {
    id: 'tambda-rassa',
    name: 'Authentic Tambda Rassa',
    shortName: 'Tambda Rassa',
    category: 'Non-Veg',
    isSpeciality: true,
    price: 260,
    spiceLevel: 'Fiery Bold',
    prepTime: '15 mins',
    badge: 'Heritage Broth',
    image: '/images/tambda-rassa.png',
    description:
      'The legendary crimson soul of Kolhapur. A deeply aromatic slow-simmered mutton bone broth tempered with heirloom Kolhapuri Lavangi mirchi, garlic, coriander seeds, and warm clarified ghee.',
    pairings: ['Crushed Bhakri Kala', 'Steamed Indrayani Rice'],
  },
  {
    id: 'pandhra-rassa',
    name: 'Royal Pandhra Rassa',
    shortName: 'Pandhra Rassa',
    category: 'Non-Veg',
    isSpeciality: true,
    price: 270,
    spiceLevel: 'Mild Aromatic',
    prepTime: '15 mins',
    badge: 'Palace Recipe',
    image: '/images/pandhra-rassa.png',
    description:
      'Velvety ivory broth crafted from first-press coconut milk, soaked cashews, white sesame, and poppy seeds, delicately perfumed with whole black peppercorns, green cardamom, cloves, and cinnamon.',
    pairings: ['Balances Tambda Rassa', 'Soothing Finish'],
  },
  {
    id: 'veg-kolhapuri',
    name: 'Subz-E-Kolhapuri Handi',
    shortName: 'Veg Kolhapuri',
    category: 'Veg',
    isSpeciality: false,
    price: 340,
    spiceLevel: 'Medium Spicy',
    prepTime: '18 mins',
    badge: 'Farm Fresh',
    image: '/images/veg-kolhapuri.png',
    description:
      'Char-roasted florets of cauliflower, malai paneer cubes, baby potatoes, and French beans simmered in a rich, smoky gravy of roasted dry coconut, red chillies, and toasted sesame seeds.',
    pairings: ['Butter Garlic Naan', 'Jowar Bhakri'],
  },
  {
    id: 'misal-pav',
    name: 'Khasbag Kat Misal Pav',
    shortName: 'Misal Pav',
    category: 'Veg',
    isSpeciality: true,
    price: 210,
    spiceLevel: 'Fiery Tangy',
    prepTime: '12 mins',
    badge: 'Kolhapur Icon',
    image: '/images/misal-pav.png',
    description:
      'Spiced sprouted moth beans (matki usal) layered with potato bhaji, crunchy Kolhapuri shev-chivda farsan, and ladled with steaming red tarri (kat), served alongside butter-toasted ladi pav.',
    pairings: ['Extra Tarri Kat Wati', 'Curd & Finely Chopped Onions'],
  },
  {
    id: 'bhakri',
    name: 'Chulha Hand-Patted Jowar Bhakri',
    shortName: 'Bhakri',
    category: 'Veg',
    isSpeciality: false,
    price: 85,
    spiceLevel: 'Mild Earthy',
    prepTime: '10 mins',
    badge: 'Artisanal Bread',
    image: '/images/jowar-bhakri.png',
    description:
      'Gluten-free sorghum millet flatbread rhythmically hand-patted by master artisans and puffed over an open clay-tawa flame, crowned with a generous dollop of freshly churned white loni (butter).',
    pairings: ['Served with Mirchi Thecha', 'Homemade White Butter'],
  },
  {
    id: 'solkadhi',
    name: 'Konkan-Kolhapur Kokum Solkadhi',
    shortName: 'Solkadhi',
    category: 'Veg',
    isSpeciality: false,
    price: 130,
    spiceLevel: 'Cooling Digestive',
    prepTime: '5 mins',
    badge: 'Palate Cleanser',
    image: '/images/solkadhi.png',
    description:
      'Chilled rose-hued elixir blending sun-dried Ratnagiri kokum petals with velvety fresh coconut milk, infused with crushed garlic, roasted cumin, green chilli, and fresh cilantro leaves.',
    pairings: ['Essential Post-Thali Cooler', 'Brass Tumbler Service'],
  },
];

export const specialOffers = [
  {
    id: 'maharaja-feast',
    tag: "Chef's Royal Table",
    title: 'The Grand Chhatrapati Feast for Two',
    subtitle: 'Available Friday – Sunday Evenings',
    originalPrice: 1580,
    offerPrice: 1299,
    savings: 'Save ₹281',
    image: '/images/hero-thali.png',
    description:
      'An unforgettable culinary journey featuring 2 Shahi Mutton Thalis, a starter platter of Gavran Chicken Sukka, unlimited Tambda & Pandhra Rassa served from warm brass samovars, 2 Kokum Solkadhis, and warm Kharvas dessert.',
    highlights: [
      'Unlimited Tambda & Pandhra Rassa table service',
      'Fresh stone-ground Kanda-Lasun Masala tasting',
      'Complimentary welcome Kokum Sherbet & Kharvas',
    ],
  },
  {
    id: 'weekday-royal-lunch',
    tag: 'Signature Lunch Experience',
    title: 'Heritage Wada Pangat Thali',
    subtitle: 'Monday – Thursday • 12:00 PM to 3:30 PM',
    originalPrice: 520,
    offerPrice: 425,
    savings: '20% Privilege',
    image: '/images/tambda-rassa.png',
    description:
      'Curated for connoisseurs seeking an authentic midday feast. Choose between our Gavran Chicken Thali or Subz-E-Kolhapuri Royal Veg Thali with hot Jowar Bhakris, Indrayani rice, and chilled Solkadhi.',
    highlights: [
      'Choice of Veg or Non-Veg Heritage Thali',
      'Hand-patted Jowar or Bajra Bhakri straight off the tawa',
      'Includes Solkadhi & Roasted Papad Churi',
    ],
  },
  {
    id: 'spice-box-takeaway',
    tag: 'Culinary Souvenir Offer',
    title: 'Dine & Take Home Heirloom Kanda-Lasun Masala',
    subtitle: 'Complimentary 150g Jar on Tables of 4+',
    originalPrice: 350,
    offerPrice: 0,
    savings: 'Complimentary Gift',
    image: '/images/about-spices.png',
    description:
      'Reserve a table for four or more guests and receive a sealed glass apothecary jar of our signature stone-pounded Kolhapuri Kanda-Lasun Masala crafted from GI-tagged Lavangi chillies.',
    highlights: [
      'Pounded in traditional black stone khalbhatta',
      'Sun-dried spices with zero artificial colors',
      'Includes Chef Deshmukh’s secret home recipe card',
    ],
  },
];

export const galleryImages = [
  {
    id: 'gal-1',
    src: '/images/hero-thali.png',
    title: 'Shahi Kansya Mutton Thali',
    category: 'Royal Platter',
    caption: 'Served on hand-hammered brassware with Sukka Mutton, Tambda Rassa, Pandhra Rassa, and Jowar Bhakri.',
  },
  {
    id: 'gal-2',
    src: '/images/dining-ambiance.png',
    title: 'The Royal Wada Dining Hall',
    category: 'Ambiance',
    caption: 'Carved dark teakwood arches, warm brass lanterns, and intimate candlelight inspired by Kolhapur palaces.',
  },
  {
    id: 'gal-3',
    src: '/images/tambda-rassa.png',
    title: 'Fiery Tambda Rassa',
    category: 'Signature Broth',
    caption: 'Slow-simmered crimson broth infused with heirloom Lavangi chillies and cold-pressed sesame oil.',
  },
  {
    id: 'gal-4',
    src: '/images/about-spices.png',
    title: 'Khalbhatta Stone-Pounded Spices',
    category: 'Craftsmanship',
    caption: 'Every batch of Kanda-Lasun Masala is pounded by hand to preserve essential spice oils.',
  },
  {
    id: 'gal-5',
    src: '/images/pandhra-rassa.png',
    title: 'Velvety Pandhra Rassa',
    category: 'Palace Recipe',
    caption: 'Silky coconut milk and cashew broth delicately spiced with whole black pepper and green cardamom.',
  },
  {
    id: 'gal-6',
    src: '/images/kolhapuri-chicken.png',
    title: 'Gavran Chicken Sukka',
    category: 'Culinary Fire',
    caption: 'Roasted with grated dry coconut, poppy seeds, and aromatic black stone flower (dagad phool).',
  },
  {
    id: 'gal-7',
    src: '/images/misal-pav.png',
    title: 'Khasbag Tarri Misal Pav',
    category: 'Heritage Street Classic',
    caption: 'Sprouted matki usal crowned with crunchy farsan and our signature fiery kat.',
  },
  {
    id: 'gal-8',
    src: '/images/solkadhi.png',
    title: 'Chilled Kokum Solkadhi',
    category: 'Artisanal Beverage',
    caption: 'Refreshing digestive crafted from Ratnagiri kokum and fresh coconut milk in brass tumblers.',
  },
];

// Clearly identified fictional sample testimonials for portfolio demonstration
export const sampleTestimonials = [
  {
    id: 'rev-1',
    name: 'VikramadityaPatil (Sample Guest)',
    role: 'Culinary Historian & Food Critic • Pune',
    rating: 5,
    dishOrdered: 'Shahi Kolhapuri Mutton Thali',
    date: 'Sample Review • Portfolio Demo',
    quote:
      'Finding a Tambda Rassa that balances fiery Lavangi heat with deep, aromatic bone-broth richness without drowning in oil is rare. The stone-pounded masala aroma and the soothing Pandhra Rassa here feel straight out of an old Kolhapuri royal wada.',
  },
  {
    id: 'rev-2',
    name: 'Dr. Ananya Kulkarni (Sample Guest)',
    role: 'Architect & Interior Designer • Kolhapur',
    rating: 5,
    dishOrdered: 'Subz-E-Kolhapuri & Jowar Bhakri',
    date: 'Sample Review • Portfolio Demo',
    quote:
      'Finally, an upscale fine-dining destination in Kolhapur where you can host out-of-town guests in luxury while serving 100% authentic local flavours. The warm brass lighting, impeccable service, and hot chulha Jowar Bhakris are unmatched.',
  },
  {
    id: 'rev-3',
    name: 'Rohan & Meera Deshmukh (Sample Guests)',
    role: 'Anniversary Dinner Guests • Mumbai',
    rating: 5,
    dishOrdered: 'The Grand Chhatrapati Feast for Two',
    date: 'Sample Review • Portfolio Demo',
    quote:
      'We drove down along NH48 specifically for an authentic Kolhapuri feast. From the welcome Kokum Solkadhi in brass tumblers to the Gavran Chicken Sukka, every dish was plated like art while keeping its bold, unapologetic spice soul.',
  },
];
