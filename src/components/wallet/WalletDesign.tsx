import React from 'react';
import { QrCode } from 'lucide-react';

interface WalletDesignProps {
  wallet: {
    address: string;
    privateKey: string;
  };
}

const WalletDesign: React.FC<WalletDesignProps> = ({ wallet }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-6 bg-gradient-to-r from-gray-50 to-white">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Public Address Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Adresse Publique</h3>
            <QrCode className="h-6 w-6 text-primary-blue" />
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg break-all font-mono text-sm">
            {wallet.address}
          </div>
        </div>

        {/* Private Key Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Clé Privée</h3>
            <QrCode className="h-6 w-6 text-primary-green" />
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg break-all font-mono text-sm">
            {wallet.privateKey}
          </div>
        </div>
      </div>

      {/* Design Elements */}
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
            <p className="font-bold">LyonTrade</p>
            <p className="text-sm">Paper Wallet</p>
          </div>
          <div className="text-center p-4 bg-gradient-light rounded-lg">
            <p className="font-bold text-primary-green">Sécurisé</p>
            <p className="text-sm text-gray-600">Cold Storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDesign;