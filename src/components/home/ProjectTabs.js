import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mernprojects, reactprojects, wpprojects } from "../DataFile/Datafile";
import SectionHeading from "../common-components";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("react-panel");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="max-w-full mx-auto ">
        <SectionHeading
          upperHead="Portfolio"
          titleHead="Explore our"
          mainHead="Portfolio"
        />
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-max mx-auto h-8 md:h-10 lg:h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md "></div>
          <ProjectTabsBtn
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            btnName="React JS"
            panel="react-panel"
          />
          <ProjectTabsBtn
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            btnName="MERN Stack"
            panel="mern-panel"
          />
          <ProjectTabsBtn
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            btnName="WordPress"
            panel="wordpress-panel"
          />
        </div>
        <div className="relative">
          <ProjectTabsContent
            id="react-panel"
            activeTab={activeTab}
            project={reactprojects}
          />
          <ProjectTabsContent
            id="mern-panel"
            activeTab={activeTab}
            cn="absolute top-0"
            project={mernprojects}
          />
          <ProjectTabsContent
            id="wordpress-panel"
            activeTab={activeTab}
            cn="absolute top-0"
            project={wpprojects}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectTabs;

const ProjectTabsContent = ({ id, activeTab, cn, project }) => {
  return (
    <div
      role="tabpanel"
      id={id}
      className={` tab-panel p-4 transition duration-300 ${cn} ${
        activeTab === id ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex flex-wrap">
        {project.map((project, index) => (
          <div key={index} className="w-full md:w-1/3 px-2 mb-8">
            <div className="relative group">
              <img
                className="w-full  max-h-44"
                alt="..."
                src={project.imgUrl}
              />
              <a
                href={project.link}
                className=" absolute inset-0 bg-opacity-50 bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="text-center text-white p-4">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p>{project.description}</p>
                  <br />
                  <p className="font-semibold">Click to View Example</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectTabsBtn = ({ activeTab, handleTabClick, btnName, panel }) => {
  return (
    <button
      role="tab"
      aria-selected={activeTab === panel}
      aria-controls={panel}
      id="tab-1"
      tabIndex={activeTab === panel ? "0" : "-1"}
      className={`relative block h-6 px-2 sm:h-6 sm:px-2 md:h-8 md:px-4 lg:h-10 lg:px-6 tab rounded-full ${
        activeTab === panel ? "bg-white" : ""
      }`}
      onClick={() => handleTabClick(panel)}
    >
      <span className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
        {btnName}
      </span>
    </button>
  );
};
