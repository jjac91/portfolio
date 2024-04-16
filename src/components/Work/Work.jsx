import React from "react";
import WorkItem from "../WorkItem/WorkItem";

const data = [
  {
    year: 2023,
    title: "Front-End Developer Fellow",
    company: "Tech Impact Data Innovation Lab",
    duration: "Currently Employed",
    details: [
      "Contribute to UI/UX design efforts by delivering wireframes, storyboards, prototypes, and mock-ups of data products.",
      "Implement UI/UX prototypes into functional applications.",
      "Define and iterate through application designs, refining structural and aesthetic decisions based on user testing and client feedback.",
      "Author and document reusable code and libraries for routine processes.",
      "Develop user-facing features in adherence with Lab coding and collaboration standards.",
      "Collaborate with other members of Fellowship in the design, wireframing and final build of production-grade data products."
    ],
  },
   {
    year: 2022,
    title: "Software Engineering Student",
    company: "Springboard",
    duration: "1 year",
    details: [
     "Completed 700+ hours of hands-on course material mastering full stack development, databases, data structures, and algorithms",
     "Created 2 Capstone Projects which consisted of developing a Back End RESTful API for an SQL database that is accessed by a Front End web app",
     "Learned how to use a multitude of different programming tools including: JavaScript, Python, Flask, Node.js, Express, PostgreSQL, Jinja, and Flask"
    ],
  }
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-4">
        Software Development Experience
      </h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          company={item.company}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
