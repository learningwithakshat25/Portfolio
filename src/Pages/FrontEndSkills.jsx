import React, { useState } from 'react'
import FrontEndData from '../Api/FrontEndData.json';
import FrontendSkillsModal from '../Modal/FrontendSkillsModal';

const FrontEndSkills = () => {

  return (
    <div id='Skills' className='w-full h-full flex flex-col gap-10 '>
      <h1 className='text-3xl text-center'>Front-End Skills</h1>
      <div className="frontend flex-wrap flex flex-row gap-5 items-center justify-center md:justify-start ">
        {FrontEndData.map((item)=>{
          return <>
              <FrontendSkillsModal key={item.id} item={item}/>
          </>
        })}
      </div>
    </div>
  )
}

export default FrontEndSkills