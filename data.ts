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
    id:1,
    
    name:"AluraBooks - Mobile First",
    description: " website desenvolvido com vanilla (HTML, CSS, JS), com o foco no método de mobile first. O metodo consiste no desenvovimento a partir do layout mobile. ",
    image_path:"/images/alurabooks.png",
    deploy_url: "https://mobile-first-alurabooks.vercel.app/",
    category: ["Vanilla"],
    github_url: "https://github.com/rmartins94/mobile-first-alurabooks",
    key_techs: ["Vanilla"],

  },
  {
    id:2,

    name:"Landing Page HSB",
    description: "Landing Page desenvolvida para a empresa Holding System Brazil. Foi desenvolvido com React, styled components, Framer Motion. Foram utilizadas API's como Google Maps, Email js entre outras.",
    image_path:"/images/hsb-landingpage.png",
    deploy_url: "https://holdingsystem.com.br/",
    category: ["React","Framer Motion",],
    github_url: "https://github.com/rmartins94/HSB-LandingPage",
    key_techs: ["React", "Framer Motion"],

  },
  {
    id:3,

    name:"HSBlog",
    description: "Blog desenvolvido para a empresa Holding System Brazil. Foi desenvolvido com o framework NextJS com typescript, Tailwind CSS. Foi utilizado a API da sanity como plataforma CMS.",
    image_path:"/images/HSBlog.png",
    deploy_url: "https://hs-blog.vercel.app/",
    category: ["React", "Node", "Next"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Next"],

  },
  {
    id:4,

    name:"Project 04",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"/images/javascript-voice-recognition.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["Vanilla"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    id:5,

    name:"Project 05",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"/images/mochila-de-viagem.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["Vanilla"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],

  },
  {
    id:6,

    name:"Project 06",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"/images/nlw-setup-2023.png",
    deploy_url: "https://github.com/rmartins94/My-Blog",
    category: ["React", "Node", "React Native", "Express"],
    github_url: "https://github.com/rmartins94/My-Blog",
    key_techs: ["React", "Node", "React Native"],
  },
  {
    id:7,

    name:"Weather App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"/images/weather-app.png",
    deploy_url: "https://weather-app-rho-ruddy.vercel.app/",
    category: ["Vue",],
    github_url: "https://github.com/rmartins94/Weather-App",
    key_techs: ["Vue",],
  },
  {
    id:8,

    name:"Weight Tracker App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_path:"/images/weight-tracker-app.png",
    deploy_url: "https://weight-tracker-ochre.vercel.app/",
    category: ["Vue",],
    github_url: "https://github.com/rmartins94/Weight-Tracker",
    key_techs: ["Vue",],
  },
]