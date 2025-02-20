import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaDownload, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home section bg-body-color pt-40 pb-24" id="home">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        
        {/* Left Section: Content, Buttons & Socials */}
        <div className="home__content flex flex-col justify-center space-y-8 text-center md:text-left">
          <h1 className="text-6xl font-bold text-title-color">AMBER BISHT</h1>
          <h3 className="text-2xl text-text-color-light">Software Developer</h3>
          <p className="text-lg text-text-color leading-relaxed">
            I'm a 2nd year Student specializing in the MERN stack, based in Uttarakhand. Passionate about technology,  
            I also run the **Unlocked Coding Channel** community to help developers collaborate and grow together.
          </p>

          {/* Community & Channel Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <a
              href="https://t.me/unlocked_coding" 
              className="bg-gray-800 text-white py-3 px-6 rounded-md text-lg hover:bg-first-color-alt"
              target="_blank" 
            >
              Unlocked Coding
            </a>
            <a
              href="https://t.me/unlocked_chat" // Replace with actual link
              className="bg-gray-800 text-white py-3 px-6 rounded-md text-lg hover:bg-gray-700"
              target="_blank" 
            >
              Unlocked Community
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-3xl">
            <a href="https://github.com/Amber-bisht" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <FaGithub />
            </a>
            <a href="https://x.com/amber_bisht" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/amber-bisht-05a096294" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/amber_bisht" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="mailto:bishtamber0@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Section: Circular Image & Download CV Button */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://media-hosting.imagekit.io//aae7f7ee611d41bd/image.jpg?Expires=1834512188&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=T~7uYXQoVWFKwKxaRcUQ4VYyimBNIQxj0mWHYobOD4Ofd~wQzjIlN~CPdwNF1HS5R6ZnBULS6wRbgMyqhRUXcmTK3OrNOJTCW1Hj5lnd6AmmekVLY2cctesQ8UNPAIUHtxyewuz9ohyfBIEF~ltOG6RVs5V2p-99QfiXPONKxBbhic1jKXqR9FmkcNDuGeU2UPasZINJ7hhj-eF-CsjkPaWy6eMSg2QXGCw1coIg5OOdUd7-AMBt0oDeLtWc-5dtSg0VdXAb0Cfq5K~JSvMtcbdfGqf86dDPPmG3Yg7p~KJWcLIdwfBcVvsrwitPRxHYOxj8GxOe8pJ2-Dx6M2CoDA__"
            alt="Amber Bisht"
            className="w-96 h-96 max-w-full object-cover rounded-full shadow-xl border-4 border-gray-300"
          />
          <a
            href="https://docs.google.com/document/d/1iZNRxPqV7auKjoSmGcjwMHRwZhVURJNC/edit?usp=drivesdk&ouid=114386840386130679805&rtpof=true&sd=true"
            download
            className="bg-gray-800 text-white py-3 px-6 rounded-md text-lg flex items-center space-x-2 hover:bg-gray-700"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;
