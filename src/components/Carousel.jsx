import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CurvedCarouselFramer = ({ images }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const itemWidth = 300; // Adjust as needed
  const gap = 20; // Adjust the gap between items
  const scrollX = useMotionValue(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef.current) {
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        const newScroll = scrollX.get() + 1; // Adjust scroll speed
        scrollX.set(newScroll > maxScroll ? 0 : newScroll);
      }
    }, 30); // Adjust interval

    return () => clearInterval(intervalId);
  }, [scrollX, containerWidth]);

  const transformStyle = (index) => {
    const itemCount = images.length;
    // const centerIndex = Math.floor(itemCount / 2); // Removed unused variable
    const itemOffset = index * (itemWidth + gap);

    // Calculate distance from the center of the visible area
    const centerOfContainer = containerWidth / 2;
    const itemCenter = itemOffset + itemWidth / 2 - scrollX.get();
    const distanceToCenter = itemCenter - centerOfContainer;

    // Scale down and fade out items further from the center
    const scaleFactor = Math.max(0.7, 1 - Math.abs(distanceToCenter) / (containerWidth * 0.6)); // Adjust 0.6 for fade start
    const opacityFactor = Math.max(0.4, 1 - Math.abs(distanceToCenter) / (containerWidth * 0.4)); // Adjust 0.4 for fade start

    // Basic rotation for curve effect
    const rotateY = distanceToCenter / 50; // Adjust for curve intensity
    const translateZ = -Math.abs(distanceToCenter) * 0.5; // Subtle depth

    return {
      x: scrollX, // Apply the scroll value directly
      scale: scaleFactor,
      opacity: opacityFactor,
      rotateY: `${rotateY}deg`,
      translateZ: `${translateZ}px`,
    };
  };

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex absolute"
        style={{
          paddingLeft: `${containerWidth / 2 - itemWidth / 2}px`, // Initial centering
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-md shadow-lg flex-shrink-0"
            style={{
              width: `${itemWidth}px`,
              marginRight: `${gap}px`,
              ...transformStyle(index),
            }}
          >
            <img src={image} alt={`Item ${index + 1}`} className="w-full h-auto rounded-md" />
          </motion.div>
        ))}
        {/* Duplicate for continuous scroll */}
        {images.map((image, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="relative rounded-md shadow-lg flex-shrink-0"
            style={{
              width: `${itemWidth}px`,
              marginRight: `${gap}px`,
              ...transformStyle(images.length + index),
            }}
          >
            <img src={image} alt={`Item ${index + 1}`} className="w-full h-auto rounded-md" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const App = () => {
  const imageList = [
    "https://via.placeholder.com/300/FF0000",
    "https://via.placeholder.com/300/00FF00",
    "https://via.placeholder.com/300/0000FF",
    "https://via.placeholder.com/300/FFFF00",
    "https://via.placeholder.com/300/00FFFF",
    "https://via.placeholder.com/300/FF00FF",
    "https://via.placeholder.com/300/C0C0C0",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <CurvedCarouselFramer images={imageList} />
    </div>
  );
};

export default App;