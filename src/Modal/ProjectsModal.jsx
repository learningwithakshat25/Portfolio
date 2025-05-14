import React, { useState } from 'react'

const ProjectsModal = (props) => {
    const [open, setopen] = useState(false);
    const openCloseModal = ()=>{
      setopen(!open);
    }
  
    return (
      <>
        <div  key={props.item.id} className="box w-full h-60 md:w-80 flex flex-col gap-5 p-3 justify-between shadow shadow-black rounded-md bg-gray-50 dark:bg-[#171717] dark:active:bg-gray-950 active:bg-green-200 dark:text-white cursor-pointer hover:scale-105 ">
          <img onClick={openCloseModal} key={props.item.id} src={props.item.img} alt="" />
          <h1 className='font-semibold'>{props.item.name}</h1>
          <div className="lower flex flex-row items-center justify-between">
          <div className="left flex flex-row items-center justify-center gap-2">
            <i class="fa-solid fa-circle text-xs animate-pulse font-bold text-green-500 rounded-full"></i>
            <a target='_blank' href={props.item.vercel}><h3>Live Preview</h3></a>
         </div>  
            <div className="right flex items-center justify-center">
                <a target='_blank' href={props.item.git}><img className='bg-white rounded-md p-1' src="/github.svg" alt="" /></a>
            </div>
          </div>

        </div>
        {open && 
        <div onClick={openCloseModal} className="modal inset-0 z-50 fixed w-full h-full bg-transparent backdrop-blur-md flex items-center justify-center p-5">
          <img className='md:h-96' src={props.item.img} alt="" />
        </div>
        }
  
  
      </>
    )
}

export default ProjectsModal