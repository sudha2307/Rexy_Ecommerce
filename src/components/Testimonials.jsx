import { useState, useEffect } from 'react'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const isEven = current % 2 === 0

  return (
    <section className="bg-[#f5f5f5] py-16 px-4 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

        <div className="relative transition-all duration-500 min-h-[220px]">
          <div
            className={`bg-white p-8 rounded-xl shadow-lg flex items-center gap-6 justify-between ${
              isEven ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Image */}
            <img
              src={testimonials[current].image}
              alt={testimonials[current].author}
              className="w-24 h-24 rounded-full object-cover shrink-0"
            />

            {/* Quote */}
            <div className="text-left flex-1">
              <p className="text-xl italic text-gray-700">“{testimonials[current].quote}”</p>
              <p className="mt-4 text-sm text-gray-500">— {testimonials[current].author}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => setCurrent(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
