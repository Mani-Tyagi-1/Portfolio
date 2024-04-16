import React from 'react'
import Profile from '../assets/images/Profile.png'
import { useTypewriter, Cursor } from "react-simple-typewriter";



function Hero() {
  
  const social_media = [
    { logo: "logo-instagram", link: "https://www.instagram.com/manityagi_7/" },
    { logo: "logo-github", link: "https://github.com/Mani-Tyagi-1" },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/mani-tyagi-958415232/",
    },
    { logo: "logo-twitter", link: "https://twitter.com/ManiTyagi01" },
  ];

  const [text] = useTypewriter({
    words: ["Developer", "Programmer", "AI Enthusiast", "Astrophile"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full ">
        <img
          src={Profile}
          alt=""
          height={550}
          width={550}
          // className="md:w-11/12 h-full object-cover "
        />
      </div>

      <div className="flex-1 ">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span className="drop-shadow-white animate-text bg-gradient-to-r from-blue-800 via-purple-500 to-blue-800 bg-clip-text text-transparent font-black">
              Mani Tyagi
            </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            I'm a <span className="text-cyan-300"> {text} </span>
            <Cursor />
          </h4>
          <button className="btn-primary mt-8 hover:bg-blue-800 hover:text-[17px]">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <a href={icon.link} target="_blank">
                  <ion-icon name={icon.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
