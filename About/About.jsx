import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am a passionate front-end developer focused on building responsive, user-friendly, and visually engaging web applications.
                I work with HTML, CSS, JavaScript, and modern frameworks like React to create seamless digital experiences.
               I enjoy staying up to date with the latest web development trends, including UI/UX design, performance optimization, and responsive design.
               My goal is to craft dynamic and interactive interfaces that enhance user experience while ensuring efficiency and scalability.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Additionally, I focus on database development, working with SQL databases like MySQL and PostgreSQL, as well as exploring NoSQL solutions like MongoDB to efficiently manage and structure data. 
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                On the backend, I am exploring Java-based frameworks like Spring Boot to develop scalable and secure applications.
               I enjoy staying up to date with modern web development trends, optimizing performance, and enhancing user experiences through both front-end and backend technologies. 
               My goal is to become a well-rounded developer, capable of building full-stack applications that are both functional and visually engaging. 🚀
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
