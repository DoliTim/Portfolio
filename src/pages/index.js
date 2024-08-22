import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import profileImage from "../images/Tim-Dolinšek-scaled.jpg";
import backgroundImage from "../images/beige-iphone-1125-x-2436-j9s93wpzj16y2r9u.jpg";
import logo from "../images/icon.png";
import cvImage1 from "../images/cv-page-1.png"; 
import cvImage2 from "../images/cv-page-2.png"; 


const IndexPage = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCVExpanded, setIsCVExpanded] = useState(false); // State for CV section

  const toggleAboutSection = () => {
    setIsAboutExpanded(!isAboutExpanded);
  };

  const toggleCVSection = () => {
    setIsCVExpanded(!isCVExpanded); // Toggle CV section
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
{/* Mobile Top Bar */}
<header className="w-full p-4 fixed top-0 left-0 z-30 bg-black flex items-center justify-between lg:hidden">
  <img
    src={profileImage}
    alt="Tim Dolinšek"
    className="w-10 h-10 rounded-full object-cover"
  />
  <h1 className="text-xl font-bold text-orange-500 font-bebas">Tim Dolinšek</h1>
  <img
    src={logo}
    alt="Logo"
    className="w-8 h-8" // Adjust size as needed
  />
</header>

      {/* Left Sidebar */}
      <motion.aside
        className={`w-full lg:w-1/3 lg:h-screen bg-black text-orange-500 p-6 lg:p-10 flex flex-col justify-between lg:fixed font-bebas transition-transform duration-300 ${
          isNavOpen ? "transform translate-x-0" : "transform translate-y-full lg:translate-x-0"
        }`}
        initial={{ y: "100%" }} // Mobile: Start at bottom
        animate={isLoaded ? { y: 0 } : {}} // Animate to the bottom for mobile
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Only show on larger screens */}
        <div className="hidden lg:flex items-center justify-between mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Tim Dolinšek</h1>
          <img
            src={profileImage}
            alt="Tim Dolinšek"
            className="w-32 lg:w-48 h-32 lg:h-48 rounded-full object-cover"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-6 lg:space-y-8 bg-opacity-50 bg-black p-4 rounded-lg">
          {["About", "Projects", "Documentation" , "CV"].map((item, index) => (
            <motion.a
              href={`#${item.toLowerCase()}`}
              key={index}
              className="block text-2xl lg:text-3xl relative hover:text-orange-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="space-y-4 lg:space-y-6 mt-10 bg-opacity-50 bg-black p-4 rounded-lg">
          <motion.a
            href="https://github.com/DoliTim"
            className="block text-md hover:text-orange-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="block text-md hover:text-orange-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:timdolinsek88@gmail.com"
            className="block text-md hover:text-orange-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Email
          </motion.a>
        </div>
      </motion.aside>


     {/* Main Content */}
<main className="w-full lg:w-3/5 p-8 lg:p-10 ml-auto flex flex-col font-roboto relative mt-20 lg:mt-0">
  {/* Right Background Image */}
  <div
    className="fixed top-0 right-0 w-full lg:w-3/5 h-screen bg-cover bg-center z-0"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  ></div>

<div className="relative z-10 flex flex-col lg:items-start mt-16 lg:mt-0">
  <section id="about" className="mb-16 lg:mb-20 flex flex-col">
    <div className="flex flex-row items-left">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 mr-2">
        About Me
      </h2>
      <button
        onClick={toggleAboutSection}
        className="text-2xl lg:text-3xl font-bold bg-orange-500 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 ml-4"
      >
        {isAboutExpanded ? "-" : "+"}
      </button>
    </div>

    {/* Always visible text */}
    <p className="text-base lg:text-lg leading-relaxed">
      I’m Tim Dolinšek, a dedicated system engineer and DevOps specialist...
    </p>

    {/* Expandable/Collapsible Section */}
    <motion.div
      initial={isAboutExpanded ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
      animate={isAboutExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className="w-full"
    >
      {isAboutExpanded && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col"
        >
        <p className="text-base lg:text-lg leading-relaxed mt-4">
  I am currently in my second year of System Engineering, maintaining an excellent GPA of 9.3. I have also earned certification as a{" "}
  <a
    href="https://www.credly.com/badges/a73b5f27-d752-4e11-a50b-5802db5b66f2/linked_in?t=sgxv1r"
    className="text-orange-500 hover:text-orange-300 underline"
  >
    Google Associate Cloud Engineer
  </a>
  , which has equipped me with advanced knowledge in cloud technologies and DevOps practices. During my internship at{" "}
  <a
    href="https://www.nicehash.com"
    className="text-orange-500 hover:text-orange-300 underline"
  >
    NiceHash
  </a>
  , I gained hands-on experience in server administration, cloud computing, network security, and the automation of CI/CD processes using Google Cloud Platform. In addition to working on full server systems, I focused on implementing solutions that enhance security and ensure optimal performance.
  <br />
  <br />
  Beyond my technical expertise, I bring valuable teamwork experience from my time as a member of the ensemble at the Slovene National Theatre Maribor. This role helped me develop problem-solving skills and adaptability, qualities that I believe are crucial in the IT sector.
  <br />
  <br />
  In my free time, I stay engaged with software engineering, 3D printing, and working on hobby projects to keep learning and bring my ideas to life.
</p>

        </motion.div>
      )}
    </motion.div>
    </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16 lg:mb-20 flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Projects</h2>
            <div className="space-y-8 flex flex-col">
              {[
                {
                  title: "Academia",
                  description: "Medicine Tracker is a web application designed to help patients and doctors manage and track medication prescriptions.",
                  technologies: "HTML, CSS, JavaScript, Python, Flask, SQLite",
                  link: "https://github.com/DoliTim/Academia"
                },
                {
                  title: "znamNEznam",
                  description: "A platform to find and offer tutoring services.",
                  technologies: "Python, Django, React, SQLite",
                  link: "https://github.com/DoliTim/znamNEznam"
                },
                {
                  title: "Portfolio",
                  description: "This portfolio site itself, built using Gatsby.js and styled with Tailwind CSS.",
                  technologies: "Gatsby.js, Tailwind CSS",
                  link: "https://github.com/DoliTim/Portfolio"
                },
                {
                  title: "Prime Naloga",
                  description: "A C++ project focused on mathematical algorithms, including prime number calculations.",
                 

        description: "A C++ project focused on mathematical algorithms, including prime number calculations.",
        technologies: "C++",
        link: "https://github.com/DoliTim/primeNaloga"
      },
      {
        title: "Syskit Junior Cloud DevOps Assignment",
        description: "A DevOps project that demonstrates cloud infrastructure automation using Terraform and CI/CD pipelines.",
        technologies: "Terraform, AWS, Jenkins",
        link: "https://github.com/DoliTim/syskit-assignment"
      }
    ].map((project, index) => (
      <motion.div
        key={index}
        className="bg-white bg-opacity-20 p-6 rounded-lg flex flex-col transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-70 hover:scale-105 hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-xl lg:text-2xl font-semibold mb-2">{project.title}</h3>
        {/* Updated text color from gray to white */}
        <p className="text-white text-sm lg:text-base hover:text-black transition-colors duration-300">
          {project.description}
        </p>
        <p className="text-orange-500 text-sm">{`Technologies: ${project.technologies}`}</p>
        <a href={project.link} className="text-orange-500 hover:text-orange-300 underline mt-2 block">
          View on GitHub
        </a>
      </motion.div>
    ))}
  </div>
</section>





          {/* Documentation Section */}
          <section id="documentation" className="mb-16 lg:mb-20 flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Documentation</h2>
            <p className="text-base lg:text-lg leading-relaxed">
              Here is where you can find my technical documentation...
            </p>
          </section>

     {/* CV Section */}
<section id="cv" className="mb-16 lg:mb-20 flex flex-col">
  <div className="flex flex-row items-left">
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 mr-2">
      My CV
    </h2>
    <button
      onClick={toggleCVSection}
      className="text-2xl lg:text-3xl font-bold bg-orange-500 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 ml-4"
    >
      {isCVExpanded ? "-" : "+"}
    </button>
  </div>

  {/* Always visible CV description */}
  <p className="text-base lg:text-lg leading-relaxed">
    You can view my CV below for more details on my professional background and experiences...
  </p>

  {/* Expandable/Collapsible Section */}
  <motion.div
    initial={isCVExpanded ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
    animate={isCVExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    style={{ overflow: "hidden" }}
    className="w-full"
  >
    {isCVExpanded && (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-start"
      >
        <img
          src={cvImage1}
          alt="CV Page 1"
          className="mb-8"
        />
        <img
          src={cvImage2}
          alt="CV Page 2"
          className="mb-8"
        />
      </motion.div>
    )}
  </motion.div>
</section>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;