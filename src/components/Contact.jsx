import React from 'react'

function Contact() {

  const contact_info = [
    { logo: 'mail', text: "manityagi1919@gmail.com" },
    
    { logo: 'location', text: "Mohali, Punjab" },
  ]

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text " placeholder="Your Name" />
            <input type="Email " placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit ">Send Message</button>
          </form>
          <div className="flex flex-col gap-15">
            {contact_info?.map((contact, i) => (
              <div className="flex gap-4 w-fit items-center mt-4">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact





            