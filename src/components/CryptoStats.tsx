import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const cryptoData = [
  { name: 'Bitcoin', symbol: 'BTC', price: '45,230.00', change: '+5.2' },
  { name: 'Ethereum', symbol: 'ETH', price: '3,120.50', change: '+3.8' },
  { name: 'Cardano', symbol: 'ADA', price: '1.25', change: '-2.1' },
  { name: 'Solana', symbol: 'SOL', price: '98.75', change: '+7.4' }
];

const CryptoStats = () => {
  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cours des Cryptomonnaies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suivez en temps réel l'évolution des principales cryptomonnaies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptoData.map((crypto, index) => {
            const isPositive = crypto.change.startsWith('+');
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {crypto.name}
                  </h3>
                  <span className="text-sm text-gray-500">{crypto.symbol}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    €{crypto.price}
                  </span>
                  <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    <span className="font-medium">{crypto.change}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CryptoStats;