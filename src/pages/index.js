import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import profileImage from "../images/Tim-Dolinšek-scaled.jpg";
import backgroundImage from "../images/beige-iphone-1125-x-2436-j9s93wpzj16y2r9u.jpg"; // Make sure to import your background image here

const IndexPage = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const toggleAboutSection = () => {
    setIsAboutExpanded(!isAboutExpanded);
  };

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
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white font-newamsterdam">
      {/* Left Sidebar */}
      <motion.aside
        className="w-full lg:w-2/5 h-auto lg:h-screen bg-black text-orange-500 p-10 flex flex-col justify-between lg:fixed font-bebas"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Tim Dolinšek</h1>
            <img
              src={profileImage}
              alt="Tim Dolinšek"
              className="w-24 lg:w-40 h-24 lg:h-40 rounded-full object-cover"
            />
          </div>
          <nav className="space-y-4 lg:space-y-6 font-gloria">
            {["About", "Projects", "Documentation", "Contact"].map((item, index) => (
              <motion.a
                href={`#${item.toLowerCase()}`}
                key={index}
                className="block text-xl lg:text-2xl relative hover:text-orange-300"
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
        </div>
        <div className="space-y-4 font-gloria mt-8 lg:mt-0">
          <motion.a
            href="https://github.com/DoliTim"
            className="block text-lg hover:text-orange-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="block text-lg hover:text-orange-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:timdolinsek88@gmail.com"
            className="block text-lg hover:text-orange-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Email
          </motion.a>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/5 p-8 lg:p-10 ml-auto font-newamsterdam relative">
        {/* Right Background Image */}
        <div
          className="fixed top-0 right-0 w-full lg:w-3/5 h-screen bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        <div className="relative z-10"> {/* Ensure content is above background */}
          {/* Always Visible About Section */}
          <section id="about" className="mb-16 lg:mb-20">
            <div className="cursor-pointer" onClick={toggleAboutSection}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                About Me {isAboutExpanded ? "-" : "+"}
              </h2>
              {/* First paragraph always visible */}
              <p className="text-base lg:text-lg leading-relaxed">
                I’m Tim Dolinšek, a dedicated system engineer and DevOps specialist...
              </p>
            </div>

            {/* Expandable/Collapsible Section */}
          <motion.div
            initial={isAboutExpanded ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
            animate={isAboutExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {isAboutExpanded && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-base lg:text-lg leading-relaxed mt-4">
                  During my internship at <a href="https://www.nicehash.com" className="text-orange-500 hover:text-orange-300 underline">NiceHash</a>, I gained significant experience in cloud technologies, network security, and CI/CD automation using Google Cloud Platform. I was responsible for managing server infrastructures, implementing security protocols, and optimizing system performance, which provided me with a solid foundation in DevOps and systems engineering.
                </p>
                <p className="text-base lg:text-lg leading-relaxed mt-4">
                  In my free time, I enjoy diving deeper into software engineering, constantly learning and expanding my skill set. My hands-on experience, both in school and during internships, has provided me with a strong foundation in systems administration and development operations, equipping me to take on real-world challenges in tech. With a unique blend of technical expertise and adaptability, I am excited to contribute to innovative projects that push the boundaries of technology and continue to grow in my career.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>


          <section id="projects" className="mb-16 lg:mb-20">
  <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Projects</h2>
  <div className="space-y-8">
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl lg:text-2xl font-semibold mb-2">Academia</h3>
      <p className="text-gray-300 text-sm lg:text-base">
        Medicine Tracker is a web application designed to help patients and doctors manage and track medication prescriptions.
      </p>
      <p className="text-orange-500 text-sm">Technologies: HTML, CSS, JavaScript, Python, Flask,SQlite</p>
      <a href="https://github.com/DoliTim/Academia" className="text-orange-500 hover:text-orange-300 underline mt-2 block">View on GitHub</a>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl lg:text-2xl font-semibold mb-2">znamNEznam</h3>
      <p className="text-gray-300 text-sm lg:text-base">
        A platform to find and offer tutoring services.
      </p>
      <p className="text-orange-500 text-sm">Technologies: Python, Django, React, SQlite</p>
      <a href="https://github.com/DoliTim/znamNEznam" className="text-orange-500 hover:text-orange-300 underline mt-2 block">View on GitHub</a>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl lg:text-2xl font-semibold mb-2">Portfolio</h3>
      <p className="text-gray-300 text-sm lg:text-base">
        This portfolio site itself, built using Gatsby.js and styled with Tailwind CSS.
      </p>
      <p className="text-orange-500 text-sm">Technologies: Gatsby.js, Tailwind CSS</p>
      <a href="https://github.com/DoliTim/Portfolio" className="text-orange-500 hover:text-orange-300 underline mt-2 block">View on GitHub</a>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl lg:text-2xl font-semibold mb-2">Prime Naloga</h3>
      <p className="text-gray-300 text-sm lg:text-base">
        A C++ project focused on mathematical algorithms, including prime number calculations.
      </p>
      <p className="text-orange-500 text-sm">Technologies: C++</p>
      <a href="https://github.com/DoliTim/primeNaloga" className="text-orange-500 hover:text-orange-300 underline mt-2 block">View on GitHub</a>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl lg:text-2xl font-semibold mb-2">Syskit Junior Cloud DevOps Assignment</h3>
      <p className="text-gray-300 text-sm lg:text-base">
        A DevOps project that demonstrates cloud infrastructure automation using Terraform and CI/CD pipelines.
      </p>
      <p className="text-orange-500 text-sm">Technologies: Terraform, AWS, Jenkins</p>
      <a href="https://github.com/DoliTim/syskit-assignment" className="text-orange-500 hover:text-orange-300 underline mt-2 block">View on GitHub</a>
    </div>
  </div>
</section>

          {/* Documentation Section */}
          <section id="documentation" className="mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Documentation</h2>
            <p className="text-base lg:text-lg leading-relaxed">
              Here is where you can find my technical documentation...
            </p>
          </section>

          {/* Download CV Section */}
          <section id="cv" className="mt-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Download My CV</h2>
            <a href="/files/PR1-Tim_Dolinsek.pdf" download className="text-orange-500 hover:text-orange-300 underline">Download CV (PDF)</a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
