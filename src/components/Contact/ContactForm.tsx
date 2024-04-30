import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const size = window.innerWidth > 780 ? 7 : 4;

const ContactForm = () => {
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex lg:flex-1 h-full w-full flex-col justify-center items-center gap-4 lg:gap-6 md:container mt-8 lg:mt-0 mb-4"
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="bg-transparent rounded-lg py-2 lg:py-3 px-6 w-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent duration-200 ease-in-out transition-colors"
        required
      />
      <input
        type="email"
        placeholder="Your email"
        name="email"
        className="bg-transparent rounded-lg py-2 lg:py-3 px-6 w-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent duration-200 ease-in-out transition-colors"
        required
      />
      <textarea
        name="message"
        id="message"
        placeholder="Say hi..."
        cols={30}
        rows={size}
        className="bg-transparent rounded-lg py-2 lg:py-3 px-6 w-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent duration-200 ease-in-out transition-colors"
        required
      />
      {success ? (
        <button
          className="bg-green-500 py-2 lg:py-4 w-full rounded  duration-200"
          disabled
        >
          Message sent!
        </button>
      ) : (
        <button
          className="bg-red-500 py-2 lg:py-4 w-full hover:bg-red-600 rounded disabled:bg-red-400 duration-200"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      )}
    </form>
  );
};
export default ContactForm;
