
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

      <h3>
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
      <div>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
      </div>
      {/* address */}

      <div>
        <div>
          <GoLocation />
          <span>Brasilia, Brazil</span>
        </div>
        <p>renatofm6694@gmail.com</p>
        <p>+55 (61) 98224-8071</p>
      </div>
      {/* Email button */}
      <button>Email</button>
      <button>Toogle Theme</button>
    </div>


  )
}