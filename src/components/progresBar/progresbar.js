import React, { useEffect, useRef, useState } from 'react';
import './progresbar.css';

const ProgresBar = ({ data }) => {
  const [animatedValues, setAnimatedValues] = useState(data.map(() => 0));
  const progressBarRef = useRef(null);
  const language = localStorage.getItem('language') || 'en'
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          data.forEach((item, index) => {
            const target = parseInt(item.value.replace('+', ''), 10); // Extract number (e.g., 4000)
            const duration = 3000; // 3 seconds
            const increment = target / (duration / 50); // Increment every 50ms
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[index] = Math.floor(current);
                return newValues;
              });
            }, 50);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="progres-bar" ref={progressBarRef}>
      <div className="progres-bar__cards">
        {data.map((item, index) => (
          <div key={index} className="progres-cards__card">
            <span className="progres-bar__title">{language=='en'?item.key:item.keyAm}</span>
            <hr />
            <span className="progres-values__value">{animatedValues[index]}+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgresBar;