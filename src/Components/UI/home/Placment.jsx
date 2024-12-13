

const Placement = ({img}) => {
    return (
        <div className="relative w-28 h-28  rounded-3xl overflow-hidden ">
        <img src={img} alt="" className="object-cover  w-full h-full rounded-3xl" />
    </div>
      );
};

export default Placement;
