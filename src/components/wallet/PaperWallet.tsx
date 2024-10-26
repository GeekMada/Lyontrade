import React, { useState } from 'react';
import { Download, RefreshCw, Lock } from 'lucide-react';
import { generateWallet } from '../../utils/walletGenerator';
import WalletDesign from './WalletDesign';

const PaperWallet = () => {
  const [wallet, setWallet] = useState(() => generateWallet());
  
  const handleRegenerateWallet = () => {
    setWallet(generateWallet());
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [JSON.stringify(wallet, null, 2)], 
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `paper-wallet-${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Générateur de Wallet Papier</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Créez un wallet papier sécurisé pour stocker vos cryptomonnaies hors ligne. 
                Assurez-vous d'imprimer et de stocker votre wallet dans un endroit sûr.
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={handleRegenerateWallet}
                className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <RefreshCw className="h-5 w-5" />
                Régénérer
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Download className="h-5 w-5" />
                Télécharger
              </button>
            </div>

            <WalletDesign wallet={wallet} />

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Lock className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Conseils de sécurité
                  </h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Imprimez votre wallet immédiatement et stockez-le dans un endroit sûr</li>
                    <li>• Ne partagez jamais votre clé privée</li>
                    <li>• Créez plusieurs copies et stockez-les dans différents endroits sécurisés</li>
                    <li>• Considérez la lamination pour une protection supplémentaire</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperWallet;