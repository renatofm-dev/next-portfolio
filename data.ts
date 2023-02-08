import { IService } from "./types"

import { RiComputerLine } from "react-icons/ri"
import { FaServer } from "react-icons/fa"
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai"
import { MdDeveloperMode } from "react-icons/md"

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


]