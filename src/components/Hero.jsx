import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic.jpg";
import { motion } from "framer-motion";
import Resume from "../assets/Apoorv_Resume.pdf";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Hero() {
  return (
    <div className=" mt-[-5rem] pb-1 mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Apoov Kumar Gupta
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <div>
              <a
                href={Resume}
                download="Apoorv_Resume.pdf"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <button className="text-[#8892b0] bg-[#312e2f1a] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f9f9fa] ">
                    Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center h-[75vh]">
            <motion.img
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              //   initial={{ x: 100, opacity: 0 }}
              //   animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="shadow-lg shadow-gray-500"
              src={profilePic}
              alt="Apoorv Gupta"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
