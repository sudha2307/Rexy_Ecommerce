import React from 'react'

const features = [
  {
    title: 'Free Shipping',
    desc: 'On all orders above $50',
    icon: "https://cdn-icons-png.flaticon.com/512/107/107831.png"
,
  },
  {
    title: '24/7 Support',
    desc: 'Friendly support all day',
    icon: "https://cdn-icons-png.flaticon.com/512/5977/5977575.png"
,
  },
  {
    title: 'Easy Returns',
    desc: 'Hassle-free 7-day return',
    icon: "https://cdn-icons-png.flaticon.com/512/5705/5705854.png"
,
  },
  {
    title: 'Secure Payment',
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
,
  },
]

const FeatureBoxes = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 mb-4">
              <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default FeatureBoxes
