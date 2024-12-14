import { FaGraduationCap } from "react-icons/fa";


const ChooseCard = () => {
    return (
        <div className="w-64 text-white h-60 bg-slate-200 rounded-2xl shadow-zinc-500 shadow-xl flex justify-center items-center p-2">
        <div className="w-full h-full rounded-2xl bg-[#04728a]  p-2 flex flex-col justify-center items-center gap-3 group relative overflow-hidden">
          <FaGraduationCap
            size={30}
            className="text-white opacity-100 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10px] group-hover:invisible"
          />
  
          <h1 className="text-center font-dm text-xl transition-all duration-500 group-hover:translate-y-[-10px] opacity-100 group-hover:opacity-0">
            Multi-Disciplinary <br />
            Institute
          </h1>
  
          <p className="hidden  text-center text-xs transition-all duration-800 group-hover:inline-block   group-hover:translate-y-[-10px]">
            Immerse yourself in a multidisciplinary educational experience with
            18 specialised schools, offering more than 140 programs across
            diverse domains, including engineering, management, sciences, law,
            hospitality, and more.
          </p>
        </div>
      </div>
    );
};

export default ChooseCard;
