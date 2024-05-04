import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Analytics from '../../components/Analytics';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';
import WorkFlow from '../../components/WorkFlow';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Analytics />
        <WorkFlow />
        <Newsletter />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Home;