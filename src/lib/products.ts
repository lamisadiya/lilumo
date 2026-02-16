// lib/products.ts
export const products = [
  {image: '/images/products/EcoAuraOrganicTop.webp',
    slug: 'eco-aura-organic-top',
    name: 'Eco Aura Organic Top',
    price: '$35.00',
    originalPrice: undefined,
    stars: 5,
    isNew: true,
    description: 'Soft, breathable organic cotton top with subtle aura-inspired embroidery. Perfect base layer for transitional weather in Dhaka’s mild spring.',
    material: '100% GOTS-certified Organic Cotton',
    care: 'Machine wash cold, lay flat to dry',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Off-White', 'Sage'],
    mainImage: '/images/products/EcoAuraOrganicTop.webp',
    images: [
      '/images/products/EcoAuraOrganicTop.webp',
      '/images/products/EcoAuraOrganicTop1.webp',
      '/images/products/EcoAuraOrganicTop2.webp',
      '/images/products/EcoAuraOrganicTop3.webp',
    ],
  },
  
  {image: '/images/products/CarrotPantswithPockets.webp',
    slug: 'carrot-pants-pockets',
    name: 'Carrot Pants with Pockets',
    price: '$55.00',
    originalPrice: undefined,
    stars: 4,
    isNew: false,
    description: 'Relaxed carrot-leg silhouette in breathable twill with deep utility pockets. Timeless everyday essential.',
    material: 'Organic Cotton Blend',
    care: 'Machine wash cold, tumble dry low',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Olive', 'Charcoal'],
    mainImage: '/images/products/CarrotPantswithPockets.webp',
    images: [
      '/images/products/CarrotPantswithPockets1.webp',
      '/images/products/CarrotPantswithPockets2.webp',
      '/images/products/CarrotPantswithPockets3.webp',
    ],
  },
 
];
export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
export const hisproducts = [
  {
    image: '/images/products/RelaxedBasicDenimJacket.jpg',
    slug: 'relaxed-basic-denim-jacket',
    name: 'Relaxed Basic Denim Jacket',
    price: '$60.00',
    originalPrice: undefined,
    stars: 5,
    isNew: false,
    description:
      'A relaxed-fit denim jacket designed for effortless layering. Clean lines with a timeless streetwear appeal.',
    material: '100% Cotton Denim',
    care: 'Machine wash cold, do not bleach, hang to dry',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Indigo Blue', 'Light Wash'],
    mainImage: '/images/products/RelaxedBasicDenimJacket.jpg',
    images: [
      '/images/products/RelaxedBasicDenimJacket1.jpg',
      '/images/products/RelaxedBasicDenimJacket2.jpg',
      '/images/products/RelaxedBasicDenimJacket3.jpg',
    ],
  },

  {
    image: '/images/products/BlackWashedDenimJacket.webp',
    slug: 'black-washed-denim-jacket',
    name: 'Black Washed Denim Jacket',
    price: '$70.00',
    originalPrice: undefined,
    stars: 5,
    isNew: false,
    description:
      'Vintage-inspired black washed denim jacket with a rugged finish. Perfect for bold, modern looks.',
    material: 'Premium Cotton Denim',
    care: 'Machine wash cold, wash inside out',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black Wash'],
    mainImage: '/images/products/BlackWashedDenimJacket.webp',
    images: [
      '/images/products/BlackWashedDenimJacket1.webp',
      '/images/products/BlackWashedDenimJacket2.webp',
      '/images/products/BlackWashedDenimJacket3.webp',
    ],
  },

  {
    image: '/images/products/MinimalSloganTShirt.webp',
    slug: 'minimal-slogan-t-shirt',
    name: 'Minimal Slogan T-Shirt',
    price: '$25.00',
    originalPrice: undefined,
    stars: 4,
    isNew: true,
    description:
      'Soft everyday tee featuring a subtle minimalist slogan. Designed for comfort and clean aesthetics.',
    material: 'Organic Cotton Jersey',
    care: 'Machine wash cold, tumble dry low',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Beige'],
    mainImage: '/images/products/MinimalSloganTShirt.webp',
    images: [
      '/images/products/MinimalSloganTShirt1.webp',
      '/images/products/MinimalSloganTShirt2.webp',
      '/images/products/MinimalSloganTShirt3.webp',
    ],
  },

  {
    image: '/images/products/BlendedWoolSweatshirt.webp',
    slug: 'blended-wool-sweatshirt',
    name: 'Blended Wool Sweatshirt',
    price: '$50.00',
    originalPrice: undefined,
    stars: 5,
    isNew: false,
    description:
      'A cozy blended wool sweatshirt that balances warmth and breathability. Ideal for cooler days.',
    material: 'Wool Blend',
    care: 'Hand wash cold or gentle cycle',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Charcoal'],
    mainImage: '/images/products/BlendedWoolSweatshirt.webp',
    images: [
      '/images/products/BlendedWoolSweatshirt1.webp',
      '/images/products/BlendedWoolSweatshirt2.webp',
      '/images/products/BlendedWoolSweatshirt3.webp',
    ],
  },

  {
    image: '/images/products/BlackBomberJacket.webp',
    slug: 'black-bomber-jacket',
    name: 'Black Bomber Jacket',
    price: '$90.00',
    originalPrice: '$110.00',
    stars: 5,
    isNew: false,
    description:
      'Classic black bomber jacket with a sleek silhouette and premium finishing. A modern wardrobe essential.',
    material: 'Polyester with Quilted Lining',
    care: 'Dry clean recommended',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    mainImage: '/images/products/BlackBomberJacket.webp',
    images: [
      '/images/products/BlackBomberJacket1.webp',
      '/images/products/BlackBomberJacket2.webp',
      '/images/products/BlackBomberJacket3.webp',
    ],
  },

  {
    image: '/images/products/LightweightTransitionalBomber.jpg',
    slug: 'lightweight-transitional-bomber',
    name: 'Lightweight Transitional Bomber',
    price: '$80.00',
    originalPrice: undefined,
    stars: 5,
    isNew: true,
    description:
      'Lightweight bomber jacket designed for transitional weather. Clean, versatile, and easy to style.',
    material: 'Nylon Blend',
    care: 'Machine wash cold, hang to dry',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Navy'],
    mainImage: '/images/products/LightweightTransitionalBomber.jpg',
    images: [
      '/images/products/LightweightTransitionalBomber1.jpg',
      '/images/products/LightweightTransitionalBomber2.jpg',
      '/images/products/LightweightTransitionalBomber3.jpg',
    ],
  },

  {
    image: '/images/products/HoodedTransitionalJacket.jpg',
    slug: 'hooded-transitional-jacket',
    name: 'Hooded Transitional Jacket',
    price: '$100.00',
    originalPrice: undefined,
    stars: 4,
    isNew: false,
    description:
      'Functional hooded jacket crafted for unpredictable weather. Combines comfort with urban utility.',
    material: 'Water-Resistant Polyester',
    care: 'Machine wash cold, do not iron',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Stone Grey'],
    mainImage: '/images/products/HoodedTransitionalJacket.jpg',
    images: [
      '/images/products/HoodedTransitionalJacket1.jpg',
      '/images/products/HoodedTransitionalJacket2.jpg',
      '/images/products/HoodedTransitionalJacket3.jpg',
    ],
  },

  {
    image: '/images/products/ClassicPocketShirt.jpg',
    slug: 'classic-pocket-shirt',
    name: 'Classic Pocket Shirt',
    price: '$40.00',
    originalPrice: undefined,
    stars: 5,
    isNew: false,
    description:
      'A clean-cut classic pocket shirt made for everyday wear. Simple, refined, and endlessly versatile.',
    material: 'Cotton Poplin',
    care: 'Machine wash warm, iron medium',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue'],
    mainImage: '/images/products/ClassicPocketShirt.jpg',
    images: [
      '/images/products/ClassicPocketShirt1.jpg',
      '/images/products/ClassicPocketShirt2.jpg',
      '/images/products/ClassicPocketShirt3.webp',
    ],
  },
];
export type hisproduct = {
  image: string;
  mainImage?: string;
  slug: string;
  name: string;
  price: string;
  originalPrice?: string;
  stars?: number;
  isNew?: boolean;
  description: string;
  material: string;
  care: string;
  sizes: string[];
  colors: string[];
  images: string[];
};

export function getHisProductBySlug(slug: string) {
  return hisproducts.find((product) => product.slug === slug);
}