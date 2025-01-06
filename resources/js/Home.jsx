import React, { useState, useEffect, useRef } from 'react'
import CreateReactScript from './Utils/CreateReactScript'
import { createRoot } from 'react-dom/client'

const Home = () => {
  const slides = [
    'PPT-1.jpg',
    'PPT-2.jpg',
    'PPT-3.jpg',
    'PPT-4.jpg',
    'PPT-5.jpg',
    'PPT-6.jpg',
    'PPT-7.jpg',
    'PPT-7-1.jpg',
    'PPT-8.jpg',
    'PPT-9.jpg',
    'PPT-10.jpg',
    'PPT-11.jpg',
    'PPT-12.jpg',
    'PPT-12-1.jpg',
    'PPT-12-2.jpg',
    'PPT-13.jpg',
    'PPT-13-1.jpg',
    'PPT-13-2.jpg',
    'PPT-14.jpg',
    'PPT-15.jpg',
    'PPT-16.jpg',
    'PPT-17.jpg',
    'PPT-18.jpg',
    'PPT-19.jpg',
    'PPT-20.jpg',
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = window.scrollX // Cambiado a scrollX para scroll horizontal
        const windowWidth = window.innerWidth // Tamaño de la ventana horizontalmente
        const newIndex = Math.floor(scrollPosition / windowWidth)
        if (newIndex !== currentImageIndex && newIndex < slides.length) {
          setCurrentImageIndex(newIndex)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentImageIndex])

  return (
    <div
      ref={sliderRef}
      className="h-screen w-screen overflow-x-scroll snap-x snap-mandatory bg-slate-950 flex" // Ajustado para scroll horizontal
      style={{ scrollSnapType: 'x mandatory', overflowY: 'hidden' }} // Deshabilitar scroll vertical
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="h-screen w-screen snap-start flex-shrink-0 shadow flex items-center justify-center" // Snap horizontal
        >
          <img
            src={`/assets/slides/${slide}`}
            className="h-auto w-full max-w-[95vw] max-h-[95vh] bg-no-repeat bg-center shadow-2xl object-contain rounded-2xl"
          />
        </div>
      ))}
    </div>
  )
}

CreateReactScript((el, properties) => {
  createRoot(el).render(<Home {...properties} />);
})
