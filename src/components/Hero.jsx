import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Content container */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}
      >
        {/* gradient line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#bb00ff] shadow-[0_0_10px_2px_rgba(187,0,255,0.5)]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>

        {/* Text content */}
        <div className="flex-1 max-w-2xl">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#b700ff]">Amithi!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 mb-6`}>
            Developer · Designer · Innovator
          </p>
          <a
            href="https://drive.google.com/file/d/19LdHrXGFcLRNsRfgT6Vmw1D63cgj5AQH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#bb00ff] bg-opacity-40 border-2 border-[#fc7805] border-opacity-0 text-white text-lg font-medium rounded-lg hover:shadow-[0_0_15px_4px_rgba(187,0,255,0.4)] hover:bg-[#b700ff] hover:bg-opacity-80 hover:border-opacity-0 transition-all duration-300 transform hover:scale-102"
          >
            View My CV
          </a>
        </div>
      </div>

      {/* ComputersCanvas component */}
      <ComputersCanvas className="z-10" />

      {/* Scroll animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[white] border-opacity-60 flex justify-center items-start p-2 hover:border-opacity-100 transition-all duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[white] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;