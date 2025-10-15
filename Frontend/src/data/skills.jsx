import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiOpenai,
  SiGooglegemini,
  SiPhp,
  SiRedux,
  SiClerk
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";


export const skills = {
  languages: [
    { name: "HTML", icon: <SiHtml5 color="#e34f26" size={24} /> },
    { name: "CSS", icon: <SiCss3 color="#1572b6" size={24} /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={24} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={24} /> },
    { name: "Python", icon: <SiPython color="#3776ab" size={24} /> },
    { name: "PHP", icon: <SiPhp color="#777bb4" size={24} /> },
    { name: "SQL", icon: <SiMysql color="#00758f" size={24} /> },
  ],

  frameworks: [
    { name: "React", icon: <SiReact color="#61dafb" size={24} /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" size={24} /> },
    { name: "Express", icon: <SiExpress color="#000000" size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" size={24} /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" size={24} /> },
  ],

  databases: [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={24} /> },
    { name: "MySQL", icon: <SiMysql color="#00758f" size={24} /> },
  ],

  tools: [
    { name: "Git", icon: <SiGit color="#f05032" size={24} /> },
    { name: "GitHub", icon: <SiGithub color="#181717" size={24} /> },
    { name: "Postman", icon: <SiPostman color="#ff6c37" size={24} /> },
    { name: "Docker", icon: <SiDocker color="#0db7ed" size={24} /> },
    { name: "AWS (S3, EC2)", icon: <FaCloud color="#ff9900" size={24} /> },
    { name: "Redux Toolkit", icon: <SiRedux color="#764abc" size={24} /> },
    { name: "OpenAI API", icon: <SiOpenai color="#412991" size={24} /> },
    { name: "Gemini API", icon: <SiGooglegemini color="#078EFA" size={24} /> },
    { name: "Clerk Auth", icon: <SiClerk color="#6C47FF" size={24} /> },

  ],
};
