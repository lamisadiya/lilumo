import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Banner from '@/components/sections/Banner';
import SectionForHim from '@/components/sections/SectionForHim';

import Footer from '@/components/layout/Footer';

const Men: NextPage = () => {
  return (
    <div>
      <Header />
     <Banner />
      <SectionForHim />
      
      <Footer />
    </div>
  );
};

export default Men;