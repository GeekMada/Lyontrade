import React from 'react';
import { Shield, Zap, Wallet, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Protection de vos actifs avec des protocoles de sécurité avancés et stockage à froid.'
  },
  {
    icon: Zap,
    title: 'Transactions Rapides',
    description: 'Échanges instantanés et confirmations rapides pour une expérience fluide.'
  },
  {
    icon: Wallet,
    title: 'Multi-Wallets',
    description: 'Compatibilité avec différents types de wallets pour une flexibilité maximale.'
  },
  {
    icon: Users,
    title: 'Support 24/7',
    description: 'Une équipe d\'experts disponible en permanence pour vous accompagner.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir LyonTrade ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre plateforme combine sécurité, rapidité et facilité d'utilisation pour une expérience de trading optimale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-gradient-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;