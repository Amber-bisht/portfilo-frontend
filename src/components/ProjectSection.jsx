import React from 'react';

const ProjectSection = () => {
  return (
   <section className="py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300" id="projects">
      {/* Header Matching Tech Stack */}
      <h1 className="text-3xl font-bold text-center mb-10 uppercase text-gray-900 dark:text-white">Projects</h1>

      <div className="projects-container flex flex-wrap justify-center gap-8 p-8">
        {/* Project 1 */}
        <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 hover:bg-opacity-70 dark:hover:bg-opacity-80 relative transition-opacity cursor-pointer" onClick={() => window.location.href = 'https://github.com/Amber-bisht/e-commerce'}>
          <img src="https://media-hosting.imagekit.io//1279668b3eed43b1/OIP%20(5).jpg?Expires=1834513004&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lqR5FBwI~gwALV8Im9A8gs1LMjJ63HCVt7Ww8grugfWEHqJYcQqRJs0vbXL-t6bRY4-aArn95l0r3tYDIPd-Ay8FusczfcIv6sMtf--dP1Py25qmTdkboJYETr3LldfjFt2YorHQ94w91ANT0qg~j9BqI9PGNy8H39dbKQT2u0F4I3~s02wLdQqjMQeyNsXPDpbhUEw2rAueXUkfMA~0ob1HQcEMh91zSnJfyBAy3gG9nFv9V825E4Hfl-SOwiwDDofjimBLjEUXb3N5TRFILfHspYZDuHHneB91b1fawgxPSSU1oIM80xl7U7Uv~6lXxiA8EZoONyHqQWT62RXv3A__" alt="Screenshot of the Links Channel project" className="project-img w-full h-40 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">Links Channel (MERN Stack)</h2>
          <span className="tag bg-green-500 text-white py-1 px-3 rounded-full text-xs mt-2">WEB</span>
          <p className="text-sm text-gray-600 mt-2">A full-stack MERN application for sharing and managing links with user authentication.</p>
          <div className="tech-icons flex justify-center mt-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 mx-2" />
          </div>
          <div className="github-icon absolute top-2 right-2 opacity-0 transition-opacity hover:opacity-100">
            <i className="fab fa-github text-2xl"></i>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 hover:bg-opacity-70 dark:hover:bg-opacity-80 relative transition-opacity cursor-pointer" onClick={() => window.location.href = 'https://github.com/Amber-bisht/cab_booking'}>
          <img src="https://media-hosting.imagekit.io//5dd39dd575be4e29/OIP%20(4).jpg?Expires=1834512765&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AIEUurl2MPHYQpy6gtAak3ICEXLcIoEseuS6IkwduKqLxnNsy1fQgZf7EoVqs9iN7LWOpMiQYGYfo96zmuSOzBbx73XjrMQ2HaGeTOT5WaNTpdUrlK83RU~TlkLw3Nv-pkWMKSRlamh8cRGuw2u9QGspdI-Xx3iN9lrWC9HTkfkEZsttqgRguQZEo7DSt74DYR4ro~teBbPNCWRLKqcd9ysNhfHR9Av7qJYkqIPDJ~xe4-4x9CHZ2vx9nHQZjk3iblmEZyPtpRewpn11r~Fj8hSuV-UtNJQLLmGzAc4yZ-Wl-Wz9ZluYKddLh8f2C0ecd8mZjRK8ctIOweG-hjlgGw__" alt="Screenshot of the Car Booking project" className="project-img w-full h-40 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">Car Booking (MERN)</h2>
          <span className="tag bg-green-500 text-white py-1 px-3 rounded-full text-xs mt-2">WEB</span>
          <p className="text-sm text-gray-600 mt-2">A car rental booking system built with MERN stack, featuring real-time availability and payments.</p>
          <div className="tech-icons flex justify-center mt-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 mx-2" />
          </div>
          <div className="github-icon absolute top-2 right-2 opacity-0 transition-opacity hover:opacity-100">
            <i className="fab fa-github text-2xl"></i>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 hover:bg-opacity-70 dark:hover:bg-opacity-80 relative transition-opacity cursor-pointer" onClick={() => window.location.href = 'https://github.com/Amber-bisht/e-commerce'}>
          <img src="https://media-hosting.imagekit.io//62e2a3d05c2646e9/OIP%20(2).jpg?Expires=1834512765&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AXQxqnVedxRUr8EkUpLodyLvxhCHLeOYwYgB4DnkaZvyNDT4dkq0ebk6vdevXUBK79kHoStiwV5szFr2riYeEHeE~6hFrh~aVPFjvxYL73YwacipMbM4HX0Q~zdNKdYKsEPdJyeyZg3WR4X5uvoLDP~HROpDsSkjn4MLmTtlzC70xIPGj-3cSqmnNW8Bg2rVXBHPJPBbXQ9zqdigQaBCjwvO-WL2C4JiGI7d2JdgCtHHbDXj4~gi-ZpIfSf4ykn2~gUKveuoz-V4Gm7NFcX5zojl-l52ja5tAYoOMLfYXrJ39J2b2zBDJeS8OUfAPrhBRoo27HgkkWQEnrAmvXS4xQ__" alt="Screenshot of the E Store project" className="project-img w-full h-40 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">E Store (MERN)</h2>
          <span className="tag bg-green-500 text-white py-1 px-3 rounded-full text-xs mt-2">WEB</span>
          <p className="text-sm text-gray-600 mt-2">add to cart homepage landing page with payment gateway by razorpay and advace features..</p>
          <div className="tech-icons flex justify-center mt-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-8 mx-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 mx-2" />
          </div>
          <div className="github-icon absolute top-2 right-2 opacity-0 transition-opacity hover:opacity-100">
            <i className="fab fa-github text-2xl"></i>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;