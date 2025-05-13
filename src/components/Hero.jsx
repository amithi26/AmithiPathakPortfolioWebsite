import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Content container */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}
      >
        {/* Violet gradient line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Amithi!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 mb-2 text-white-100`}>
            I create designs, solutions, and experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1BK5fE8iTFasE4xzlWx_Wwj9oMmVzSdpU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block px-6 py-3 bg-[#915eff] text-white text-lg font-medium rounded-md hover:bg-[#7a47e2] transition duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>

      {/* ComputersCanvas component */}
      <ComputersCanvas className="z-10" />

      {/* Scroll animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
