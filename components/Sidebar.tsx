
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from 'next/legacy/image';

export const Sidebar = () => {

  const {theme, setTheme} = useTheme();

  const userAvatar = '/profile-avatar.png';

  const changeTheme= ()=> {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>

      <Image
        src={userAvatar}
        alt="user avatar"
        className="mx-auto rounded-full "
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-redplanet-100">Renato </span>
         Martins
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Desenvolvedor Web & Gestor de Tráfego</p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        download='name'
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-redplanet-100 md:w-full">
        <a href="https://www.linkedin.com/in/renato-martins-a16531127/">
          <AiFillLinkedin 
            className="w-8 h-8 cursor-pointer" 
            aria-label="LinkedIn"
          />
        </a>
        <a href="https://www.instagram.com/renatofm94/">
          <AiFillInstagram 
            className="w-8 h-8 cursor-pointer" 
            aria-label="Instagram"
          />
        </a>
        <a href="https://github.com/rmartins94">
          <AiFillGithub 
            className="w-8 h-8 cursor-pointer" 
            aria-label="Github"
          />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" 
        style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Brasília, Brazil</span>
        </div>
        <p className="my-2" >contato@renatofm.dev</p>

        <a href="" className="hover:text-redplanet-100">
        <p className="my-2">+55 (61) 9 8197-5991</p>
        </a>
        


      </div>
      {/* Email button */}
      <button className="w-8/12 px-5 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-redplanet-100 to-redplanet-400 focus:outline-none"
        onClick={() => window.open('mailto: renatofm6694@gmail.com')}
      >
        Email
      </button>
      <button 
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-redplanet-100 to-redplanet-400">
        Theme
      </button>
    </div>


  )
}