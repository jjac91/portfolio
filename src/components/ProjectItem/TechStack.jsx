import React from "react";
import { SiReact, SiMapbox, SiCss3 } from "react-icons/si";
import { IconContext } from "react-icons";

const TechStack = ({ icons }) => (
  <div className="flex flex-wrap justify-center">
    <IconContext.Provider value={{ className: "md:text-sm lg:text-lg" }}>
      {icons.map((icon, index) => {
        let iconComponent;
        let title;

        switch (icon.toLowerCase()) {
          case "react":
            iconComponent = <SiReact />;
            title = "React";
            break;
          case "mapbox":
            iconComponent = <SiMapbox />;
            title = "Mapbox";
            break;
          case "css3":
            iconComponent = <SiCss3 />;
            title = "CSS3";
            break;
          default:
            iconComponent = null;
            title = "";
        }

        return (
          <div key={index} className="p-2">
            {iconComponent && (
              <span title={title} className="cursor-help">
                {iconComponent}
              </span>
            )}
          </div>
        );
      })}
    </IconContext.Provider>
  </div>
);

export default TechStack;
