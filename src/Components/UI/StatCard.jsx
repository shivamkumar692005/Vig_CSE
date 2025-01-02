import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const StatCard = ({ number, description, color }) => {
     const [isVisible, setIsVisible] = useState(false);
      const sectionRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); 
            }
          },
          { threshold: 0.5 } 
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => observer.disconnect();
      }, []);
  return (
    <div className="bg-white rounded-lg shadow-lg  p-6 flex flex-col items-center justify-center text-center space-y-2 hover:shadow-xl hover:shadow-black transition duration-300"  ref={sectionRef}>
      <span className={`text-4xl md:text-5xl font-bold ${color}`}>
        {isVisible && <CountUp start={1} end={number} duration={3} />}
      </span>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

const EducationStats = () => {
  const stats = [
    {
      number: "65",
      description: "Among the best universities in the india by NIRF",
      color: "text-amber-400",
    },
    {
      number: "75",
      description: "Among the best engineering coleege in the india by NIRF",
      color: "text-green-500",
    },
    {
      number: "12",
      description: "Exclusive Insitute in the India by ABET",
      color: "text-red-500",
    },
    {
      number: "2",
      description: "Among the best universities in the AP",
      color: "text-vblue",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-dm" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            description={stat.description}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationStats;
