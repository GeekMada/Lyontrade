import React from 'react';
import { ShieldCheck, Lock, Server } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sécurité de Niveau Institutionnel
          </h2>
          <p className="text-gray-600">
            Nous utilisons les meilleures pratiques de l'industrie pour protéger vos actifs et vos données
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Protection des Fonds
            </h3>
            <p className="text-gray-600">
              95% des actifs sont stockés dans des wallets froids sécurisés
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Authentification Avancée
            </h3>
            <p className="text-gray-600">
              2FA et vérification en plusieurs étapes pour chaque transaction
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Infrastructure Sécurisée
            </h3>
            <p className="text-gray-600">
              Serveurs de grade militaire avec encryption de bout en bout
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
            En savoir plus sur notre sécurité
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;