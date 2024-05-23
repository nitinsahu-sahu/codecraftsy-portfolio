import React from "react";

const images = [
  {
    src: "./skills/center-logo.png",

    alt: "Avtar",
    width: 60,
    height: 60,
    className: "skills-integration__skills block avtar",
  },
  {
    src: "./skills/nodejs.png",

    alt: "Node",
    width: 60,
    height: 60,

    title: "Node",
    className:
      "skills-integration__link skills-integration--node skills-integration--9  hidden lg:block",
  },
  {
    src: "./skills/html.png",

    alt: "HTML",
    width: 60,
    height: 59,

    title: "HTML",
    className:
      "skills-integration__link skills-integration--laravel skills-integration--2 hidden lg:block",
  },
  {
    src: "./skills/css.png",

    alt: "CSS",
    width: 49,
    height: 69,

    title: "CSS",
    className:
      "skills-integration__link skills-integration--css skills-integration--3 hidden lg:block",
  },
  {
    src: "./skills/javascript.png",

    alt: "JavaScript",
    width: 40,
    height: 40,

    title: "JavaScript",
    className:
      "skills-integration__link skills-integration--js skills-integration--4 hidden lg:block",
  },

  {
    src: "./skills/laravel.png",

    alt: "Laravel",
    width: 60,
    height: 64,

    title: "Laravel",
    className:
      "skills-integration__link skills-integration--laravel skills-integration--5 d-block",
  },
  {
    src: "./skills/mysql.png",

    alt: "Mysql",
    width: 60,
    height: 60,

    title: "Mysql",
    className:
      "skills-integration__link skills-integration--mysql skills-integration--6 d-block",
  },
  {
    src: "./skills/wordpress.png",

    alt: "Wordpress",
    width: 60,
    height: 61,

    title: "Wordpres",
    className:
      "skills-integration__link skills-integration--wordpress skills-integration--7 d-block",
  },
  {
    src: "./skills/mongodb.png",

    alt: "MondoDb",
    width: 44,
    height: 48,

    title: "MondoDb",
    className:
      "skills-integration__link skills-integration--mongodb skills-integration--8 d-block",
  },
  {
    src: "./skills/bootstrap.png",

    alt: "Bootstrap",
    width: 56,
    height: 39,

    title: "Bootstrap",
    className:
      "skills-integration__link skills-integration--bootstrap skills-integration--1  d-block",
  },
  {
    src: "./skills/tailwind.png",

    alt: "Tailwind",
    width: 60,
    height: 60,

    title: "Tailwind",
    className:
      "skills-integration__link skills-integration--tailwind skills-integration--10 d-block",
  },
  {
    src: "./skills/reactjs.png",

    alt: "React",
    width: 60,
    height: 60,

    title: "React Js",
    className:
      "skills-integration__link skills-integration--react skills-integration--11 d-block",
  },
  {
    src: "./skills/php.png",

    alt: "Php",
    width: 60,
    height: 42,

    title: "Php",
    className:
      "skills-integration__link skills-integration--php skills-integration--12 d-block",
  },
  {
    src: "./skills/git.png",

    alt: "Git",
    width: 60,
    height: 60,

    title: "Git",
    className:
      "skills-integration__link skills-integration--git skills-integration--13 hidden lg:block",
  },
  {
    src: "./skills/jquery.png",

    alt: "Jquery",
    width: 60,
    height: 62,

    title: "Jquery",
    className:
      "skills-integration__link skills-integration--jquery skills-integration--14 hidden lg:block",
  },
  {
    src: "./skills/figma.png",

    alt: "Figma",
    width: 60,
    height: 62,

    title: "Figma",
    className:
      "skills-integration__link skills-integration--figma skills-integration--15 hidden lg:block",
  },
  {
    src: "./skills/vs.png",

    alt: "Visual studio",
    width: 41,
    height: 34,
    title: "Visual studio",
    className:
      "skills-integration__link skills-integration--vs skills-integration--16 hidden lg:block",
  },
];

const Skills = () => {
  return (
    <div className="">
      <div className="skills-integration overflow-hidden relative skills-integration--animate">
        <div className="skills-integration__container">
          <div className="relative">
            {images.map((image, index) => (
              <a
                key={index}
                className={image.className}
                href={image.href}
                title={image.title}
              >
                <div className="relative">
                  <div className="skills-integration__item flex items-center justify-center">
                    <img
                      className="faded lazy-loaded"
                      data-src={image.dataSrc}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      src={image.src}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
