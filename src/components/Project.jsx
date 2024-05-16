import React from "react";
import imaginify from "../assets/images/imaginify.png";
import ecom from "../assets/images/Ecom.png";
import portfolio from "../assets/images/portfolio.png";

import project_person from "../assets/images/Project.png";




const Project = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-10">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />

      <div className="flex max-w-7xl gap-6 px-5 mx-auto my-4 items-center relative">
        <div class="w-[310px] h-[400px] border-none outline-none  rounded-lg bg-gray-700 dark:bg-blackLighter p-1 hover:scale-[1.03] transition-all ">
          <img
            src={portfolio}
            alt="Projects"
            width={450}
            className="rounded-lg"
          />

          <div className="p-5">
            <h2 className="text-[22px] font-semibold  ">Portfolio</h2>
            <p className="py-3 text-slate-400 text-[14px]  w-full h-[130px]">
              A simple portfolio website that showcases my skills and projects.
              Built in Reactjs and Tailwind css is use to design the project.
            </p>

            <div className="mt-2">
              <a
                href="https://github.com/Mani-Tyagi-1/Portfolio"
                target="_blank"
                className="bg-cyan-600  shadow-sm hover:font-bold  hover:shadow-white px-4 py-2 rounded-lg "
              >
                Code
              </a>
              <a
                href="https://manityagi.netlify.app/"
                target="_blank"
                className="bg-cyan-600 shadow-sm hover:font-bold  hover:shadow-white  px-4 py-2 rounded-lg mx-2"
              >
                Demo{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="w-[310px] h-[400px] border-none outline-none rounded-lg bg-gray-700 dark:bg-blackLighter p-1 hover:scale-[1.03] transition-all ">
          <img
            src={imaginify}
            alt="Projects"
            width={450}
            className="rounded-lg"
          />

          <div className="p-5">
            <h2 className="text-[22px] font-semibold  ">Imaginify</h2>
            <p className="py-3 text-slate-400 text-[14px]  w-full h-[130px]">
              Imaginify allows users to edit the uploaded images with the help
              of AI. It provide remove background, object recolor etc features
              to users
            </p>

            <div className="mt-2">
              <a
                href="https://github.com/Mani-Tyagi-1/Imaginify"
                target="_blank"
                className="bg-cyan-600 shadow-sm hover:font-bold  hover:shadow-white  px-4 py-2 rounded-lg "
              >
                Code
              </a>
              <a
                href="https://imaginify-chi-two.vercel.app/"
                target="_blank"
                className="bg-cyan-600 shadow-sm hover:font-bold  hover:shadow-white  px-4 py-2 rounded-lg mx-2"
              >
                Demo{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="w-[310px] h-[400px] border-none outline-none rounded-lg bg-gray-700 dark:bg-blackLighter p-1 hover:scale-[1.03] transition-all ">
          <img src={ecom} alt="Projects" width={450} className="rounded-lg" />

          <div className="p-5">
            <h2 className="text-[22px] font-semibold  ">Ecommerce</h2>
            <p className="py-3 text-slate-400 text-[14px]  w-full h-[130px]">
              A fully responsive Ecommerce website made using Reactjs, Tailwind
              and Firebase. It had features like, dark mode, authentication,
              etc.
            </p>

            <div className="mt-2">
              <a
                href="https://github.com/Mani-Tyagi-1/ECommerce"
                target="_blank"
                className="bg-cyan-600 shadow-sm hover:font-bold  hover:shadow-white  px-4 py-2 rounded-lg "
              >
                Code
              </a>
              <a
                href="https://e-commerce-eight-ruddy.vercel.app/"
                target="_blank"
                className="bg-cyan-600 shadow-sm hover:font-bold  hover:shadow-white  px-4 py-2 rounded-lg mx-2"
              >
                Demo{" "}
              </a>
            </div>
          </div>
        </div>

        <div>
          <img src={project_person} alt="Projects" width={450} />
        </div>
      </div>

      <div className="flex mx-36 mt-10">
        <p className="text-[13px] text-slate-400">
          Checkout my <span className="text-cyan-600">Github</span> for more projects
        </p>{" "}
        <a
          href="https://github.com/Mani-Tyagi-1"
          className="mx-2 text-[13px] text-blue-600 underline"
        >
          here
        </a>
      </div>

    </section>
  ); 
};

export default Project;
