import HOD from "../Components/Layout/HOD";
import AccAndRanks from "../Components/UI/home/AccAndRanks";
import BuildYourSelf from "../Components/UI/home/BuildYourSelf";
import Carousel from "../Components/UI/home/Carousel ";
import Courses from "../Components/UI/home/Courses";
import PlacementSlider from "../Components/UI/home/PlacmentSlider";
import { Hero } from "../Components/UI/home/Hero";
import WhyYouChoose from "../Components/UI/home/WhyYouChoose";


export const Home = () => {
    return (
     <>
      <Hero />
      <Courses />
      <AccAndRanks />
      <HOD />
      <Carousel />
     <BuildYourSelf />
     <PlacementSlider />
     <WhyYouChoose />
     </>
    );
  };
  