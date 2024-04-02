import React from 'react'
import AboutImg from '../assets/images/girl1.png'

function About() {
  const info = [
    {text:'Languages',count:'04'},
    {text:'Projects',count:'07'},
    {text:'Technologies',count:'04'},
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>

        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm all about diving into new tech, crafting software that makes
                life easier, and automating things{" "}
                <span className="text-cyan-600">
                  {" "}
                  because who needs repetitive tasks, right?.
                </span>{" "}
                My toolbox overflows with different technologies, and I'm always
                on the hunt for more to add. Learning never stops for this
                curious mind, and I'm constantly seeking ways to use my skills
                to make a positive impact. Let's see what we can create
                together!
              </p>
              <div className="flex mt-10 items-center gap-10 justify-center ">
                {info?.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xl">{content.text}</span>{" "}
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Mani_Tyagi_Resume.pdf" download>
                <button className="btn-primary hover:bg-blue-800 hover:text-[17px]">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={AboutImg}
                alt="About"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
