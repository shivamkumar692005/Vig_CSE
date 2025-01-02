import ChooseCard from "./ChooseCard";
import {
  FaGraduationCap,
  FaLightbulb,
  FaBuilding,
  FaFlask,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const data = [
  {
    icon: FaGraduationCap,
    descH1: (
      <>
        Multi-Disciplinary <br /> Institute
      </>
    ),
    desc: "Immerse yourself in a multidisciplinary educational experience with 18 specialised schools.",
  },
  {
    icon: FaLightbulb, // Represents innovation and intellectual growth
    descH1: (
      <>
        Outcome-Based <br /> Education
      </>
    ),
    desc: "Focused on problem-solving, critical thinking, and analytical skills."
  },
  {
    icon: FaBuilding, // Represents industries or professional environments
    descH1: (
      <>
        Industry Integration
      </>
    ),
    desc: "With guest lectures, internships, and collaborations with leading tech companies."
  },
  {
    icon: FaFlask, // Symbolizes research, innovation, and experimentation
    descH1: (
      <>
        Research and Innovation <br /> Opportunities
      </>
    ),
    desc: "In AI, IoT, data science, cybersecurity, and more."
  },
  {
    icon: FaTools, // Represents skill-building and technical expertise
    descH1: (
      <>
        Skill Development
      </>
    ),
    desc: "In technical expertise, communication, leadership, and entrepreneurship."
  },
  {
    icon: FaUsers, // Suggests teamwork, collaboration, and group learning
    descH1: (
      <>
        Collaborative Learning
      </>
    ),
    desc: "Encourages teamwork, peer-to-peer interactions, and interdisciplinary projects."
  }
];

const WhyYouChoose = () => {
  return (
    <div className="w-full h-auto mt-28 p-10 bg-[#C3DDFF]">
      <h3 className="text-2xl mx-10 font-dm text-black text-center">
        Why Should You Choose {" "}
        <span className="text-vblue">Vignan CSE Department ?</span>
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 mt-4 justify-center">
          <ChooseCard data={data[0]} />
          <ChooseCard data={data[1]} />
          <ChooseCard data={data[2]} />
        </div>
        <div className="flex gap-5 mt-4 justify-center">
          <ChooseCard data={data[3]} />
          <ChooseCard data={data[4]} />
          <ChooseCard data={data[5]} />
        </div>
      </div>
    </div>
  );
};

export default WhyYouChoose;
