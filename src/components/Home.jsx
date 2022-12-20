import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Dan",
      "I'm a DevOps Application Developer.",
      "Specialising in frontend applications.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div name="home" className="w-full h-screen bg-[#222233]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          <span className="text-[#aaccff]">{text}</span>
          <Cursor cursorColor="#aaccff" />
        </h1>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#aaccff] hover:border-[#aaccff]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
