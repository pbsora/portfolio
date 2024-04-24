import { SiDotnet } from "react-icons/si";

const Dotnet = ({ size }: { size: number }) => {
  return (
    <div className="group relative w-8">
      <div
        className={`scale-0 group-hover:scale-100 duration-200 left-[50%] translate-x-[-50%] pointer-events-none origin-bottom  absolute bg-slate-50 -top-16 border after:absolute flex justify-center after:-bottom-[0.38rem] border-zinc-400 rounded-lg after:w-3 after:h-3 after:z-10 after:bg-slate-50 text-xs after:border-zinc-400 after:border-r after:border-b after:rotate-45 after:content-[''] p-3 `}
      >
        <span className="font-inter">.NET/ASP.NET</span>
      </div>
      <SiDotnet className=" text-black cursor-pointer m-auto" size={size} />
    </div>
  );
};
export default Dotnet;
