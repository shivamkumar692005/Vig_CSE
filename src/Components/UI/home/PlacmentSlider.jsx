import Placement from "./Placment";


const PlacementSlider = () => {
    return (
        <div className="container w-auto mx-10 mt-2">
        <div className="slider-container1 mt-2">
          <div className="slider-track2 mt-3">
            <Placement img={'image/amazon.jpeg'} />
            <Placement img={'image/tcs.jpeg'} />
            <Placement img={'image/accenture.jpeg'} />
            <Placement img={'image/infosis.jpeg'} />
            <Placement img={'image/deloitte.jpeg'} />
            <Placement img={'image/amazon.jpeg'} />
            <Placement img={'image/tcs.jpeg'} />
            <Placement img={'image/accenture.jpeg'} />
            <Placement img={'image/infosis.jpeg'} />
            <Placement img={'image/deloitte.jpeg'} />
            
          </div>
        </div>
      </div>
    );
};

export default PlacementSlider;
