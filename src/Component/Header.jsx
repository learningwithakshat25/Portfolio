import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Context/Theme'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



const Header = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [open, setopen] = useState(false);
  const handleClick = () => {
    window.location.href = "mailto:2004mittalakshat@gmail.com?subject=Hello&body=This is a test message.";
    console.log('click');

  };
  const openClick = () => {
    setopen(!open);
    console.log('click');
    
  }

  return (
    <>
      <div className="main w-full h-fit backdrop-blur-lg bg-transparent sticky top-0">

        <div className='container mx-auto p-4 flex flex-row items-center justify-between  dark:text-white '>
          <NavLink to= '/' className='cursor-pointer'><h1 className=' logo font-semibold text-2xl md:text-3xl text-[#27E0B3]'>AM</h1></NavLink>
          <ul className='hidden md:flex flex-row gap-10 font-semibold'>
            <li className='cursor-pointer'>
              <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
              activeClass="active"
              to="Qualifications"
              spy={true}
              smooth={true}
              duration={500}
            >
              Qualification
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
              activeClass="active"
              to="Experiences"
              spy={true}
              smooth={true}
              duration={500}
            >
              Experiences
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
              activeClass="active"
              to="Certificats"
              spy={true}
              smooth={true}
              duration={500}
            >
              Certificats
            </Link>
            </li>
            </ul>

          <div className="button font-semibold flex flex-row gap-10  md:gap-14 items-center justify-center">
          <div  onClick={toggle} className={`theme cursor-pointer`}>
            {theme === 'light' ? <i class="fa-solid fa-moon text-2xl"></i> : <i class="fa-solid fa-sun text-2xl"></i>}
          </div>
            <button onClick={handleClick} className='bg-[#27E0B3] active:bg-[#8bfcdf] dark:text-[#000000] cursor-pointer p-2 md:p-3 rounded-md'>Say Hello</button>
          </div>
          <div onClick={openClick} className="hamberger md:hidden">
            {open ? <i class="fa-solid fa-xmark text-2xl"></i> : <i class="fa-solid fa-bars hidden text-2xl"></i>}
          </div>
        </div>
      </div>
      {open && 
        <ul className='md:hidden flex flex-col gap-10 font-semibold fixed top-16 p-3 items-center justify-center w-full h-fit inset-0 z-50 backdrop-blur-lg bg-transparent'>
           <li className='cursor-pointer'>
              <Link onClick={openClick}
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link onClick={openClick}
              activeClass="active"
              to="Qualifications"
              spy={true}
              smooth={true}
              duration={500}
            >
              Qualification
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link onClick={openClick}
              activeClass="active"
              to="Experiences"
              spy={true}
              smooth={true}
              duration={500}
            >
              Experiences
            </Link>
            </li>
           <li className='cursor-pointer'>
              <Link onClick={openClick}
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            </li>
            <li className='cursor-pointer'>
              <Link onClick={openClick}
              activeClass="active"
              to="Certificats"
              spy={true}
              smooth={true}
              duration={500}
            >
              Certificats
            </Link>
            </li>
      
        </ul>
      }
    </>
  )
}

export default Header