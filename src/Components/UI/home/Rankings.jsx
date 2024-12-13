const Rankings = ({img, text, color}) => {
  return (
    <div className="w-96 h-30 max-w-96 max-h-30 bg-slate-200 shadow-xl hover:shadow-2xl rounded-2xl p-3 relative flex items-center justify-center gap-5">
        
            <div className="w-auto">
            <h1 className={`font-bold text-4xl text-center font-dm  ` + color}>{text}</h1>
            </div>
            <div className="w-auto h-20">
                <img src={img} alt="" className="object-cover w-full h-full"/>
            </div>
        </div>
    
  );
};

export default Rankings;
