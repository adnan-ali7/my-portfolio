import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiReact, SiBootstrap, SiJquery, SiTailwindcss, SiGit,} from "react-icons/si";

const Skills = () => {
  return (
    <section id="Skills" className="text-white rounded-lg py-12 md:py-20 mx-4 md:mx-20 m-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
          {/* HTML */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <FaHtml5 className="text-orange-600 text-5xl mb-4" />
            <p className="text-lg text-white">HTML5</p>
          </div>
          {/* CSS */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <FaCss3Alt className="text-blue-500 text-5xl mb-4" />
            <p className="text-lg text-white">CSS3</p>
          </div>
          {/* JavaScript */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <FaJsSquare className="text-yellow-500 text-5xl mb-4" />
            <p className="text-lg text-white">JavaScript</p>
          </div>
          {/* React */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <SiReact className="text-cyan-500 text-5xl mb-4" />
            <p className="text-lg text-white">React JS</p>
          </div>
          {/* Bootstrap */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <SiBootstrap className="text-purple-600 text-5xl mb-4" />
            <p className="text-lg text-white">Bootstrap</p>
          </div>
          {/* jQuery */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <SiJquery className="text-blue-600 text-5xl mb-4" />
            <p className="text-lg text-white">jQuery</p>
          </div>
          {/* Tailwind CSS */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <SiTailwindcss className="text-teal-400 text-5xl mb-4" />
            <p className="text-lg text-white">Tailwind CSS</p>
          </div>
          {/* Git */}
          <div className="text-center bg-zinc-950 p-6 rounded-2xl flex flex-col items-center">
            <SiGit className="text-[#f14e32] text-5xl mb-4" />
            <p className="text-lg text-white">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
