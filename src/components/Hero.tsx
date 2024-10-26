import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[300px] flex items-center justify-center bg-gradient-primary mb-8">
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Échangez vos cryptomonnaies en toute sécurité
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
          Plateforme d'échange simple, rapide et sécurisée
        </p>
      </div>
    </div>
  );
};

export default Hero;