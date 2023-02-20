// skills icons
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact,FaNode } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiMysql ,SiExpress,SiMongodb,SiMaterialdesignicons } from "react-icons/si";
// services icons
import { GiSpiderWeb } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BiMobileAlt, BiDesktop } from "react-icons/bi";
// contacts
import { AiFillPhone, AiTwotoneMail, AiFillGithub , AiFillLinkedin} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaSearchLocation} from "react-icons/fa";


export const projects = [
  { id: 1, image: "movie.jpg", name: "Movie streaming website" },
  { id: 2, image: "e-comm.jpg", name: "E-commerce website" },
  { id: 3, image: "gym.jpg", name: "Gym website" },
  
  { id: 4, image: "d.webp", name: "Courier firm website" },
  
];

export const skills = [
  { id: 1, name: "Javascript", icon: IoLogoJavascript },
  { id: 2, name: "Java", icon: DiJava },
  { id: 3, name: "Html", icon: IoLogoHtml5 },
  { id: 4, name: "CSS", icon: IoLogoCss3 },
  { id: 5, name: "Mysql", icon: SiMysql },
  { id: 6, name: "React JS", icon: FaReact },
  { id: 7, name: "Node JS", icon: FaNode },
  { id: 8, name: "Express JS", icon: SiExpress },
  { id: 9, name: "mongoDB", icon: SiMongodb },
];
export const services = [
  { id: 1, name: "Web development", icon: GiSpiderWeb },
  { id: 2, name: "Email template development", icon: MdEmail },
  { id: 3, name: "Mobile app development", icon: BiMobileAlt },
  { id: 4, name: "Desktop app development", icon: BiDesktop },
  { id: 5, name: "UI/UX Designer", icon: SiMaterialdesignicons },
];

export const contacts = [
  { id: 1, name: "+91 9373651034", icon: AiFillPhone },
  { id: 2, name: "hendleaniket0515@gmail.com", icon: AiTwotoneMail },
  { id: 3, name: "9373651034", icon: BsWhatsapp },
  { id: 4, name: "Bangaluru , Karnataka", icon: FaSearchLocation },
  { id: 5, name: "https://www.linkedin.com/in/aniket-hendle-935049225", icon: AiFillLinkedin },
  { id: 6, name: "https://github.com/hendleaniket22212920181124610022", icon: AiFillGithub },
];