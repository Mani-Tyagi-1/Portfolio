import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/guessTheNum.png";
import project2 from "../assets/images/AgeCalc.png";
import project3 from "../assets/images/todo.png";
import project4 from "../assets/images/weather.png";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/Project.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Guess The Number",
      github_link: "https://github.com/Mani-Tyagi-1/GuessTheNum",
      live_link: "guess-the-num-gray.vercel.app",
    },
    {
      img: project2,
      name: "Age Calculator",
      github_link: "https://github.com/Mani-Tyagi-1/AgeCalculator",
      live_link: "https://age-calculator-steel-nine.vercel.app/",
    },
    {
      img: project3,
      name: "ToDo",
      github_link: "https://github.com/Mani-Tyagi-1/TodosContext",
      live_link: "https://todos-context1.vercel.app/",
    },
    {
      img: project4,
      name: "Weather App",
      github_link: "https://github.com/Mani-Tyagi-1/Weather",
      live_link: "https://weather-tau-vert-29.vercel.app/",
    },
    

  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg w-full h-[12rem]"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-full"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-full"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="Projects" />
        </div>
      </div>
    </section>
  );
};

export default Project;
