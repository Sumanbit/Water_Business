import React from 'react';
import { Droplets, Shield, Truck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pure Water
                <span className="text-blue-600 block">Delivered Fresh</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Premium quality drinking water delivered right to your doorstep. 
                Trusted by thousands of families for over 10 years.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Tested & Approved by labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-blue-500" />
                <span>7-Stage Filtration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-orange-500" />
                <span>Same Day Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                Order Now - Free Delivery
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
                View Products
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">18/7</div>
                <div className="text-sm sm:text-base text-gray-600">Customer Support</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm sm:text-base text-gray-600">Pure & Safe</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pure water bottles"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-100 rounded-full opacity-40"></div>
            
            {/* Floating Card */}
            <div className="absolute -left-4 sm:-left-8 top-1/2 transform -translate-y-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">Fast Delivery</div>
                  <div className="text-xs sm:text-sm text-gray-600">Within 2 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;