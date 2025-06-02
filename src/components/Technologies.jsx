import {
  RiReactjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptFill,
  RiTailwindCssLine,
  RiBootstrapFill,
  RiNextjsFill,
  RiNodejsLine,
} from "react-icons/ri";
import {
  SiMongodb,
  SiMui,
  SiExpress,
  SiElasticsearch,
  SiTypescript,
  SiMysql,
  SiRedux,
  SiPostman,
  SiJest,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";

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

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 cursor-progress"
      >
        {[
          {
            icon: <RiHtml5Line className="text-7xl text-[#DD4B25]" />,
            name: "HTML5",
            duration: 3,
          },
          {
            icon: <RiCss3Line className="text-7xl text-[#254BDD]" />,
            name: "CSS3",
            duration: 5,
          },
          {
            icon: <RiTailwindCssLine className="text-7xl text-[#23ADB8]" />,
            name: "Tailwind CSS",
            duration: 6,
          },
          {
            icon: <SiMui className="text-7xl text-[#007FFF]" />,
            name: "Material UI",
            duration: 3,
          },
          {
            icon: <RiBootstrapFill className="text-7xl text-[#8712F3]" />,
            name: "Bootstrap",
            duration: 4,
          },
          {
            icon: <RiJavascriptFill className="text-7xl text-[#EFD81D]" />,
            name: "JavaScript",
            duration: 2,
          },
          {
            icon: <SiTypescript className="text-7xl text-[#3178C6]" />,
            name: "TypeScript",
            duration: 2,
          },
          {
            icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
            name: "React",
            duration: 2.5,
          },
          {
            icon: <SiRedux className="text-7xl text-purple-500" />,
            name: "Redux",
            duration: 2.5,
          },
          {
            icon: <RiNextjsFill className="text-7xl text-[#DD4B25]" />,
            name: "Next.js",
            duration: 3,
          },
          {
            icon: <RiNodejsLine className="text-7xl text-green-600" />,
            name: "Node.js",
            duration: 2,
          },
          {
            icon: <SiExpress className="text-7xl text-[#254BDD]" />,
            name: "Express.js",
            duration: 2,
          },
          {
            icon: <SiMongodb className="text-7xl text-green-500" />,
            name: "MongoDB",
            duration: 2,
          },
          {
            icon: <SiMysql className="text-7xl text-[#00758F]" />,
            name: "MySQL",
            duration: 2,
          },
          {
            icon: <SiElasticsearch className="text-7xl text-blue-400" />,
            name: "Elasticsearch",
            duration: 2,
          },
          {
            icon: <FaGithub className="text-7xl text-gray-500" />,
            name: "GitHub",
            duration: 2,
          },
          {
            icon: <SiPostman className="text-7xl text-orange-500" />,
            name: "Postman",
            duration: 2,
          },
          {
            icon: <SiJest className="text-7xl text-[#99425b]" />,
            name: "Jest",
            duration: 2,
          },
        ].map((item, idx) => (
          <Tooltip title={item.name} arrow key={idx}>
            <motion.div
              variants={iconVariants(item.duration)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              {item.icon}
            </motion.div>
          </Tooltip>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
