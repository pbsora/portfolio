import Backend from "./Backend";
import Frontend from "./Frontend";
import Other from "./Other";

const Skills = () => {
  return (
    <section
      className="h-screen snap-center overflow-hidden w-full snap-always bg-[#0B192E] text-white flex items-center"
      id="skills"
    >
      <div className="w-full container lg:w-[65%] h-3/4 lg:h-[65%] m-auto items-center justify-center font-montserrat ">
        <div className="flex items-center mb-10 gap-5">
          <h1 className=" text-white font-semibold text-3xl">
            What i'm skilled at{" "}
          </h1>
          <hr className="border border-zinc-800 w-2/4" />
        </div>
        <div className=" flex flex-col gap-20 lg:gap-10">
          <Frontend />
          <Backend />
          <Other />
        </div>
      </div>
    </section>
  );
};
export default Skills;
