import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import img from "./me.jpg";

// Replace the links with your actual URLs
const icons = [
  { icon: faInstagram, link: "https://www.instagram.com/vatsalpandey_/" },
  { icon: faGithub, link: "https://github.com/vatsalp21" },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/vatsal-pandey-744652249/",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inconsolata flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-8 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold">vatsal</div>
          <div className="text-gray-500">creative visual artist</div>
          <nav className="mt-8">
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-black">
                  about me
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-black">
                  education
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-black">
                  contact
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-black">
                  work
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4">
          {icons.map((item, index) => (
            <a key={index} href={item.link} className="hover:text-black">
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3 p-8 flex justify-end items-center">
        <div className="relative">
          <img
            src={img}
            alt="Modern Renaissance Man"
            className="w-92 h-92   object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2">
            MoDeRn
            <br />
            ReNaISaNCE
            <br />
            MaN
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
