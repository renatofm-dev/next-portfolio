import Image from "next/image"

export const Sidebar = () => {
    return (
        <div>
            <img 
            src="https://github.com/rmartins94.png"  
            alt="user avatar"
            // width={50}
            // height={50}
            />

            <h3>
                <span>Renato</span>
                Martins
            </h3>
            <p>Web Developer</p>
            <p>Download Resume</p>
            {/* Social icons */}

            {/* address */}

            <div>
                <div>
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