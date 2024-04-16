import { useState } from "react";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <SideNav />
        <Main />
        <Work />
        <Projects/>
        <Contact />
      </div>
    </>
  );
}

export default App;
