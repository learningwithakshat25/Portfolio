import React from 'react'
import DatabaseData from '../Api/DatabaseData.json'
import DatabaseSkillsModal from '../Modal/DatabaseSkillsModal'

const DatabaseSkills = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>DatabaseSkills</h1>
        <div className="DatabaseDB flex-wrap flex flex-row gap-5 items-center justify-start">
        {DatabaseData.map((item)=>{
          return <>
            <DatabaseSkillsModal key={item.id} item={item}/>
          </>
        })}
      </div>
    </div>
  )
}

export default DatabaseSkills