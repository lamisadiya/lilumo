import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Hero from '@/components/hero/Hero';
import SectionForHer from '@/components/sections/SectionForHer';
import Banner from '@/components/sections/Banner';
import SectionForHim from '@/components/sections/SectionForHim';
import Testimonial from '@/components/sections/Testimonial';
import BlogSection from '@/components/sections/BlogSection';
import Footer from '@/components/layout/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SectionForHer />
      <Banner />
      <SectionForHim />
      <Testimonial />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;