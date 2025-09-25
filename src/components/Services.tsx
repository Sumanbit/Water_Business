import React from 'react';
import { Truck, Clock, Shield, Headphones, MapPin, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Free Home Delivery Upto 3km',
      description: 'Fast and reliable delivery service right to your doorstep with no minimum order.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Order before 2 PM and get your water delivered the same day within our service area.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with rigorous quality testing and FDA certification.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock customer service to help with orders, deliveries, and any questions.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose your preferred delivery time slots and set up recurring orders for convenience.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Wide Coverage Area',
      description: 'Serving the entire metro area with plans to expand to neighboring cities.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AJPure?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional service and the highest quality water 
            to keep you and your family healthy and hydrated.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Service Areas</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                We proudly serve the following areas with fast, reliable water delivery:
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Parbatipur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Domjur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Dafarpur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Ichapur</span>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Narna</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Garbagan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Nonakundu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">Expanding Soon</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 sm:p-8 text-center">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Coverage Map</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Check if we deliver to your area
                </p>
                <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Check Your Area
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;