import React from 'react';
import Hero from '../components/Hero';
import ExchangeWidget from '../components/ExchangeWidget';
import Features from '../components/Features';
import CryptoStats from '../components/CryptoStats';
import SecuritySection from '../components/SecuritySection';

const Home = () => {
  return (
    <>
      <Hero />
      <ExchangeWidget />
      <Features />
      <CryptoStats />
      <SecuritySection />
    </>
  );
};

export default Home;