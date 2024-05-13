import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import UnderservedImg from "../../assets/img/Underserved.png";
import WsireImg from "../../assets/img/Wsire.png"
import EEIF from "../../assets/img/EEIF.png"

const ProjectArr = [
  {
    img: UnderservedImg,
    alt: "Screenshot of Recidivism and Gerrymandering Website",
    url: "https://innovation-underserved.pages.dev/",
    title: "Recidivism and Prison Gerrymandering",
    repo: "https://github.com/de-data-lab/innovation-underserved",
    description:
      "A website created to spotlight two criminal justice policy issues, offering a comparative analysis between Delaware and the wider United States.",
    icons: ["react", "css3", "mapbox"],
  },
  {
    img: WsireImg,
    alt: "Screenshot of Social Impact Reporting Project",
    url: "https://innovation-underserved.pages.dev/",
    title: "WSGT Social Impact Report",
    repo: "https://github.com/de-data-lab/west-end-social-impact-report",
    description:
      "A dashboard created for a local non-profit West Side Grows Together to track its social impact on its community. Password: Rncdd20!23",
    icons: ["react", "css3", "mapbox"],
  },
  {
    img: EEIF,
    alt: "Screenshot of Delaware Energy Investment Fund Tracker",
    url: "https://b1f7cd24.dsha-react.pages.dev/",
    title: "Delaware Energy Investment Fund Tracker",
    repo: "https://github.com/de-data-lab/west-end-social-impact-report",
    description:
      "A tool created to help visualize the location of Energy Efficiency Investments Funding provided by the state of Delaware and to measure their impact.",
    icons: ["react", "css3", "mapbox"],
  },
];
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Projects that I have created or contributed a meaningful amount to.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {ProjectArr.map((project, index) => (
          <ProjectItem
            img={project.img}
            url={project.url}
            title={project.title}
            key={index}
            description={project.description}
            // repo={project.repo}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
