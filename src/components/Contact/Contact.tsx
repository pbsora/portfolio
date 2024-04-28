import { FormEvent, useRef, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section
      className="h-screen snap-center w-full bg-yellow-300 snap-always bg-gradient-to-b to-[#181A1B] text-white from-[#0B192E] from-30% to-70% font-montserrat"
      id="contact"
    >
      <div className="max-w-[80%] h-full flex flex-col lg:flex-row justify-center items-center m-auto ">
        <div className="flex-1 h-full flex flex-col justify-center gap-8">
          <h1 className="text-7xl font-bold">Say hi!</h1>
          <div>
            <p className="text-2xl">I'm always open to new projects.</p>
            <p className="text-2xl">Feel free to contact me.</p>
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
              target="_blank"
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
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-1 h-full flex-col justify-center items-center gap-6 container"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="bg-transparent rounded-lg py-3 px-6 w-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent duration-200 ease-in-out transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            className="bg-transparent rounded-lg py-3 px-6 w-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent duration-200 ease-in-out transition-colors"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Say hi..."
            cols={30}
            rows={7}
            className="bg-transparent rounded-lg py-3 px-6 w-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent duration-200 ease-in-out transition-colors"
          />
          {success ? (
            <button
              className="bg-green-500 py-4 w-full rounded  duration-200"
              disabled
            >
              Message sent!
            </button>
          ) : (
            <button
              className="bg-red-500 py-4 w-full hover:bg-red-600 rounded disabled:bg-red-400 duration-200"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;
