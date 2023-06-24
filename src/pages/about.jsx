import React from "react";
import Typed from 'react-typed';
import { GoLocation } from 'react-icons/go'
import { BiCodeCurly } from 'react-icons/bi'
import { FaGithub, FaTwitter, FaTelegram, FaLinkedin, FaEnvelope, FaCloudDownloadAlt } from 'react-icons/fa'
import Scroll from '../utils/scroll'

function About() {
  return (
    <div className="h-[100vh] flex justify-center items-center  dark:bg-black" id="about">
      <div className="flex flex-col justify-center bg-white dark:bg-gray-900 p-[2.5rem] md:p-[2rem] rounded-lg shadow-lg w-[70vw] md:w-[85vw] min-h-[50vh]">
        <div className="block bg-white dark:bg-gray-900 rounded-full mx-auto -mt-12 md:-mt-20 lg:-mt-24 h-32 w-32 lg:h-40 lg:w-40 bg-cover bg-center border-4 border-blue-200">
          <img src="https://avatars.githubusercontent.com/u/47731399" alt="github_image" className=" rounded-full w-[10rem]" />
        </div>
        <h1 className="p-3 text-2xl lg:text-3xl text-center text-gray-600 dark:text-gray-200 uppercase">Chinthaka Kasun</h1>
        <div className="flex flex-col gap-4">
          <p className="flex dark:text-gray-400 items-center gap-2"> <BiCodeCurly />
            <Typed
              strings={['Software Developer', 'Open Source Contributor', 'JavaScript Developer', 'Node.js Developer', 'React Developer', 'Full Stack Developer', 'Web Developer']}
              typeSpeed={50}
              backSpeed={60}
              loop
            /> </p>
          <p className="flex dark:text-gray-400 items-center gap-2"> <GoLocation /> Ginigathena, Sri Lanka </p>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300 text-justify text-sm">
            Dynamic, detail-oriented Software Developer Skilled in a variety of programming languages including Python, JavaScript, and Node.js. With a solid foundation in logic and development, I possess extensive knowledge of programming and computer applications.
            Undergraduate of Rajarata University of Sri Lanka, Faculty of Technology Department of Information and Communication Technology. BICT (Hons) Degree.
          </p>
          <div className="flex gap-3 md:justify-around">
            <button className="rounded-full dark:bg-blue-800 bg-blue-600 px-3 py-2 w-fit text-sm text-white dark:text-gray-300 md:place-self-center hover:bg-blue-900" onClick={() => { Scroll('contact') }}> Get in touch </button>
            <button className="flex gap-2 items-center rounded-full bg-blue-600 dark:bg-blue-800 px-3 py-2 w-fit text-sm text-white dark:text-gray-300 md:place-self-center hover:bg-blue-900"> Download CV <FaCloudDownloadAlt /> </button>
          </div>
        </div>
        <ul className="flex gap-3 justify-center mt-5 text-blue-500 text-xl">
          <li className="hover:text-blue-900"> <a href="https://github.com/chnthkksn" target="_blank" rel="noreferrer"> <FaGithub /> </a> </li>
          <li className="hover:text-blue-900"> <a href="https://twitter.com/chnthkksn" target="_blank" rel="noreferrer"> <FaTwitter /> </a> </li>
          <li className="hover:text-blue-900"> <a href="https://t.me/its_chinth" target="_blank" rel="noreferrer"> <FaTelegram /> </a> </li>
          <li className="hover:text-blue-900"> <a href="https://www.linkedin.com/in/chnthkksn/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a> </li>
          <li className="hover:text-blue-900"> <a href="mailto:chnthkksn@gmail.com" target="_blank" rel="noreferrer"> <FaEnvelope /> </a> </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
