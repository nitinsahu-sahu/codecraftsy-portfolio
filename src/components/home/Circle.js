import React from 'react'
import { GiTechnoHeart } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";


const SingleProjectCard = () => {
  const projects = [
    {
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      link: 'agency.html',
      title: 'Agency',
      description: 'Customize your agency presentation with many combinations.',
    },
    {
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      link: 'houses.html',
      title: 'Company',
      description: 'Create a simple and elegant presentation page for your company or enterprise.',
    },
    {
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      link: 'startup.html',
      title: 'Startup',
      description: 'Present your startup team in an unique and beautiful way.',
    },
    {
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      link: 'photo.html',
      title: 'Portfolio',
      description: 'Create a simple and elegant portfolio page for your projects.',
    },
  ];
  return (
    <div className="flex flex-wrap mx-4">
      {projects.map((project, index) => (
        <div key={index} className="w-full md:w-1/3 px-2 mb-8">
          <div className="relative group">
            <img className="w-full" alt="..." src={project.imgSrc} />
            <a href={project.link} className="absolute inset-0 bg-opacity-50 bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
  )
}

export default SingleProjectCard