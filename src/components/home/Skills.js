import React from "react";

const Skills = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Image Grid</h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-center space-x-4">
          <img
            src="skills/html.png"
            alt="Image 1"
            className="w-24 h-24 shadow-2xl shadow-blue-900 opacity-100"
          />
          <img
            src="skills/js.png"
            alt="Image 2"
            className="w-24 h-24 shadow-2xl shadow-blue-900 opacity-100"
          />
          <img
            src="skills/react.png"
            alt="Image 3"
            className="w-24 h-24 shadow-2xl shadow-blue-900 opacity-100"
          />
          <img
            src="skills/node.png"
            alt="Image 4"
            className="w-24 h-24 shadow-2xl shadow-blue-900"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center mt-10 space-x-4">
          <img src="skills/php.png" alt="Image 1" className="w-24 h-24" />
          <img src="skills/wp.png" alt="Image 2" className="w-24 h-24" />
          <img src="skills/mysql.png" alt="Image 3" className="w-24 h-24" />
          <img src="skills/larawel.png" alt="Image 4" className="w-24 h-24" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center mt-10 space-x-4">
          <img src="skills/mongo.png" alt="Image 5" className="w-24 h-24" />
          <img src="skills/git.png" alt="Image 6" className="w-24 h-24" />
          <img src="skills/tailwind.png" alt="Image 7" className="w-24 h-24" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center mt-10 space-x-4">
          <img src="skills/bootstrap.png" alt="Image 8" className="w-24 h-24" />
          <img src="skills/jquery.png" alt="Image 9" className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
