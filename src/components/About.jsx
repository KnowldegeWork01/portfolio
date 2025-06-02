import aboutImg from "../assets/mypic2.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
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

  return (
    <div className="border border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap ">
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileInView={{ opacity: 1, x: 0 }}
          // initial={{opacity:0,x:-100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain mt-[-10rem] lg:mt-[-9rem]"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className=" flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
