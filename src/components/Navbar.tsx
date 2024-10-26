import React from 'react';
import { Wallet, ArrowRightLeft, MessageCircle, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-primary-green transition-colors hover:text-primary-blue">
            LyonTrade
          </a>
          
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-primary-blue hover:text-primary-green transition-colors">
                <Wallet className="h-5 w-5" />
                <span>Wallet</span>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2 py-2">
                <a href="#" className="block px-4 py-2 text-primary-blue hover:text-primary-green hover:bg-gray-50 transition-colors">Wallet Mobile</a>
                <a href="#" className="block px-4 py-2 text-primary-blue hover:text-primary-green hover:bg-gray-50 transition-colors">Wallet Papier</a>
                <a href="#" className="block px-4 py-2 text-primary-blue hover:text-primary-green hover:bg-gray-50 transition-colors">Wallet Web</a>
              </div>
            </div>
            <a href="#" className="flex items-center space-x-1 text-primary-blue hover:text-primary-green transition-colors">
              <ArrowRightLeft className="h-5 w-5" />
              <span>Exchange</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-primary-blue hover:text-primary-green transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <button className="flex items-center space-x-1 text-primary-blue">
                <Wallet className="h-5 w-5" />
                <span>Wallet</span>
              </button>
              <div className="pl-6 mt-2 space-y-2">
                <a href="#" className="block text-primary-blue hover:text-primary-green transition-colors">Wallet Mobile</a>
                <a href="#" className="block text-primary-blue hover:text-primary-green transition-colors">Wallet Papier</a>
                <a href="#" className="block text-primary-blue hover:text-primary-green transition-colors">Wallet Web</a>
              </div>
            </div>
            <a href="#" className="flex items-center space-x-1 text-primary-blue hover:text-primary-green transition-colors">
              <ArrowRightLeft className="h-5 w-5" />
              <span>Exchange</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-primary-blue hover:text-primary-green transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;