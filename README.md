import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

const Tools = ({ count = 6, radius = 100 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const angleRef = useRef(0);
  const requestRef = useRef();

  const [styles, api] = useSpring(() => ({
    from: { rotateZ: 0 },
    config: { tension: 50, friction: 40 },
  }));

  const images = [
    {
      src: './62.png',
      tailwindClasses: 'w-20 h-20 p-3 border-8 rounded-full object-cover  border-[#7779EC]',
    },
    {
      src: './63.png',
      tailwindClasses: 'w-20 h-20 object-cover rounded-full p-3 border border-[#7779EC] border-8',
    },
    {
      src: './64.png',
      tailwindClasses: 'w-20 h-20 p-3 border-8 border-[#403491] rounded-full object-cover ',
    },
    {
      src: './65.png',
      tailwindClasses: 'w-20 h-20 p-3 border-8 border-[#F1BA40] rounded-full object-cover ',
    },
    {
      src: './66.png',
      tailwindClasses: 'w-20 h-20 p-3 border-8 border-[#EF8534] rounded-full object-cover ',
    },
    {
      src: './67.png',
      tailwindClasses: 'w-20 h-20 p-3 border-8 border-[#EB4026] rounded-full object-cover ',
    },
  ];

  useEffect(() => {
    const animate = () => {
      if (!isHovered) {
        angleRef.current += 1; // control speed
        api.start({ rotateZ: angleRef.current });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovered, api]);

  const angleStep = 360 / count;

  return (
    <div
      className="relative w-[300px] h-[300px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Center Circle */}
      <div className="w-16 h-16 rounded-full bg-blue-700 z-10 flex items-center justify-center">
        <img src="./68.png" alt="center-icon" className="w-10 h-10" />
      </div>

      {/* Orbiting Images */}
      <animated.div
        style={{ transform: styles.rotateZ.to(r => `rotate(${r}deg)`) }}
        className="absolute w-full h-full top-0 left-0"
      >
        {Array.from({ length: count }).map((_, i) => {
          const angle = angleStep * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const { src, tailwindClasses } = images[i % images.length];

          return (
            <img
              key={i}
              src={src}
              alt={`tool-${i}`}
              className={`absolute ${tailwindClasses}`}
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
                transition: 'transform 0.3s ease',
              }}
            />
          );
        })}
      </animated.div>
    </div>
  );
};

export default Tools;
