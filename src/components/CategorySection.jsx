import { useState } from 'react';
import { categories } from '../data/categories';
import { motion, AnimatePresence } from 'framer-motion';

const subCategories = {
  'T-Shirts': ["Casual T-Shirts", "Formal T-Shirts", "Printed T-Shirts", "Oversized T-Shirts", "Sports T-Shirts"],
  'Jeans': ["Skinny Jeans", "Slim Fit Jeans", "Baggy Jeans", "Ripped Jeans", "Classic Jeans"],
  'Shirts': ["Formal Shirts", "Casual Shirts", "Checked Shirts", "Denim Shirts", "Linen Shirts"],
  'Shoes': ["Leather Shoes", "Formal Shoes", "Casual Shoes", "Sports Shoes", "Loafers"],
  'Dresses': ["Evening Dresses", "Summer Dresses", "Party Dresses", "Boho Dresses", "Formal Dresses"],
  'Toys': ["Educational Toys", "Stuffed Toys", "Action Figures", "Puzzles", "Building Blocks"],
  'Smartphones': ["Android Phones", "iPhones", "Gaming Phones", "Budget Phones", "Flagship Phones"],
};

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemTitle) => {
    setExpandedItem(expandedItem === itemTitle ? null : itemTitle);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-20 bg-[#f9fafb] min-h-[600px]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 mt-10 sm:mt-16">Start exploring.</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedItem(null);
            }}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium shadow transition-all duration-300 ${
              activeCategory.name === cat.name
                ? 'bg-black text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        <AnimatePresence>
          {activeCategory.items.map((item) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Expanded subcategory view */}
              {expandedItem === item.title ? (
                <motion.div
                  layout
                  className="col-span-full grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white p-5 rounded-xl shadow-lg"
                >
                  {subCategories[item.title]?.map((sub, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f0f2f5] rounded-xl border p-4 text-center shadow-sm hover:shadow-md transition-all"
                    >
                      <h4 className="font-semibold text-gray-700 text-sm sm:text-base">{sub}</h4>
                    </div>
                  )) || (
                    <p className="col-span-full text-center text-gray-500">No subcategories available.</p>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-all relative group cursor-pointer"
                  onClick={() => handleItemClick(item.title)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-6 h-6 object-cover rounded-full"
                      />
                    </div>
                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Best sellers</p>
                  <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{Math.floor(Math.random() * 100 + 20)} products</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategorySection;
