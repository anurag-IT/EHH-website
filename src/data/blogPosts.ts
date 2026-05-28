export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  keywords: string;
  coverImage: string;
}

// All cover images: unique, topic-matched, high-quality Unsplash photos
// URL format: https://images.unsplash.com/photo-{ID}?w=1200&h=630&fit=crop&q=85&auto=format

export const blogPosts: BlogPost[] = [
  // ── Batch 1 ──────────────────────────────────────────────────────────────
  {
    slug: "youth-environmental-movement-nepal",
    title: "Youth Environmental Movements in Nepal: How EHH Nepal is Leading the Charge",
    description: "Discover how Nepal's youth are transforming the environmental landscape. EHH Nepal is uniting students across all 77 districts for climate action, tree plantation, and community service.",
    date: "2024-12-01",
    author: "EHH Nepal Team",
    readTime: "8 min read",
    category: "Movement",
    keywords: "youth environmental movement Nepal, student climate action Nepal, EHH Nepal, environmental activism Nepal youth, climate movement Nepal",
    // Young people with raised fists / youth activists marching together
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "climate-change-nepal-youth-action",
    title: "Climate Change in Nepal: The Crisis and What Young People Are Doing About It",
    description: "Nepal faces severe climate change impacts — melting glaciers, floods, and droughts. Learn how EHH Nepal students are fighting back and what you can do to help.",
    date: "2024-12-10",
    author: "Aayush Jha",
    readTime: "7 min read",
    category: "Climate",
    keywords: "climate change Nepal, climate crisis Nepal youth, glacier melting Nepal, environmental crisis Nepal, youth climate action Nepal",
    // Dramatic melting glacier / Himalayan ice — powerful climate visual
    coverImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "tree-plantation-nepal",
    title: "Tree Plantation in Nepal: Why Every Sapling Planted by EHH Nepal Matters",
    description: "Nepal loses thousands of hectares of forest every year. EHH Nepal's tree plantation mission is restoring green cover across 77 districts. Here's why it matters and how you can help.",
    date: "2025-01-05",
    author: "Sameer Yadav",
    readTime: "6 min read",
    category: "Environment",
    keywords: "tree plantation Nepal, reforestation Nepal, Nepal forest restoration, plant trees Nepal, EHH Nepal trees, deforestation Nepal students",
    // Hands gently planting a green seedling in rich brown soil
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "how-to-join-ehh-nepal",
    title: "How to Join EHH Nepal: A Complete Guide for Students Across Nepal",
    description: "Want to make a difference for Nepal's environment and people? This step-by-step guide shows how to join EHH Nepal — the youth movement spanning all 77 districts of Nepal.",
    date: "2025-01-20",
    author: "Anurag Thakur",
    readTime: "5 min read",
    category: "Guide",
    keywords: "join EHH Nepal, how to join environmental movement Nepal, student volunteer Nepal, environmental NGO Nepal join, youth movement Nepal register",
    // Students joining hands in a circle — teamwork and unity
    coverImage: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "humanitarian-aid-nepal-students",
    title: "Humanitarian Aid in Nepal: How EHH Nepal's Students Are Serving Communities",
    description: "EHH Nepal goes beyond environmental work. Discover how student volunteers across Nepal's 77 districts are delivering humanitarian aid, disaster relief, and community support.",
    date: "2025-02-01",
    author: "EHH Nepal Team",
    readTime: "7 min read",
    category: "Humanitarian",
    keywords: "humanitarian aid Nepal, community service Nepal students, disaster relief Nepal youth, humanitarian work Nepal, EHH Nepal humanitarian",
    // Volunteers distributing food and aid — warm, powerful community image
    coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "environmental-education-nepal-schools",
    title: "Environmental Education in Nepal: Why Schools Must Lead the Green Revolution",
    description: "Environmental education is the foundation of a sustainable Nepal. Learn how EHH Nepal is partnering with schools across all 77 districts to embed sustainability into every classroom.",
    date: "2025-02-15",
    author: "Aayush Jha",
    readTime: "6 min read",
    category: "Education",
    keywords: "environmental education Nepal, green schools Nepal, sustainability education Nepal, eco-friendly schools Nepal, EHH Nepal schools",
    // Happy students outdoors, learning in nature with books
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=630&fit=crop&q=85&auto=format",
  },

  // ── Batch 2 ──────────────────────────────────────────────────────────────
  {
    slug: "deforestation-nepal-causes-effects-solutions",
    title: "Deforestation in Nepal: Causes, Effects, and How Students Are Fighting Back",
    description: "Nepal is losing its forests at an alarming rate. Understand the causes and devastating effects of deforestation in Nepal — and discover the powerful role students and EHH Nepal play in reversing it.",
    date: "2025-03-01",
    author: "Sameer Yadav",
    readTime: "8 min read",
    category: "Environment",
    keywords: "deforestation Nepal, Nepal forest loss, causes of deforestation Nepal, effects of deforestation Nepal, reforestation Nepal students, stop deforestation Nepal",
    // Stark deforested hillside with bare cut tree stumps — emotional impact
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "air-pollution-kathmandu-nepal",
    title: "Air Pollution in Kathmandu: Why Nepal's Youth Must Act Now",
    description: "Kathmandu Valley ranks among Asia's most polluted cities. Explore the root causes of air pollution in Nepal, its health impacts, and how EHH Nepal's student movement is demanding cleaner air.",
    date: "2025-03-10",
    author: "Anurag Thakur",
    readTime: "7 min read",
    category: "Climate",
    keywords: "air pollution Kathmandu Nepal, Kathmandu air quality, Nepal air pollution causes, air pollution health Nepal, clean air Nepal youth, pollution Nepal",
    // Dense industrial smog over a city — thick brown/grey haze, visible pollution
    coverImage: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "water-pollution-nepal-rivers",
    title: "Water Pollution in Nepal: Protecting Our Rivers Before It's Too Late",
    description: "Nepal's rivers — sacred, life-giving, and rapidly polluted. Discover the state of water pollution across Nepal, what's causing it, and how EHH Nepal students are working to restore clean waterways.",
    date: "2025-03-20",
    author: "EHH Nepal Team",
    readTime: "7 min read",
    category: "Environment",
    keywords: "water pollution Nepal, river pollution Nepal, Bagmati river pollution, clean water Nepal, water conservation Nepal, Nepal river cleanup students",
    // Heavily polluted dark river with plastic and waste floating — stark reality
    coverImage: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "plastic-pollution-nepal-solutions",
    title: "Plastic Pollution in Nepal: How to Eliminate Single-Use Plastic from Our Communities",
    description: "Plastic waste is choking Nepal's rivers, mountains, and cities. Learn the scale of the problem and the practical steps EHH Nepal students across 77 districts are taking to build a plastic-free Nepal.",
    date: "2025-04-01",
    author: "Aayush Jha",
    readTime: "6 min read",
    category: "Environment",
    keywords: "plastic pollution Nepal, single use plastic Nepal, plastic free Nepal, plastic waste Nepal rivers, plastic ban Nepal, reduce plastic Nepal students",
    // Massive pile of colourful plastic bottles and single-use plastic waste
    coverImage: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "biodiversity-nepal-wildlife-conservation",
    title: "Biodiversity in Nepal: The Extraordinary Wildlife We Must Protect",
    description: "Nepal hosts tigers, rhinos, snow leopards, and over 900 bird species — but they're under threat. Discover Nepal's incredible biodiversity and how EHH Nepal youth are joining the conservation effort.",
    date: "2025-04-10",
    author: "Sameer Yadav",
    readTime: "8 min read",
    category: "Environment",
    keywords: "biodiversity Nepal, wildlife conservation Nepal, endangered species Nepal, Nepal national parks, snow leopard Nepal, one horned rhino Nepal, Bengal tiger Nepal",
    // Magnificent Bengal tiger staring directly into camera — powerful, stunning
    coverImage: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "sustainable-living-nepal-students",
    title: "Sustainable Living in Nepal: 15 Simple Changes Every Student Can Make Today",
    description: "You don't need money or power to live sustainably. This practical guide gives Nepali students 15 actionable changes they can make right now to reduce their environmental footprint.",
    date: "2025-04-20",
    author: "Anurag Thakur",
    readTime: "6 min read",
    category: "Guide",
    keywords: "sustainable living Nepal, eco-friendly Nepal students, green lifestyle Nepal, sustainability tips Nepal, reduce carbon footprint Nepal, zero waste Nepal",
    // Bright eco-friendly market with fresh produce, cloth bags, zero waste lifestyle
    coverImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "climate-change-agriculture-nepal",
    title: "Climate Change and Agriculture in Nepal: What Farmers Are Facing and How Youth Can Help",
    description: "Over 40% of Nepalis depend on farming, yet climate change is destroying harvests. This article breaks down the crisis and explains how EHH Nepal supports agricultural communities across all 77 districts.",
    date: "2025-05-01",
    author: "Aayush Jha",
    readTime: "8 min read",
    category: "Climate",
    keywords: "climate change agriculture Nepal, Nepal farming climate change, crop failure Nepal, food security Nepal, climate resilient farming Nepal, agriculture youth Nepal",
    // Farmer working in lush green terraced rice paddies — iconic Nepal farming scene
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "start-environmental-club-school-nepal",
    title: "How to Start an Environmental Club in Your School in Nepal: A Step-by-Step Guide",
    description: "Want to bring green change to your school? This complete guide shows Nepali students exactly how to start an environmental club, what activities to run, and how EHH Nepal can support you.",
    date: "2025-05-10",
    author: "EHH Nepal Team",
    readTime: "7 min read",
    category: "Guide",
    keywords: "environmental club school Nepal, eco club Nepal, green school initiative Nepal, school environment club Nepal, student environmental group Nepal, EHH Nepal school chapter",
    // Energetic students outdoors celebrating together with raised arms — positive, motivating
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "nepal-national-parks-conservation",
    title: "Nepal's National Parks and Conservation Areas: Why Youth Must Protect Them",
    description: "Nepal's national parks are world-famous — but deforestation, poaching, and climate change threaten them daily. Discover Nepal's most important protected areas and how young people are defending them.",
    date: "2025-05-15",
    author: "Sameer Yadav",
    readTime: "8 min read",
    category: "Environment",
    keywords: "Nepal national parks, conservation areas Nepal, Chitwan national park, Sagarmatha national park, Bardia national park, wildlife Nepal, conservation youth Nepal",
    // Snow-capped Himalayan mountain range with vast green valley — Nepal at its most majestic
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "disaster-preparedness-nepal-youth",
    title: "Disaster Preparedness in Nepal: How Youth Can Build Resilient Communities",
    description: "Nepal faces earthquakes, floods, and landslides every year. Learn how EHH Nepal trains students in disaster preparedness and community resilience — protecting lives before disaster strikes.",
    date: "2025-05-20",
    author: "Anurag Thakur",
    readTime: "7 min read",
    category: "Humanitarian",
    keywords: "disaster preparedness Nepal, earthquake preparedness Nepal, flood preparedness Nepal, community resilience Nepal youth, disaster relief Nepal students, EHH Nepal disaster",
    // Rescue workers in orange jackets helping flood-affected people — emotional and real
    coverImage: "https://images.unsplash.com/photo-1583349136229-3e3c3f51e1b9?w=1200&h=630&fit=crop&q=85&auto=format",
  },
  {
    slug: "renewable-energy-nepal-youth-advocacy",
    title: "Renewable Energy in Nepal: How Students Can Advocate for a Green Power Future",
    description: "Nepal has enormous potential for solar, wind, and hydropower — yet millions still lack clean energy. Discover Nepal's renewable energy landscape and how EHH Nepal youth are advocating for a greener future.",
    date: "2025-05-23",
    author: "Aayush Jha",
    readTime: "7 min read",
    category: "Climate",
    keywords: "renewable energy Nepal, solar energy Nepal, hydropower Nepal, green energy Nepal youth, clean energy Nepal, sustainable energy Nepal, energy Nepal students",
    // Wide field of gleaming solar panels under bright blue sky — clean, hopeful, powerful
    coverImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop&q=85&auto=format",
  },
];
