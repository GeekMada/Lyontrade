import React from 'react';

const ExchangeWidget = () => {
  return (
    <div className="py-16 bg-gradient-light min-h-[calc(100vh-76px-300px-300px)]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-green mb-4 leading-tight">
                Échangez et transférez vos crypto sans KYC
              </h2>
              <p className="text-gray-600 text-lg">
                Notre plateforme vous permet d'échanger vos cryptomonnaies rapidement et en toute sécurité, sans processus de vérification complexe.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <iframe 
                id='iframe-widget' 
                src='https://changenow.io/embeds/exchange-widget/v2/widget.html?link_id=7bf81a3370a074&amount=0.1&from=btc&to=eth&flow=standard&fromFiat=eur&toFiat=eth&FAQ=true&toTheMoon=true&locales=true&logo=false&darkMode=false&primaryColor=00C26F&backgroundColor=FFFFFF&horizontal=false'
                className="w-full h-[356px] border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeWidget;