import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      className="h-[100dvh] snap-center w-full  bg-yellow-300 snap-always bg-gradient-to-b to-[#181A1B] text-white from-[#0B192E] from-30% to-70% font-montserrat"
      id="contact"
    >
      <div className="max-w-full px-6 lg:max-w-[80%] h-3/4 lg:h-full mt-28 lg:mt-0 flex flex-col lg:flex-row justify-center items-center m-auto ">
        <div className="lg:flex-1  h-full flex flex-col justify-center gap-4 lg:gap-8">
          <h1 className="text-3xl lg:text-7xl font-bold">Say hi!</h1>
          <div>
            <p className="text-xl lg:text-2xl">
              I'm always open to new projects.
            </p>
            <p className="text-xl lg:text-2xl">Feel free to contact me.</p>
          </div>
          <div>
            <h2 className="text-xl">E-mail</h2>
            <span className="text-lg">sora.thedev@gmail.com</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/pedro-bispo99"
              className="relative group"
              target="_blank"
            >
              <div className="bg-sky-400 blur-md scale-0 group-hover:scale-125 inset-0 absolute duration-200" />
              <FaLinkedin
                size={40}
                className="duration-500 relative ring-sky-400 rounded-md "
              />
            </a>
            <a
              href="https://github.com/pbsora"
              className="relative group"
              target="_blank"
            >
              <div className="bg-white blur-md scale-0 group-hover:scale-125 inset-0 absolute duration-200" />
              <FaGithubSquare
                size={40}
                className="group-hover:text-zinc-700 relative duration-500 hover:bg-white  rounded-lg ring-white"
              />
            </a>
            <a
              href=""
              target="_blank"
              className="duration-500 hover:ring-8 ring-yellow-400 rounded-md hover:bg-yellow-400 flex items-center gap-3 group"
            >
              <HiOutlineDocumentArrowDown size={40} className="" />
              <span className="text-transparent group-hover:text-white duration-300 origin-left ease-in-out">
                Download my resume
              </span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
