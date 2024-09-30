import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

type Impact = {
  value: number;
  text: string;
};

interface AnimatedDivProps {
  numbers: Impact[];
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ numbers }) => {
  const [index, setIndex] = useState(0);
  const [completedAnimations, setCompletedAnimations] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (index < numbers.length - 1) {
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval); // Stop the animation when all numbers have been displayed
        }
      }, 2000); // Adjust the duration as needed

      return () => clearInterval(interval);
    }
  }, [index, numbers, isVisible]);

  const numberSprings = numbers.map((impact, i) => {
    const isActive = i === index;
    return useSpring({
      from: { number: 0, opacity: 0, circleRadius: 0, scale: 0.5 },
      to: {
        number: isActive ? impact.value : completedAnimations.includes(i) ? impact.value : 0,
        opacity: isActive ? 1 : completedAnimations.includes(i) ? 1 : 0,
        circleRadius: isActive ? 1 : completedAnimations.includes(i) ? 1 : 0,
        scale: isActive ? 1 : completedAnimations.includes(i) ? 1 : 0.5,
      },
      config: config.default,
      onRest: () => {
        if (isActive) {
          // Mark this animation as completed
          setCompletedAnimations((prevCompleted) => [...prevCompleted, i]);
        }
      },
    });
  });

  return (
    <div className="flex w-full justify-evenly" ref={divRef}>
      {numbers.map((impact, i) => {
        const spring = numberSprings[i];

        return (
          <animated.div
            key={`${impact.value}${impact.text}`}
            className="flex flex-col items-center relative my-4"
            style={{
              opacity: spring.opacity,
              transform: spring.scale.to((s) => `scale(${s})`),
            }}
          >
            <>
              <animated.svg className="w-11/12  h-30 md:h-48" viewBox="0 0 2000 2000">
                <g>
                  <animated.circle
                    cx="50%" // Center the circle horizontally
                    cy="50%" // Center the circle vertically
                    r={spring.circleRadius.to((r) => `calc(${r * 48}% + .5vw)`)} // Responsive circle size
                    fill="transparent"
                    stroke="red"
                    strokeWidth="50"
                  />
                  <animated.text
                    x="50%" // Center the text horizontally
                    y="40%" // Center the text vertically
                    textAnchor="middle" // Center the text within the circle
                    alignmentBaseline="middle"
                    className='text-[640px] md:text-[740px]'
                    //fontSize={spring.number.to((n) => `${Math.max(20, 60 - (n / 10))}vw`)} // Responsive font size
                    fontWeight="medium"
                    fill="black" // Change the text color as needed
                  >
                    {spring.number.to((n) => n.toFixed(0))}
                  </animated.text>
                  <animated.text
                    className='text-[150px] md:text-[140px]'
                    x="50%" // Center the text horizontally
                    y="65%" // Adjust the y-coordinate to position the text below the value
                    textAnchor="middle" // Center the text within the circle
                    alignmentBaseline="middle"
                    fill="black" // Change the text color as needed
                  >
                    {impact.text}
                  </animated.text>
                </g>
              </animated.svg>
            </>
          </animated.div>
        );
      })}
    </div>
  );
};

export default AnimatedDiv;