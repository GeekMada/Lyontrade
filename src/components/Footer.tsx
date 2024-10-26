import React from 'react';
import { Twitter, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h5 className="text-primary-green text-lg font-semibold mb-6">À propos de LyonTrade</h5>
            <p className="text-gray-400">
              Plateforme d'échange de cryptomonnaies basée à Lyon, France. Nous offrons des services sécurisés et rapides pour tous vos besoins en trading de cryptomonnaies.
            </p>
          </div>
          
          <div>
            <h5 className="text-primary-green text-lg font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Exchange</a></li>
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Wallet Mobile</a></li>
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Wallet Papier</a></li>
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Wallet Web</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-primary-green text-lg font-semibold mb-6">Support</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Contact</a></li>
              <li><a href="#" className="text-white hover:text-primary-green transition-colors">Sécurité</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-primary-green text-lg font-semibold mb-6">Suivez-nous</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-green transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary-green transition-colors">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary-green transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; 2024 LyonTrade. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;