import HOD from "../Components/UI/home/HOD";
import AccAndRanks from "../Components/UI/home/AccAndRanks";
import BuildYourSelf from "../Components/UI/home/BuildYourSelf";

import Courses from "../Components/UI/home/Courses";
import PlacementSlider from "../Components/UI/home/PlacmentSlider";
import { Hero } from "../Components/UI/home/Hero";
import WhyYouChoose from "../Components/UI/home/WhyYouChoose";
import Facilities from "../Components/UI/home/Facilities";
import Research from "../Components/UI/home/Research";
import UpcommingEvents from "../Components/UI/home/UpcommingEvents";
import OurAlluminies from "../Components/UI/home/OurAlluminies";

import ReviewSlider from "../Components/UI/home/ReviewSlider";
import FAQ from "../Components/UI/home/FAQ";



export const Home = () => {
    return (
     <>
      <Hero />
      <Courses />
      <AccAndRanks />
      <HOD />
     <BuildYourSelf />
     <PlacementSlider />
     <WhyYouChoose />
     <Facilities /> 
     <Research />
      <UpcommingEvents />
      <OurAlluminies />
      <ReviewSlider />
      <FAQ />
     </>
    );
  };
  