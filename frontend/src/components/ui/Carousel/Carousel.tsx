import React, { useState } from 'react';
import styles from './Carousel.module.css'; // Create this CSS module for styling
import Image from 'next/image';

interface CarouselProps {
  items: { image: string; alt: string }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval]);

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={handlePrev}>‹</button>
      <div className={styles.slides}>
        <img src={items[currentIndex].image} alt={items[currentIndex].alt} className={styles.image} />
      </div>
      <button className={styles.next} onClick={handleNext}>›</button>
      <div className={styles.dots}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
