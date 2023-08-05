import React, { useState, useEffect } from 'react';
import '../styles/Slider.css'

const Slider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={
              index === currentImageIndex ? 'slide active' : 'slide'
            }
          />
        ))}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={
              index === currentImageIndex ? 'dot active' : 'dot'
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
