import React, { useState, useEffect, useRef } from 'react'
import CreateReactScript from './Utils/CreateReactScript'
import { createRoot } from 'react-dom/client'

const Home = () => {
  const slides = [
    'Pagina 0.png',
    'Pagina 1.png',
    'Pagina 2.png',
    'Pagina 3.png',
    'Pagina 4.png',
    'Pagina 4 - A.png',
    'Pagina 4 - B.png',
    'Pagina 4 - C.png',
    'Pagina 5.png',
    'Pagina 6.png',
    'Pagina 7.png',
    'Pagina 8.png',
    'Pagina 9.png',
    'Pagina 10.png',
    'Pagina 11.png',
    'Pagina 12.png',
    'Pagina 13.png',
    'Pagina 14.png',
    'Pagina 15.png',
    'Pagina 16.png',
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
