import React from "react";
import ProjectSlider from "./ProjectSlider";
import ContactUs from "../contactus/ContactUs";
import ProjectTabs from "./ProjectTabs";
import Skills from "./Skills";
import SingleProjectCard from "./Circle";

const Home = () => {
  return (
    <>
      <section id="home" className="w-11/12 mx-auto my-5 shadow-random-shadow">
        <ProjectSlider />
      </section>
      <section id="projectTab" className="mt-10 py-8">
        <ProjectTabs />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact" className="md:mt-16">
        <ContactUs />
      </section>
      <section>
        <SingleProjectCard />
      </section>
    </>
  );
};

export default Home;
