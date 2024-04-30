import me from "/my_picture.jpg";
import luke from "/luke.jpeg";
import { useState } from "react";

const About = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <section
      className="h-[100dvh]  snap-center w-full snap-always bg-gradient-to-b from-[#181A1B] to-[#0B192E] from-40% to-80% text-white flex items-center"
      id="about"
    >
      <div className="w-full container lg:w-[65%] h-3/4 lg:h-2/4 m-auto font-montserrat">
        <div className="flex items-center mb-16 gap-5">
          <h1 className=" text-white font-semibold text-xl lg:text-3xl">
            About me{" "}
          </h1>
          <hr className="border border-zinc-800 w-2/4" />
        </div>
        <div className="flex  justify-center h-3/4 gap-6 flex-col-reverse lg:flex-row">
          <div className="flex-1 gap-3 flex flex-col text-sm lg:text-lg">
            <p>
              Hi there! My name is Pedro and i'm a web developer. I have been
              coding as a hobby for about 8 years now but only chose to follow
              it as a career last year. The only thing i like more than making
              new and exciting projects is my dog, whenever i'm not coding i'm
              probably giving him some belly rubs.{" "}
              <button
                className="text-red-500 hover:underline"
                onClick={() => setClicked(!clicked)}
              >
                {clicked ? "Undo." : "Pet tax."}
              </button>
            </p>
            <p>
              My main focus is React/Next.Js and Node/.NET for the backend, with
              this power-stack i can build anything!
            </p>
            <p>
              I chase the feeling of a job well done and new challenges, so here
              i am!
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <img
              src={clicked ? luke : me}
              alt=""
              className="size-44 lg:size-[25rem] rounded-full relative object-cover"
            />
            <div className="bg-red-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
