import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-40 pb-24 transition-colors duration-300" id="home">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        
        {/* Left Section: Content, Buttons & Socials */}
        <div className="home__content flex flex-col justify-center space-y-8 text-center md:text-left">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            AMBER BISHT
          </h1>
          <h3 className="text-2xl text-gray-700 dark:text-gray-300">
            Software Developer
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a 2nd-year Student specializing in the MERN stack, based in Uttarakhand. Passionate about technology, I also run the <b>Unlocked Coding Channel</b> to help developers collaborate and grow together.
          </p>

          {/* Community & Channel Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <a
              href="https://t.me/unlocked_coding"
              className="bg-gray-800 dark:bg-gray-700 text-white py-3 px-6 rounded-md text-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
              target="_blank"
            >
              Unlocked Coding
            </a>
            <a
              href="https://t.me/unlocked_chat"
              className="bg-gray-800 dark:bg-gray-700 text-white py-3 px-6 rounded-md text-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
              target="_blank"
            >
              Unlocked Group
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-3xl">
            <a
              href="https://github.com/Amber-bisht"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/amber_bisht"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/amber-bisht-05a096294"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/amber_bisht"
              target="_blank"
              className="text-pink-600 hover:text-pink-800 dark:hover:text-pink-400 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:bishtamber0@gmail.com"
              target="_blank"
              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Section: Profile Image & Name */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://media-hosting.imagekit.io/43da1924b0cd40fc/photo_6287486355458084190_y.jpg?Expires=1837869623&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v~UUUn0Go2AJ5zpQ-7B~NEWngQGXt7KSNt~NNDeSe~iONMz1F3JmdZBv6AMO6vdGumVa051bfejAY9qrBqEJkEDOJZCSE3ZtbD7ecF2026eMSyaqNylu3zHtWw6lXCH~H22fKYHA5XYgUBXvE4b7yxv5Gkwax6U8R9vgE8jq6vrK8UJagH-yAny~lNTngUBHvSRxm~5ns2sWjJ4muEv~0~10ED1LaMUsS6dHT0IFYCG8K1e1076QgtLv1UKcaDFfR~xnYig5K66cUIVQXqO-UouHSrs4yuw0xOvP3jaB51QJU9JJj6RSEaxBEQBUu6b~QtMrj07JQq51znYCZCrZeg__"
            alt="Amber Bisht"
            className="w-96 h-96 max-w-full object-cover rounded-full shadow-xl border-4 border-gray-300 dark:border-gray-600 transition-colors duration-300"
          />
          <h2 className="bg-gray-800 dark:bg-gray-700 text-white py-3 px-6 rounded-md text-lg flex items-center space-x-2 hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300">
            AMBER BISHT
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Home;
