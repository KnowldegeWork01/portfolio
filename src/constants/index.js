// import project1 from "../assets/projects/project-1.jpg";
import CD from "../assets/projects/myproject.png";
import hungry from "../assets/projects/todo.png";
import portfolio from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am a passionate FrontEnd developer with a talent for crafting responsive and maintainable web applications.With 1+ years of hands-on experience in modern JavaScript frameworks like React, Next, Redux, and a strong background in integrating RESTful APIs, I aim to leverage my skills to create innovative and user-centric solutions that enhance productivity and user engagement.`;
export const ABOUT_TEXT = `I am a Software Engineer with a passion for crafting seamless, user-focused web applications that drive both business growth and customer satisfaction. With a solid foundation in React.js, Next.js, and state management tools like Redux Toolkit, I specialize in building responsive and scalable solutions that deliver exceptional performance across devices.
Currently at Visionet Systems, I focus on optimizing front-end performance using cutting-edge techniques like lazy loading, dynamic imports, and prefetching. I take pride in creating dynamic, accessible interfaces using React.js, Tailwind CSS, and robust design systems, ensuring compliance with WCAG guidelines for inclusivity. My expertise in automated testing with tools like Cypress and Jest ensures high-quality, stable code that reduces production bugs and accelerates delivery timelines.
Previously at Accenture, I collaborated with cross-functional teams to build reusable React components, design intuitive user experiences, and integrate RESTful APIs for dynamic, data-driven web applications. My contributions led to significant improvements in productivity, user interaction speeds, and application maintainability.
In addition to professional roles, I have spearheaded innovative projects like a Cinematic Database and an E-Commerce Platform, where I implemented advanced features such as search, filtering, and real-time updates, enhancing user engagement and functionality.
My technical skill set spans JavaScript (ES6+), HTML5, CSS3, Node.js, Redux, Airtable APIs, and modern frameworks like Tailwind CSS and Storybook. I’m also experienced with performance optimization, dynamic workflows, and Agile collaboration.
What excites me most is the opportunity to combine my technical expertise with creative problem-solving to deliver impactful solutions that meet both user needs and business objectives. When I’m not coding, I’m exploring new technologies, learning about design systems, or diving into a good tech blog.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - Present",
    role: "Frontend Engineer",
    company: "Knowledgeworks Innovative Linguistic Solution",
    description: `Spearheaded the development of a language translation automation platform using the MERN stack, featuring advanced file extension conversion and accuracy validation. Integrated backend APIs for seamless frontend-backend interaction and built scalable backend services using Node.js, Express.js, and MongoDB.
Designed intuitive UIs with React and Next.js, leveraging Tailwind CSS for responsiveness and component reusability. Integrated Elasticsearch for high-performance data querying and implemented Redis caching, resulting in significantly improved API response times and backend performance.
Led the design and development of a transcription tool, including a robust subtitle editor for uploading, editing, and downloading SRT files. Integrated a real-time audio waveform player to synchronize subtitles with audio, enhancing subtitle accuracy and user experience. 
Employed Cluster.js for efficient multi-process management, improving application scalability. Managed end-to-end project workflows, reducing delivery timelines by 30% and increasing operational efficiency by 25%.`,
    technologies: [
      "JavaScript",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Elasticsearch",
      "Redis",
    ],
  },
  {
    year: "Feb 2024 - March 2024",
    role: "Frontend Developer Internship",
    company: "Knowledgeworks Innovative Linguistic Solution",
    description: `Contributed to the development of a language translation automation platform (FTBT) using the MERN stack.
• Architected and integrated reusable React components, enhancing maintainability and increasing developer productivity by 25%.
• Designed intuitive, responsive UIs with React and Tailwind CSS to improve user experience across devices.
• Integrated Elasticsearch for fast and accurate data retrieval, and Redis caching to optimize backend performance.
• Built and connected backend services using Node.js, Express.js, and MongoDB to ensure efficient data management.
• Managed complex application state with Redux and Context API, ensuring seamless data flow and synchronization.
• Diagnosed and resolved performance bottlenecks and critical bugs using effective debugging strategies.`,
    technologies: [
      "JavaScript",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Elasticsearch",
      "Redis",
    ],
  },

  {
    year: "May 2023 - Jan 2024",
    role: "Internship",
    company: "JSpider",
    description: `Worked on a full-stack e-commerce web application project named "Store@Home" as part of the MERN stack training.
• Developed a scalable e-commerce platform using MongoDB, Express.js, React, and Node.js.
• Designed and implemented a responsive, intuitive user interface to ensure optimal usability across all devices.
• Enabled core functionalities including product browsing, search, cart management, and a smooth checkout experience.`,
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Store@Home",
    image: CD,
    description:
      "A Interactive platform designed to provide users with a comprehensive and engaging movie discovery experience. Built using ReactJS, this application showcases a modern and visually appealing user interface that simplifies the process of finding and exploring movies.",
    technologies: ["HTML", "TailwindCSS", "React", "Redux", "JavaScript"],
  },
  {
    title: "Todo List",
    image: hungry,
    description:
      "A modern food delivery platform designed to provide users with a seamless and intuitive experience when browsing restaurant menus, placing orders, and tracking deliveries.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Bengaluru",
  phoneNo: "+91 8574537246",
  email: "apoorv2766@outlook.com",
};
