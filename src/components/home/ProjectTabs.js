import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProjectTabs = () => {
    const [activeTab, setActiveTab] = useState('react-panel');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const wpprojects = [
        {
            title: "Wall Street Metal",
            description: "The precious metals market is built for corporations, governments, and fund managers. We’re built for individuals like retired veterans and small business owners. We’re here for you.",
            imgUrl: './wsm.png',
            webLink: 'https://wallstreetmetals.com/',
        },
        {
            title: "Rock Star",
            description: "Rockstar Sealing Systems is a leading provider of cleaning and sealing solutions for all natural stone surfaces.",
            imgUrl: "./rs.png",
            webLink: 'https://www.rockstarsealing.com/',

        },
        {
            title: "Serta",
            description: "Discover a comfortable. supportive matress.",
            imgUrl: 'serta.png',
            webLink: 'https://www.serta.com/',

        },
        {
            title: "SkipStone",
            description: "We secure our financial resources independently, enabling us to produce economical, cost-effective films.",
            imgUrl: 'skipstone.png',
            webLink: 'https://skipstonepictures.com/',

        },
        {
            title: "Pratham Career Institue",
            description: "Our aim is not only to get you to the top medical college but more importantly we also take you on the path of realization to make you discuss your latest potential and top this potential to bring out best of you.",
            imgUrl: './pci.png',
            webLink: 'https://prathamcareerinstitute.com/',

        },
    ];
    const reactprojects = [
        {
            title: "Whizoid Studio",
            description: "Crafting Solutions For The Modern World.",
            imgUrl: "./whizoid.png",
            webLink: "https://www.whizoid.com/",
        },
        {
            title: "Whizoid Studio",
            description: "Crafting Solutions For The Modern World.",
            imgUrl: "./whizoid.png",
            webLink: "https://vvmovil.com/",
        },
        {
            title: "Kareo",
            description: "Kareo and PatientPop have joined forces to improve the patient experience and fully support providers, ushering in a new era of connected practice.",
            imgUrl: './kareo-mern.png',
            webLink: 'https://www.kareo.com/ehr',
        },
        {
            title: "Whizoid Studio",
            description: "Crafting Solutions For The Modern World.",
            imgUrl: "./whizoid.png",
            webLink: "https://www.whizoid.com/",
        },
    ];
    const mernprojects = [
        {
            title: "Kareo",
            description: "Kareo and PatientPop have joined forces to improve the patient experience and fully support providers, ushering in a new era of connected practice.",
            imgUrl: './kareo-mern.png',
            webLink: 'https://www.kareo.com/ehr',
        },
        {
            title: "Whizoid Studio",
            description: "Crafting Solutions For The Modern World.",
            imgUrl: "./whizoid.png",
            webLink: "https://www.whizoid.com/",
        },
        {
            title: "Kareo",
            description: "Kareo and PatientPop have joined forces to improve the patient experience and fully support providers, ushering in a new era of connected practice.",
            imgUrl: './kareo-mern.png',
            webLink: 'https://www.kareo.com/ehr',
        },
        {
            title: "Whizoid Studio",
            description: "Crafting Solutions For The Modern World.",
            imgUrl: "./whizoid.png",
            webLink: "https://www.whizoid.com/",
        },
    ];
    return (
        <>
            <div className="max-w-5xl mx-auto px-8 sm:px-0 ">
                <div
                    role="tablist"
                    aria-label="tabs"
                    className="relative w-max mx-auto h-8 md:h-10 lg:h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
                >
                    <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md "></div>
                    <ProjectTabsBtn activeTab={activeTab} handleTabClick={handleTabClick} btnName="React JS" panel="react-panel" />
                    <ProjectTabsBtn activeTab={activeTab} handleTabClick={handleTabClick} btnName="MERN Stack" panel="mern-panel" />
                    <ProjectTabsBtn activeTab={activeTab} handleTabClick={handleTabClick} btnName="WordPress" panel="wordpress-panel" />
                </div>
                <div className="mt-6 relative rounded-3xl ">
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
    )
}

export default ProjectTabs


const ProjectTabsContent = ({ id, activeTab, cn, project }) => {
    return (
        <div
            role="tabpanel"
            id={id}
            className={` tab-panel p-4 transition duration-300 bg-purple-50 rounded-2xl ${cn} ${activeTab === id ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
            <div className="flex flex-wrap mx-2.5 gap-1.5 items-center my-2 ">
                {
                    project.map((pro, index) => <div key={index} className="relative block w-full md:w-[49%] lg:w-80 group ">
                        <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-60 rounded-2xl" src={pro.imgUrl} />
                        <div className="relative p-5">
                            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-2 rounded-lg shadow-lg">
                                    <p className="text-lg text-gray-800 font-bold">{pro.title}</p>
                                    <Link to={pro.webLink} target="_blank">
                                        <button className="px-4 py-2 text-sm text-white bg-green-600">View project</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

const ProjectTabsBtn = ({ activeTab, handleTabClick, btnName, panel }) => {
    return (
        <button
            role="tab"
            aria-selected={activeTab === panel}
            aria-controls={panel}
            id="tab-1"
            tabIndex={activeTab === panel ? '0' : '-1'}
            className={
                `relative block h-6 px-2 sm:h-6 sm:px-2 md:h-8 md:px-4 lg:h-10 lg:px-6 tab rounded-full ${activeTab === panel ? 'bg-white' : ''}`
            }
            onClick={() => handleTabClick(panel)}
        >
            <span className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">{btnName}</span>
        </button>
    )
}


