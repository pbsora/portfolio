import { FaNodeJs } from "react-icons/fa";

const NodeJs = ({ size }: { size: number }) => {
  return (
    <div className="group relative">
      <div
        className={`scale-0 group-hover:scale-100 duration-200 left-[50%] translate-x-[-50%] pointer-events-none origin-bottom absolute shadow-lg bg-slate-50 -top-16 after:shadow-md after:absolute flex justify-center after:-bottom-[0.38rem] border-zinc-400 rounded-lg after:w-3 after:h-3 after:z-10 after:bg-slate-50 text-xs after:border-zinc-400  after:rotate-45 after:content-[''] p-3 `}
      >
        <span className="font-inter">Node.js</span>
      </div>
      <FaNodeJs className=" text-green-600 cursor-pointer" size={size} />
    </div>
  );
};
export default NodeJs;
