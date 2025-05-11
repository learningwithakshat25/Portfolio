import React from 'react'
import BackendData from '../Api/BackendData.json'
import BackendSkillsModal from '../Modal/BackendSkillsModal'

const BackendSkills = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>Back-End Skills</h1>
        <div className="Backend flex-wrap flex flex-row gap-5 items-center justify-start">
        {BackendData.map((item)=>{
          return <>
                <BackendSkillsModal key={item.id} item={item}/>
          </>
        })}
      </div>

    </div>
  )
}

export default BackendSkills