import React from "react";
import ProjectSlider from "./ProjectSlider";
import ContactUs from "../contactus/ContactUs";
import ProjectTabs from "./ProjectTabs";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <section id="home" className="w-11/12 mx-auto my-5 shadow-random-shadow">
        <ProjectSlider />
      </section>
      <section id="projectTab" className="mt-10">
        <ProjectTabs />
      </section>


      <section>
        <Skills />
      </section>
      <section id="contact md:mt-16">
        <ContactUs />
      </section>
    </>
  );
};

export default Home;
