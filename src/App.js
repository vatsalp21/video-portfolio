import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import img from "./me.jpg";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Home from "./pages/Home";

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
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-inconsolata flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-between">
          <div>
            <div className="text-2xl font-bold">
              <Link to="/">vatsal</Link>
            </div>
            <div className="text-gray-500">creative visual artist</div>
            <nav className="mt-8">
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-black">
                    about me
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="hover:text-black">
                    education
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-black">
                    contact
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-black">
                    work
                  </Link>
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
        <div className="w-full md:w-2/3 p-8 flex justify-start items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
