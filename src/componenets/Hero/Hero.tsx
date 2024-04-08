'use client';


export default function Hero() {
  return (
    <section className="text-gray-600 body-font background-global">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 image-animation-zoom">
          <img className="object-cover object-center rounded" alt="hero" src="./images/mainPhoto.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-white title-animation hover:cursor-pointer">Ayush&nbsp;
            <br className="hidden lg:inline-block" />Chandan
          </h1>
          <p className="mb-8 leading-relaxed font-light md:text-xl text-yellow-50 hover:text-yellow-200 hover:cursor-pointer text-justify">I&apos;m Ayush Chandan, an adept Software Developer with a keen eye for detail and a passion for innovation. With a strong background in both React and Next.js, alongside expertise in Artificial Intelligence and Machine Learning, I specialize in creating exceptional products. My proficiency in frontend development, coupled with my understanding of AI and ML, allows me to craft dynamic web applications with unparalleled functionality. I remain committed to delivering high-quality solutions that exceed expectations, continuously refining my skills to ensure I stay at the forefront of technology trends.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg" onClick={() => {
              window.open("https://github.com/Ashkewww", "_blank");
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              <p className="mx-2">Github</p>
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg" onClick={() => {
              window.open("https://www.linkedin.com/in/ayushchandan/", "_blank");
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              <p className="mx-2">LinkedIn</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}