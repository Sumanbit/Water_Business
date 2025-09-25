import React from 'react';
import { Award, Users, Droplets, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Happy Customers', icon: Users },
    { number: '10k+', label: 'Bottles Delivered', icon: Droplets },
    { number: '99%', label: 'Customer Satisfaction', icon: Heart }
  ];

  const certifications = [
    'FDA Approved Facility',
    'ISO 9001:2015 Certified',
    'HACCP Compliant',
    'NSF International Certified',
    'Local Health Department Approved'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About AJPure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in pure, healthy hydration for over a decade.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2022 by a family passionate about health and wellness, AJPure began 
              with a simple mission: to provide the purest, safest drinking water to our community. 
              What started as a small local business has grown into the region's most trusted water supplier.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that access to clean, pure water shouldn't be a luxury—it's a necessity. 
              That's why we've invested in state-of-the-art filtration technology and built a 
              delivery network that brings premium water directly to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">Family Owned</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-700 font-medium">Locally Sourced</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              //src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800"
              src="src/images/photo.jpg
              "
              alt="Water treatment facility"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Years Serving</div>
                <div className="text-gray-600">Our Community</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Quality Process */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 lg:p-12 mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our 7-Stage Purification Process</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Every drop of AquaPure water goes through our rigorous purification process 
              to ensure the highest quality and safety standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              'Pre-Filtration',
              'Sediment Removal',
              'Carbon Filtration',
              'Reverse Osmosis',
              'UV Sterilization',
              'Mineral Enhancement',
              'Quality Testing'
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">{step}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Certifications & Compliance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;