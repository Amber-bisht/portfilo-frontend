import React from 'react';

const TechStack = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase" id="techstack">Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        
        {/* HTML */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 mb-4" />
          <span className="text-sm">HTML</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10 mb-4" />
          <span className="text-sm">CSS</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 mb-4" />
          <span className="text-sm">JavaScript</span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 mb-4" />
          <span className="text-sm">Node.js</span>
        </div>

        {/* Express.js */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-10 h-10 mb-4" />
          <span className="text-sm">Express.js</span>
        </div>

        {/* PostgreSQL */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-10 h-10 mb-4" />
          <span className="text-sm">PostgreSQL</span>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 mb-4" />
          <span className="text-sm">MongoDB</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 mb-4" />
          <span className="text-sm">React</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-10 h-10 mb-4" />
          <span className="text-sm">Tailwind</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10 mb-4" />
          <span className="text-sm">TypeScript</span>
        </div>

        {/* Next.js (Under Improvement) */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs py-1 px-2 rounded-full">Work in Progress</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 mb-4" />
          <span className="text-sm">Next.js</span>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-full w-1/5 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Docker (Under Improvement) */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:transform hover:translate-y-1 transition-all relative">
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs py-1 px-2 rounded-full">Work in Progress</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10 mb-4" />
          <span className="text-sm">Docker</span>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-full w-1/5 bg-orange-500 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechStack;
