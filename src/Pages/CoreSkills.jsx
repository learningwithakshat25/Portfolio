import React from 'react'
import CoreSkillsData from "../Api/CoreSkillsData.json";

const CoreSkills = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>Core Competencies</h1>
        <div className="CoreSkills flex-wrap flex flex-row gap-5 items-center justify-start ">
                {CoreSkillsData.map((e,id)=>{
                  return <>
              <div className='w-full flex flex-row items-center md:justify-center gap-5 shadow-black shadow md:w-fit h-fit p-3 rounded-md  dark:bg-[#171717] dark:text-white hover:scale-105  '>
                <div key={id} className="left">
                <img className='h-12 bg-white p-1 rounded-md' src={e.path} alt="" />
                </div>
                <div key={id} className="right flex flex-col items-start justify-center">
                <h1>{e.name}</h1>
                <p>{e.description}</p>
                </div>
                </div>
                  </>
                })}
              </div>
    </div>
  )
}

export default CoreSkills