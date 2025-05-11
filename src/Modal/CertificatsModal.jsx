import React, { useState } from 'react'
import pdf from '../assets/CERT_Akshat.pdf'


const CertificatsModal = (props) => {
  const [open, setopen] = useState(false);
  const openCloseModal = ()=>{
    setopen(!open);
  }

  return (
    <>
      <div  key={props.item.id} className="box w-full md:w-80 flex flex-col gap-5 p-3 shadow shadow-black rounded-md bg-gray-50 dark:bg-[#171717] dark:text-white cursor-pointer hover:scale-105 ">
        <img onClick={openCloseModal} key={props.item.id} src={props.item.img} alt="" />
        <button className='bg-[#27E0B3] text-[#000000] rounded-md p-2 w-full font-semibold cursor-pointer hover:scale-105'><a href={pdf} download={props.item.name}>Download</a></button>
      </div>
      {open && 
      <div onClick={openCloseModal} className="modal inset-0 z-50 fixed w-full h-full bg-transparent backdrop-blur-md flex items-center justify-center p-5">
        <img className='md:h-96' src={props.item.img} alt="" />
      </div>
      }


    </>
  )
}

export default CertificatsModal