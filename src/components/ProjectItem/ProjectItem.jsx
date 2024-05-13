import React from "react";
import TechStack from "./TechStack";

const ProjectItem = ({
  img,
  altText,
  title,
  url,
  repo,
  description,
  icons,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={altText}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <h3 className="font-bold text-white tracking-wider text-center pt-2 md:text-sm lg:text-lg">
          {title}
        </h3>
        <p className="text-white text-center text-sm p-2 pb-4 md:text-xs lg:text-base">{description}</p>
        <div className="w-full flex items-center justify-center space-x-2">
          <a
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white rounded-full w-28 text-sm text-center md:text-xs lg:text-base"
            href={url}
          >
            Visit
          </a>
          {/* <a
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white rounded-full w-28 text-sm text-center md:text-xs lg:text-base"
            href={repo}
          >
            Repository
          </a> */}
        </div>
        <div className="p-2">
          <h5 className="text-white tracking-wider text-center text-sm text-center md:text-xs lg:text-base">
            Created with:
            <TechStack icons={icons} />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
