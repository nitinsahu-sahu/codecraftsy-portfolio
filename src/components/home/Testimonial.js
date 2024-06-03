// Testimonial.js
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiSkype } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import SectionHeading from "../common-components";
const members = [
  {
    name: "Priyanka Sen",
    position: "Sr. WordPress Developer",
    description:
      "Skilled IT developer proficient in Wordpress, JavaScript, HTML/CSS, Bootstrap, and PHP. Dedicated to creating dynamic web solutions, leveraging versatile technologies to deliver user-centric experiences and drive digital innovation.",
    imageUrl: "./skills/girl.png",
  },
  {
    name: " Pulkit Amga",
    position: "Sr. WordPress Developer",
    description:
      "Skilled IT developer proficient in Wordpress, JavaScript, HTML/CSS, Bootstrap, and PHP. Dedicated to creating dynamic web solutions, leveraging versatile technologies to deliver user-centric experiences and drive digital innovation.",
    imageUrl: "./skills/girl2.png",
  },
  {
    name: "Nitin Sahu",
    position: "MERN Stack Developer",
    description:
      "Proficient IT developer skilled in React.js, Node.js, JavaScript, HTML/CSS, and Bootstrap/TailwindCSS. Dedicated to crafting efficient web applications, seeking collaborative opportunities to enhance user experiences.",
    imageUrl: "./skills/nitin.png",
  },
  {
    name: "Rajkumar Choudhary",
    position: "React Developer",
    description:
      "Dynamic IT developer adept in React.js, JavaScript, HTML/CSS, and Bootstrap/TailwindCSS. Committed to creating intuitive web solutions, enhancing user experiences, and driving innovation through cutting-edge technologies.",
    imageUrl: "./skills/raj2.png",
  },
];

const Testimonial = () => {
  return (
    <>
      <SectionHeading
        upperHead="TEAM"
        titleHead="Our Designer &"
        mainHead="Developers"
      />

      <div className="shadow-testimonial-shadow">
        <div className="flex flex-wrap justify-center mt-10 bg-white">
          {/* First Column */}
          <div className="flex flex-col w-full md:w-1/2">
            {/* Member 1 */}
            <div className="flex">
              <div className="w-1/2 bg-grey px-4 pt-4">
                <img
                  src={members[0].imageUrl}
                  alt={members[0].name}
                  className=" w-60 h-80"
                />
              </div>
              <div className="w-1/2 p-5">
                <h3
                  className="text-xl font-semibold"
                  style={{
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    marginBottom: 10,
                  }}
                >
                  {members[0].name}
                </h3>
                <div className="border-b-2 border-themeyellow w-fit">
                  <p className="text-gray-600 font-bold">
                    {members[0].position}
                  </p>
                </div>
                <p
                  className="text-gray-600 whitespace-normal mt-4"
                  style={{ fontSize: 15 }}
                >
                  {members[0].description}
                </p>
                <div className="social-menu">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/priyanka-sen-931780188"
                        target="_blank"
                      >
                        <FaLinkedinIn className="icon icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:pspriyanka24997@gmail.com"
                        target="_blank"
                      >
                        <MdMarkEmailUnread className="icon icon-email" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:live:.cid.c9539934222738b9?chat"
                        target="_blank"
                      >
                        <SiSkype className="icon icon-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Member 2 */}
            <div className="flex">
              <div className="w-1/2 p-5">
                <h3
                  className="text-xl font-semibold"
                  style={{
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    marginBottom: 10,
                  }}
                >
                  {members[1].name}
                </h3>
                <div className="border-b-2 border-themeyellow w-fit">
                  <p className="text-gray-600  font-bold">
                    {members[1].position}
                  </p>
                </div>
                <p
                  className="text-gray-600 text-balance m-4"
                  style={{ fontSize: 15 }}
                >
                  {members[1].description}
                </p>
                <div className="social-menu">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/pulkit-amga-ab86ab166"
                        target="_blank"
                      >
                        <FaLinkedinIn className="icon icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:email-pulkit.amga@gmail.com"
                        target="_blank"
                      >
                        <MdMarkEmailUnread className="icon icon-email" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:live:.cid.c83d078bdcdaaa2d?chat"
                        target="_blank"
                      >
                        <SiSkype className="icon icon-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 bg-grey px-4 pt-4">
                <img
                  src={members[1].imageUrl}
                  alt={members[1].name}
                  className=" w-60 h-80"
                />
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="flex flex-col w-full md:w-1/2">
            {/* Member 3 */}
            <div className="flex">
              <div className="w-1/2 bg-grey px-4 pt-4">
                <img
                  src={members[2].imageUrl}
                  alt={members[2].name}
                  className=" w-60 h-80"
                />
              </div>
              <div className="w-1/2 p-5">
                <h3
                  className="text-xl font-semibold"
                  style={{
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    marginBottom: 10,
                  }}
                >
                  {members[2].name}
                </h3>
                <div className="border-b-2 border-themeyellow w-fit">
                  <p className="text-gray-600  font-bold">
                    {members[2].position}
                  </p>
                </div>
                <p
                  className="text-gray-600 text-balance m-4"
                  style={{ fontSize: 15 }}
                >
                  {members[2].description}
                </p>
                <div className="social-menu">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nitin-sahu-b3124919b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                      >
                        <FaLinkedinIn className="icon icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:nitinsahu911111@gmail.com"
                        target="_blank"
                      >
                        <MdMarkEmailUnread className="icon icon-email" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:live:.cid.cd6eb196a32a8ddd?chat"
                        target="_blank"
                      >
                        <SiSkype className="icon icon-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Member 4 */}
            <div className="flex">
              <div className="w-1/2 p-5">
                <h3
                  className="text-xl font-semibold"
                  style={{
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    marginBottom: 10,
                  }}
                >
                  {members[3].name}
                </h3>
                <div className="border-b-2 border-themeyellow w-fit">
                  <p className="text-gray-600  font-bold">
                    {members[3].position}
                  </p>
                </div>
                <p
                  className="text-gray-600 text-balance m-4"
                  style={{ fontSize: 15 }}
                >
                  {members[3].description}
                </p>
                <div className="social-menu">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rajkumar-choudhry-54611a278/"
                        target="_blank"
                      >
                        <FaLinkedinIn className="icon icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:raj.choudhary1372@gmail.com"
                        target="_blank"
                      >
                        <MdMarkEmailUnread className="icon icon-email" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:live:.cid.74fab4a1a147e99f?chat"
                        target="_blank"
                      >
                        <SiSkype className="icon icon-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 bg-grey px-4 pt-4">
                <img
                  src={members[3].imageUrl}
                  alt={members[3].name}
                  className=" w-60 h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
