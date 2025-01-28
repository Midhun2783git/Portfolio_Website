import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../../styles';
import { navLinks } from '../../constants';
import { logo, menu, close , insta , github, linkedin, Instagram, LinkedIn, Github } from '../../assets/assets';
import { s } from 'maath/dist/misc-19a3ec46.esm';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={'${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Midhun Saminathan</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px]font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden'
            :'flex' } p-6 black-gradient absolute
            top-20 right-0 mx-4 my-2 min-w-[140px]
            z-10 rounded-xl`}>
              <ul className="list-none flex 
              justify-end items-start flex-col gap-4">
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${
                      active === Link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium
                    cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
            {/* Desktop Display     */}
            <li className="flex gap-4">
              <a href="https://www.instagram.com/midhun.s_27/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={Instagram} 
                  alt="Instagram" 
                  className="w-8 h-8 transition duration-500" 
                  onMouseEnter={(e) => e.currentTarget.src = insta}  
                  onMouseLeave={(e) => e.currentTarget.src = Instagram}  
                />
              </a>
              <a href="https://www.linkedin.com/in/midhun-saminathan/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={LinkedIn} 
                  alt="Instagram" 
                  className="w-8 h-8 transition duration-500" 
                  onMouseEnter={(e) => e.currentTarget.src = linkedin}  
                  onMouseLeave={(e) => e.currentTarget.src = LinkedIn}  
                />
              </a>
              <a href="https://github.com/Midhun2783git" target="_blank" rel="noopener noreferrer">
                <img 
                  src={github} 
                  alt="Github" 
                  className="w-8 h-8 transition duration-500" 
                  onMouseEnter={(e) => e.currentTarget.src = Github}  
                  onMouseLeave={(e) => e.currentTarget.src = github}  
                />
              </a>
            </li>
              </ul>

          </div>
        </div>
      </div>

      {/* Mobile Display */}
      <div className="hidden sm:flex mr-5  ml-5 flex gap-4 bg-black rounded-lg shadow-md">
        <a href="https://www.instagram.com/midhun.s_27/" target="_blank" rel="noopener noreferrer">
          <img 
            src={Instagram} 
            alt="Instagram" 
            className="w-8 h-8 transition duration-500" 
            onMouseEnter={(e) => e.currentTarget.src = insta}  
            onMouseLeave={(e) => e.currentTarget.src = Instagram}  
          />
        </a>
        <a href="https://www.linkedin.com/in/midhun-saminathan/" target="_blank" rel="noopener noreferrer">
          <img 
            src={LinkedIn} 
            alt="Linkedin" 
            className="w-8 h-8 transition duration-500" 
            onMouseEnter={(e) => e.currentTarget.src = linkedin}  
            onMouseLeave={(e) => e.currentTarget.src = LinkedIn}  
          />
        </a>
        <a href="https://github.com/Midhun2783git" target="_blank" rel="noopener noreferrer">
          <img 
            src={github} 
            alt="Github" 
            className="w-8 h-8 transition duration-500" 
            onMouseEnter={(e) => e.currentTarget.src = Github}  
            onMouseLeave={(e) => e.currentTarget.src = github}  
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar




