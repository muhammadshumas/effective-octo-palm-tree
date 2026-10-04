export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  demo: boolean;
  images: Record<string, string>;
  features: string[];
};
export const product: Product = {
  id: "star-galaxy",
  name: "Star Galaxy Projector Night Light",
  price: 79,
  currency: "USD",
  demo: true,
  description:
    "A compact projector for relaxing evenings and easier sleep.",
  images: {
    studio: "/images/projector.png",
    hero: "/images/bedroom.png",
    sound: "/images/listening.png",
    galaxy: "/images/nebula.png",
  },
  features: [
    "16 interchangeable projection cards",
    "Adjustable focus & rotating projection",
    "Built-in soothing sounds",
    "Bluetooth audio",
    "Remote control",
    "1, 2, or 4-hour auto-off timer",
    "USB powered",
  ],
};
export const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(value);
export const scenes = [
  "Moon",
  "Solar System",
  "Galaxy",
  "Small Magellanic Cloud",
  "Orion Nebula",
  "Helix Nebula",
  "Crab Nebula",
  "Horsehead Nebula",
  "Saturn",
  "Auroral Sky",
  "Rocket Launch",
  "Interstellar Exploration",
  "Blue Moon",
  "Earth",
  "Dinosaur Ruled Earth",
  "Moonlit Dinosaur",
];
export type SceneArtwork = { name: string; description: string; image: string; alt: string };

export const sceneArtworks: SceneArtwork[] = [
  { name: scenes[0], description: "Silver moonlight and a sky full of stars invite you to slow down.", image: "/images/scenes/moon.webp", alt: "A cratered silver full moon hanging in a deep indigo star field, delicate violet rim light" },
  { name: scenes[1], description: "Take a quiet journey past glowing planets and the warmth of a distant sun.", image: "/images/scenes/solar-system.webp", alt: "An artistic panoramic solar system, glowing sun and varied planets in a graceful depth composition, no diagram or labels" },
  { name: scenes[2], description: "Lose yourself in sweeping spiral arms and a sea of luminous stars.", image: "/images/scenes/galaxy.webp", alt: "A luminous spiral galaxy viewed obliquely, flowing violet arms and cyan star clusters against black space" },
  { name: scenes[3], description: "A soft haze of blue and violet brings a distant star-filled world closer.", image: "/images/scenes/small-magellanic-cloud.webp", alt: "An irregular dwarf galaxy, hazy blue-violet clouds and scattered young star clusters, not a spiral" },
  { name: scenes[4], description: "Drift through luminous clouds of violet and cyan, where stars begin their story.", image: "/images/scenes/orion-nebula.webp", alt: "Orion Nebula inspired luminous violet and cyan gas clouds, bright central stellar nursery and sculpted dark dust" },
  { name: scenes[5], description: "A glowing celestial ring opens a window into the depths of space.", image: "/images/scenes/helix-nebula.webp", alt: "Helix Nebula inspired enormous teal and violet glowing eye-shaped ring surrounding a dark central star field" },
  { name: scenes[6], description: "Electric blue light and delicate cosmic threads create a sky full of wonder.", image: "/images/scenes/crab-nebula.webp", alt: "Crab Nebula inspired intricate filamentary supernova remnant, electric blue core and subtle magenta tendrils" },
  { name: scenes[7], description: "A dark, sculpted silhouette rises against clouds of violet and magenta.", image: "/images/scenes/horsehead-nebula.webp", alt: "Horsehead Nebula inspired dark horse-head dust silhouette against luminous magenta and violet gas" },
  { name: scenes[8], description: "Let graceful rings and soft golden light transport you to Saturn.", image: "/images/scenes/saturn.webp", alt: "Saturn with magnificent tilted rings, softly lit lavender-gold atmosphere suspended in a vast indigo star field" },
  { name: scenes[9], description: "Waves of teal and violet dance above a quiet mountain night.", image: "/images/scenes/auroral-sky.webp", alt: "Sweeping teal and violet aurora curtains over a quiet silhouetted mountain landscape under a star-filled sky" },
  { name: scenes[10], description: "Follow a brilliant trail of light as a rocket reaches for the stars.", image: "/images/scenes/rocket-launch.webp", alt: "A slender rocket ascending from a dark coastal launch site at blue hour, luminous exhaust plume and violet clouds" },
  { name: scenes[11], description: "Journey toward a distant blue world through an endless cosmic landscape.", image: "/images/scenes/interstellar-exploration.webp", alt: "A small elegant exploration spacecraft traveling toward a distant blue planet and vast violet nebula, cinematic scale" },
  { name: scenes[12], description: "A cobalt moon and its gentle reflections set a peaceful evening mood.", image: "/images/scenes/blue-moon.webp", alt: "A large blue-tinted moon rising above calm dark water, cobalt reflections and a delicate violet night sky" },
  { name: scenes[13], description: "See our blue planet from above, wrapped in clouds and a soft atmospheric glow.", image: "/images/scenes/earth.webp", alt: "Earth seen from orbit, blue oceans and detailed white cloud systems, glowing cyan atmospheric rim on the night edge" },
  { name: scenes[14], description: "Step into a misty prehistoric valley, where gentle giants roam at twilight.", image: "/images/scenes/dinosaur-ruled-earth.webp", alt: "Majestic long-necked dinosaurs in a misty prehistoric fern valley at twilight, violet-blue atmosphere and mountains" },
  { name: scenes[15], description: "A silver moon watches over a lone dinosaur in a still, dreamlike landscape.", image: "/images/scenes/moonlit-dinosaur.webp", alt: "A solitary long-necked dinosaur silhouetted on a ridge beneath an enormous silver moon, indigo sky and cool mist" },
];

export const stories = [
  {
    quote: "The kind of little ritual that makes staying in feel special.",
    person: "Sophie M.",
    title: "Staying in feels special!",
    detail: "Homebody & stargazer",
    image: "https://i.pravatar.cc/112?img=47",
  },
  {
    quote: "One room. A completely different world every night.",
    person: "James R.",
    title: "A whole different world!",
    detail: "Space enthusiast",
    image: "https://i.pravatar.cc/112?img=12",
  },
  {
    quote: "Dim the lights, put on a playlist, and let the day slow down.",
    person: "Emma L.",
    title: "My favorite way to unwind!",
    detail: "Music & atmosphere lover",
    image: "https://i.pravatar.cc/112?img=44",
  },
];



