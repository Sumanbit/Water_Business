import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 6289070043</span>
              <span className="sm:hidden">Call Us</span>
            </div>
            <div className="flex items-center space-x-2 hidden md:flex">
              <MapPin className="w-4 h-4" />
              <span>Parbatipur, Dafarpur Area</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 7AM-7PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">AJPure</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Premium Water Supply</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm xl:text-base">
                Order Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white shadow-lg">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">Home</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">Products</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">Contact</a>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium w-full mt-4">
                  Order Now
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;