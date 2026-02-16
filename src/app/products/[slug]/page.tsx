// src/app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/products';
import ClientProductPage from './ClientProductPage';


export async function generateStaticParams() {
  const { products } = await import('@/lib/products');
  console.log('generateStaticParams called – found slugs:', products.map(p => p.slug));
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {  
  const { slug } = await params;  

  console.log('Page requested with slug:', slug);

  const product = getProductBySlug(slug);  

  if (!product) {
    console.log('Product not found for slug:', slug);
    notFound();
  }

  return (
  <>
  <ClientProductPage product={product} />;
  </>);
}