import React, { useState } from 'react'
import TypeEffect from '../Component/TypeEffect'



const Hero = () => {
  const filename = "Akshat_Mittal_Resume"
  const [enter, setenter] = useState(false);
  const mouseEnter = ()=>{
    setenter(!enter);
  };
 
  return (
    <div id='Hero' className='w-full md:h-full md:pb-16 md:pt-16 flex items-center md:justify-center flex-col gap-8 md:gap-6 p-4 text-center'>
    <h1 className=' text-5xl md:text-7xl'>Hello, I am <span className='logo  font-semibold text-[#27E0B3]'>Akshat Mittal</span></h1>
      <TypeEffect/>
      <p className='text-lg md:text-md md:w-[500px] text-center'>I am passoniate in building responsive, userfriendly web applications using frontend technologies like HTML, CSS, Javascript, Bootstrap, Tailwind CSS and Framework like React Js.</p>
      <div className="button flex flex-col gap-5 items-center justify-center">
      <button className='bg-[#27E0B3] active:bg-[#8bfcdf] dark:text-[#000000] p-3 rounded-md font-semibold px-5 text-lg shadow-black shadow hover:scale-105'><a download='Akshat_Mittal_Resume' href='/Akshat_Mittal_Resume.pdf'>Download Resume</a></button>
      <div className="links flex flex-row items-center justify-center gap-5">
      <a target='blank' href="https://www.linkedin.com/in/akshatmittal2004/"><i class="fa-brands fa-linkedin text-3xl cursor-pointer relative"></i></a>
      <a target='blank' href="https://github.com/learningwithakshat25"><i class="fa-brands fa-github text-3xl cursor-pointer"></i></a>
      </div>
      </div>
    </div>
  )
}

export default Hero