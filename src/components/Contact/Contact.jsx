import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
      <p className="text-center py-8">
        Please feel free to get in contact with me through any of the following:
      </p>
      <div className="flex justify-center items-center space-x-8">
        <a href="mailto:denjand91@gmail.com">
          <FaEnvelope size={40} className="cursor-pointer" color="#001b5e" />
        </a>
        <a href="https://www.linkedin.com/in/dja91/">
          <FaLinkedin size={40} className="cursor-pointer" color="#001b5e" />
        </a>
        <a href="https://github.com/jjac91">
          <FaGithub size={40} className="cursor-pointer" color="#001b5e" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
