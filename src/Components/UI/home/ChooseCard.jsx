const ChooseCard = ({ data }) => {
  const Icon = data.icon; 

  return (
    <div className="w-64 text-white h-60 bg-slate-200 rounded-2xl shadow-zinc-500 shadow-xl flex justify-center items-center p-2 hover:cursor-pointer">
      <div className="w-full h-full rounded-2xl bg-vblue p-2 flex flex-col justify-center items-center gap-3 group relative overflow-hidden">
        
        <Icon
          size={30}
          className="text-white opacity-100 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10px] group-hover:invisible"
        />

        <h1 className="text-center font-dm text-xl transition-all duration-500 group-hover:translate-y-[-10px] opacity-100 group-hover:opacity-0">
          {data.descH1}
        </h1>

        <p className="font-fg hidden text-center text-sm transition-all duration-800 group-hover:inline-block group-hover:translate-y-[-10px]">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default ChooseCard;
