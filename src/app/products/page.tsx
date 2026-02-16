import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import SectionForHer from '@/components/sections/SectionForHer';
import Banner from '@/components/sections/Banner';
import SectionForHim from '@/components/sections/SectionForHim';

import Footer from '@/components/layout/Footer';

const Products: NextPage = () => {
  return (
    <div>
      <Header />
      <SectionForHer />
      <Banner />
      <SectionForHim />
      
      <Footer />
    </div>
  );
};

export default Products;