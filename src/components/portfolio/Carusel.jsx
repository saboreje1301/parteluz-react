import React, { useState } from 'react';

function Carousel({ images = [], alt = '' }) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative flex items-center justify-center ">
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 z-10"
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="flex items-center justify-center size-9/12 object-cover rounded-lg"
        loading="lazy"
      />
      </div>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 z-10"
        aria-label="Siguiente"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;