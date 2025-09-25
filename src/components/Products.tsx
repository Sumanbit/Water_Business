import React from 'react';
import { Check, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: '500ml Premium Water/Carret(24 piece)',
      price: '₹ 5',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Any kind of program bottle delivery', 'Extra Bottle-Carret return without  cost cutting', 'Hotel/Factory Delivery'],
      popular: false
    },
    {
      id: 2,
      name: '20L Family Pack',
      price: '₹25',
      image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Only ₹ 25 instead of ₹40', 'Perfect for Families', 'Bottle cost free'],
      popular: true
    },
    {
      id: 3,
      name: 'Monthly Subscription',
      price: '₹ 225',
      originalPrice: '₹250.00',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['10 Bottles/Month', '2 Bottles free after 10 bottles', '10% Savings'],
      popular: false
    }
  ];

  const coolers = [
    {
      name: 'Asian food with Rice',
      price: '₹25/bottle(20L)',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',

      //image: 'https://images.pexels.com/photos/6621451/pexels-photo-6621451.jpeg?auto=compress&cs=tinysrgb&w=400',
      //image: https://www.pexels.com/photo/cooked-food-588776/
      features: ['Enhanced Taste', 'Healthier Option', 'Improved Digestion']
    },
    {
      name: 'Rice bowls with spice oil and meat',
      price: '₹25/bottle(20L)',
      image: 'https://previews.123rf.com/images/magone/magone1812/magone181200053/113760992-plate-of-asian-food-rice-with-meat-and-vegetables-isolated-on-white-background-top-view.jpg',
      features: ['Large Capacity', 'Child Safety Lock', 'Preserves Nutrients']
    },

     {
      name: 'Rice with curry',
      price: '₹25/bottle(20L)',
      image: 'https://previews.123rf.com/images/magone/magone1812/magone181200053/113760992-plate-of-asian-food-rice-with-meat-and-vegetables-isolated-on-white-background-top-view.jpg',
      features: ['Large Capacity', 'Child Safety Lock', 'Enhanced Taste']
    },

    {
      name: 'Rice dish on plate',
      price: '₹25/bottle(20L)',
      image: 'https://assets.epicurious.com/photos/5e5edde9dc79200008bad8dc/1%3A1/w_2560%2Cc_limit/CrunchySpice_Scallops_RECIPE_022720_203.jpg',
      features: ['Large Capacity', 'Child Safety Lock', 'Better Texture']
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of pure, filtered water products and cooler rentals 
            designed to meet your hydration needs.
          </p>
        </div>

        {/* Water Products */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Water Products</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <div key={product.id} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all hover:shadow-xl hover:scale-[1.02] ${product.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="text-center mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-base sm:text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                    product.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cooler Rentals */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Water Supply for Food Preparing</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We supply cooking water for any kind of program. Minerals like calcium, magnesium, and potassium in the water can bring out the natural flavors of food, making it taste fresher and richer.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cooking rice or vegetables in mineral water often gives them a softer, fluffier, and more appealing texture compared to regular tap water.</p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {coolers.map((cooler, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all">
                <div className="mb-4 sm:mb-6">
                  <img
                    src={cooler.image}
                    alt={cooler.name}
                    className="w-full h-32 sm:h-40 object-cover rounded-xl"
                  />
                </div>
                
                <div className="text-center mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{cooler.name}</h4>
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">{cooler.price}</span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {cooler.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all text-sm sm:text-base">
                  Rent Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;