import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const HeroCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
    },
  })

  const slides = [
    { id: 1, image: "/assets/1600w-kLCNF4n2JFE.webp" },
    { id: 2, image: "/assets/1600w-2CVBawxtk54.webp" },
    { id: 3, image: "/assets/1600w-Jzq89nYBDMg.webp" },
  ]

  const handleScroll = () => {
    const target = document.getElementById("categories")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sliderRef} className="keen-slider">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="keen-slider__slide relative h-[80vh] w-full overflow-hidden"
        >
          {/* Background Image with hover zoom */}
          <img
            src={slide.image}
            alt="Slide"
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-in-out hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/5 z-10" />

          {/* Button and Quote (on top of overlay) */}
          <div className="absolute left-[160px] bottom-[140px] z-20 flex flex-col items-start animate-fade-in">
            <button
              onClick={handleScroll}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Shop Now &raquo;
            </button>

            {/* E-commerce Quote */}
            <p className="mt-6 text-2xl lg:text-3xl font-bold italic text-white drop-shadow-xl">
              "Shop smart. Live better."
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HeroCarousel
