import ChooseCard from "./ChooseCard";

const WhyYouChoose = () => {
  return (
    <div className="w-full bg-yellow h-auto mt-16 p-10">
      <h3 className="text-2xl mx-10 font-dm ">
        Why Should You Choose <br />
        <span className="text-vblue">Vignan University?</span>
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 mt-4 justify-center">
          <ChooseCard />
          <ChooseCard />
          <ChooseCard />
        </div>
        <div className="flex gap-5 mt-4 justify-center">
          <ChooseCard />
          <ChooseCard />
          <ChooseCard />
        </div>
      </div>
    </div>
  );
};

export default WhyYouChoose;
