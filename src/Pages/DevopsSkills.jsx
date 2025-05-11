import React from 'react'
import DevopsData from '../Api/DevopsData.json';
import DevopsSkillsModal from '../Modal/DevopsSkillsModal';

const DevopsSkills = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>DevOps and Tools</h1>
        <div className="UILibrary flex-wrap flex flex-row gap-5 items-center justify-start">
        {DevopsData.map((item)=>{
          return <>
          <DevopsSkillsModal key={item.id} item={item}/>
          </>
        })}
      </div>
    </div>
  )
}

export default DevopsSkills