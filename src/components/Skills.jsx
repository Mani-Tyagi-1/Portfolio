import React from "react";

function Skills() {
  const skills = [
    {
      logo: "logo-html5",
      level: "HTML",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "CSS",
      count: 90,
    },
    {
      logo: "logo-javascript",
      level: "JavaScript",
      count: 80,
    },
    {
      logo: "logo-react",
      level: "React JS",
      count: 80,
    },
    

    
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative ">
      <div className="mt-8 mb-8 text-gray-100 text-center ">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>

        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>

        <div className="flex justify-center items-center ">
          <div className="w-[70%] flex items-center justify-center mt-12 gap-10 flex-wrap ">
            {skills?.map((skills, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:shadow-lg hover:shadow-cyan-600"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skills.count}% , #ddd ${skills.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <ion-icon name={skills.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-xl mt-3">{skills.level}</p>
              </div>
            ))}

            <div className="flex gap-10">
              <div className="w-[100px] h-[100px] rounded-lg shadow-lg hover:shadow-cyan-600 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dMFApzKfQirskhvPqknEBLdQefLj4YXbAw&s"
                  alt="Github"
                  className="rounded-lg"
                />{" "}
              </div>
              <div className="w-[100px] h-[100px] rounded-lg shadow-lg hover:shadow-cyan-600 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKaYS6OK16tyGacJrkeVWly1q5OXKw8z-zg&s"
                  alt="Tailwind"
                  className="rounded-lg"
                />{" "}
              </div>
              <div className="w-[100px] h-[100px] rounded-lg shadow-lg hover:shadow-cyan-600 ">
                <img
                  src="data:image/png;base64,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"
                  alt="Firebase"
                  className="rounded-lg"
                />{" "}
              </div>

              <div className="w-[100px] h-[100px] rounded-lg shadow-lg hover:shadow-cyan-600 ">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Appwrite"
                  className="rounded-lg"
                />{" "}
              </div>

              <div className="w-[100px] h-[100px] rounded-lg shadow-lg hover:shadow-cyan-600 ">
                <img
                  src="data:image/png;base64,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"
                  alt="MongoDB"
                  className="rounded-lg"
                />{" "}
              </div>

              <div className="w-[100px] h-[100px] rounded-lg shadow-lg hover:shadow-cyan-600 ">
                <img
                  src="https://cmscritic.com/ms-content/uploads/2023/08/nextjs-product-logo.jpeg?format=auto&width=256"
                  alt="NextJs"
                  className="rounded-lg"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
