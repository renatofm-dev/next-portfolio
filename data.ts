import { IProject, IService, ISkill } from "./types";

import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    title: 'Front-End Development',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    Icon: RiComputerLine
  },
  {
    title: 'Back-End Development',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    Icon: FaServer
  },
  {
    title: 'API Development',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    Icon: AiOutlineApi
  },
  {
    title: 'Competitive Coder',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    Icon: MdDeveloperMode
  },
  {
    title: 'UI/UX designer',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    Icon: AiOutlineAntDesign
  },
  {
    title: 'Whatever',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    Icon: RiComputerLine
  },
];

export const languages:ISkill[] = [
  {
    name: 'Python',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'Javascript',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'React Native',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'React',
    level: '80%',
    Icon: BsCircleFill
  },
  {
    name: 'Vue',
    level: '40%',
    Icon: BsCircleFill
  },
  {
    name: 'Bootstrap',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'MatLab',
    level: '40%',
    Icon: BsCircleFill
  },
];

export const tools:ISkill[] = [
  {
    name: 'Excel',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Google Analytics',
    level: '80%',
    Icon: BsCircleFill
  },
  {
    name: 'Framer',
    level: '60%',
    Icon: BsCircleFill
  },  
  {
    name: 'Canva',
    level: '60%',
    Icon: BsCircleFill
  },
];

export const projects:IProject[] = [
  {
    name:"Project 01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"../images/project01.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    name:"Project 02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"../images/project02.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    name:"Project 03",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"../images/project03.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    name:"Project 04",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"../images/project04.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    name:"Project 05",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"../images/project05.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    name:"Project 06",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"../images/project06.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],
  },
]