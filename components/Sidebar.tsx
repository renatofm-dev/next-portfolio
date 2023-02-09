
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

export const Sidebar = () => {

  const {theme, setTheme} = useTheme();

  const changeTheme= ()=> {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <img
        src="https://github.com/rmartins94.png"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      // width={50}
      // height={50}
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Renato </span>
         Martins
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        download='name'
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" 
        style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Brasília, Brazil</span>
        </div>
        <p className="my-2" >renatofm6694@gmail.com</p>
        <p className="my-2">+55 (61) 98224-8071</p>
      </div>
      {/* Email button */}
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto: renatofm6694@gmail.com')}
      >
        Email
      </button>
      <button 
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Theme
      </button>
    </div>


  )
}