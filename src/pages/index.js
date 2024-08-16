import * as React from "react"
import profileImage from "../images/Tim-Dolinšek-scaled.jpg";

const IndexPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar */}
     <aside className="w-2/5 h-screen bg-black text-orange-500 p-10 flex flex-col justify-between fixed font-bebas">
  <div className="flex items-center justify-between space-x-4">
    <h1 className="text-5xl font-bold leading-tight">Tim Dolinšek</h1>
    <img src={profileImage} alt="Tim Dolinšek" className="w-40 h-40 rounded-full object-cover" />
  </div>
  <nav className="space-y-6 font-gloria mt-2">
    <a href="#about" className="block text-2xl hover:text-orange-300">About</a>
    <a href="#projects" className="block text-2xl hover:text-orange-300">Projects</a>
    <a href="#documentation" className="block text-2xl hover:text-orange-300">Documentation</a>
    <a href="#contact" className="block text-2xl hover:text-orange-300">Contact</a>
  </nav>
  <div className="space-y-4 font-gloria">
    <a href="https://github.com/DoliTim" className="block text-lg hover:text-orange-300">GitHub</a>
    <a href="https://linkedin.com" className="block text-lg hover:text-orange-300">LinkedIn</a>
    <a href="mailto:timdolinsek88@gmail.com" className="block text-lg hover:text-orange-300">Email</a>
  </div>
</aside>


      {/* Main Content */}
      <main className="w-3/5 h-screen p-10 ml-auto font-gloria">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm Tim Dolinšek, a system engineer with a passion for cloud computing and DevOps. I specialize in infrastructure automation, server administration, and cloud-based solutions. My work is focused on building scalable, reliable systems that help businesses grow.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Over the years, I've worked on various projects, from setting up cloud infrastructure for startups to optimizing deployment pipelines for established businesses. My goal is to make technology work seamlessly and efficiently.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1: Cloud Automation</h3>
              <p className="text-gray-300">
                A project focused on automating cloud infrastructure deployment using Terraform and AWS. This project helped reduce deployment time by 80% and improved the reliability of the infrastructure.
              </p>
              <a href="https://github.com/DoliTim/cloud-automation" className="text-blue-500 underline mt-2 block">View on GitHub</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 2: DevOps Pipeline</h3>
              <p className="text-gray-300">
                Developed a CI/CD pipeline using Jenkins, Docker, and Kubernetes to automate the testing and deployment of applications. This resulted in faster release cycles and improved code quality.
              </p>
              <a href="https://github.com/DoliTim/devops-pipeline" className="text-blue-500 underline mt-2 block">View on GitHub</a>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="documentation" className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Documentation</h2>
          <p className="text-lg leading-relaxed">
            Here is where you can find my technical documentation, covering topics like cloud infrastructure,
            automation scripts, and system configuration.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg leading-relaxed">
            You can reach me via <a href="mailto:timdolinsek88@gmail.com" className="text-blue-500 underline">email</a>,
            or connect with me on <a href="https://linkedin.com" className="text-blue-500 underline">LinkedIn</a>.
          </p>
        </section>
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
