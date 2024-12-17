import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Rankings = ({ img, text, color }) => {
  const cardRef = useRef(null);
 
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(cardRef.current, {
        duration: 0.8,
        x: 70,
        opacity: 0,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          // markers: true, 
        },
        stagger: 0.2,
      });
    });

    return () => context.revert(); 
  }, []);

  return (
    <div ref={cardRef} className="w-96 h-30 max-w-96 max-h-30 bg-slate-200 shadow-xl hover:shadow-2xl rounded-2xl p-3 relative flex items-center justify-center gap-5">
      <div className="w-auto">
        <h1 className={`font-bold text-4xl text-center font-dm  ` + color}>
          {text}
        </h1>
      </div>
      <div className="w-auto h-20">
        <img src={img} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Rankings;
