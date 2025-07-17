import { useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vadbk3",
        "template_pfeak1p",
        form.current,
        "7lGJvGVZeWienpTMV"
      )
      .then(
        () => {
          toast.success("Email has been sent successfully.");
          e.target.reset();
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <section id="contact" className=" md:mt-16 md:mb-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto bg-[#E6F4F8] p-10 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <div className=" text-black p-6 rounded-xl">
              <h1 className="text-lg leading-relaxed">Contact Information</h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-md">
                  <MdLocalPhone className="text-xl" />
                </div>
                <span className="text-gray-800 text-base font-medium">
                  +8801871421977
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-md">
                  <FaEnvelope className="text-xl" />
                </div>
                <span className="text-gray-800 text-base font-medium">
                  imrantahir9918@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-md">
                  <FaMapLocationDot className="text-xl" />
                </div>
                <span className="text-gray-800 text-base font-medium">
                  Companiganj, Sylhet, Bangladesh
                </span>
              </div>

              <div className="flex gap-5 pt-4 text-2xl">
                <a
                  href="https://www.linkedin.com/in/imran-ahmed-frontend-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-md hover:bg-blue-100 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Imranahmed935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-md hover:bg-blue-100 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-1/2 bg-white p-8 shadow-md space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  placeholder="example@email.com"
                  className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
