import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import backgroundImg from "../../assets/img/Background.jpg"
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={backgroundImg}
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm-text-5xl text-4xl font-bold text-gray-800">I'm Dennis Anderson</h1>
          <h2 className="flex sm:text-3:xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "Data Visualization Creator",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[50px] w-full">
            <a href="https://www.linkedin.com/in/dja91/">
              <FaLinkedin size={20} className="cursor-pointer" />
            </a>
            <a href="https://github.com/jjac91">
              <FaGithub size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
