

const Course = ({img, text}) => {
  return (
    <div className="relative w-60 h-64  rounded-3xl overflow-hidden ">
    <img src={img} alt="" className="object-cover  w-full h-full rounded-3xl" />
    <h2 className="absolute text-zinc-100 text-3xl font-dm  bottom-3 right-6">{text}</h2>
</div>
  );
};

export default Course;
