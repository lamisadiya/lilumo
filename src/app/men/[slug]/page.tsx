// src/app/men/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { hisproducts, getHisProductBySlug } from '@/lib/products';
import ClientProduct from './ClientProduct';

export async function generateStaticParams() {
  return hisproducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function MenProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const hisproduct = getHisProductBySlug(slug);

  if (!hisproduct) {
    notFound();
  }

  return <ClientProduct hisproduct={hisproduct} />;
}