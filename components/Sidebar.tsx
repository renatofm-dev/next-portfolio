
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi"

export const Sidebar = () => {
  return (
    <div>
      <img
        src="https://github.com/rmartins94.png"
        alt="user avatar"
        className="w-32 h-32 rounded-full mx-auto"
      // width={50}
      // height={50}
      />

      <h3 className="my-4 text-3xl font-medium">
        <span>Renato </span>
         Martins
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href=""
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        download='name'
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social icons */}
      <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
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
      <div className="my-5 py-4 bg-gray-200 rounded-lg" 
        style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Brasília, Brazil</span>
        </div>
        <p className="my-2" >renatofm6694@gmail.com</p>
        <p className="my-2">+55 (61) 98224-8071</p>
      </div>
      {/* Email button */}
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Email</button>
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Toogle Theme</button>
    </div>


  )
}