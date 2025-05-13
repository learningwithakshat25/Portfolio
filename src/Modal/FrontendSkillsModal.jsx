import React, { useState } from 'react'

const FrontendSkillsModal = (props) => {
  const [close, setclose] = useState(false);
  const openCloseModal = () => {
    setclose(!close);
    console.log('close-click');

  }

  return (
    <>
      <div key={props.id} onClick={openCloseModal} className='flex flex-row items-center md:justify-center gap-5 shadow-black shadow w-full md:w-fit h-fit p-3 rounded-md dark:bg-[#171717] dark:text-white cursor-pointer hover:scale-105 '>
        <div key={props.id} className="left">
          <img className='h-12 bg-white p-1 rounded-md' src={props.item.path} alt="" />
        </div>
        <div key={props.id} className="right flex flex-col items-start justify-center">
          <h1>{props.item.name}</h1>
          <p>{props.item.description}</p>
        </div>
      </div>
      {close &&
        <div className='w-full h-full flex items-center justify-center backdrop-blur-md bg-transparent gap-10 fixed inset-0 z-50 p-5'>
              <div key={props.id} className="main flex flex-col gap-5 dark:bg-white dark:text-black dark:border-0 shadow-black shadow p-4 md:w-96 rounded-md bg-white text-black ">
                <div className="upper flex flex-row items-center justify-between gap-10">
                  <div className="left flex flex-row items-center justify-center w-full gap-5">
                    <h1 className='text-2xl font-semibold'>{props.item.name}</h1>
                    <img className='h-12' src={props.item.path} alt="" />
                  </div>
                  <div className="right cursor-pointer" onClick={openCloseModal}>
                    <i class="fa-solid fa-xmark text-2xl"></i>
                  </div>
                </div>
                <p>{props.item.para}</p>
              </div>
        </div>
      }
    </>
  )
}

export default FrontendSkillsModal