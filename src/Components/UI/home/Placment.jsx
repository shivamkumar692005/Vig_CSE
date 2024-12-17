

const Placement = ({img}) => {
    return (
        <div className="relative w-28 h-28 overflow-hidden ">
        <img src={img} alt={img} className="object-contain  w-full h-full object-center " />
    </div>
      );
};

export default Placement;
