import React from 'react'
import ProjectsData from '../Api/ProjectsData.json';
import ProjectsModal from '../Modal/ProjectsModal';

const Projects = () => {
  return (
    <div id='Projects' className='w-full h-full flex flex-col gap-10'>
      <h1 className='text-4xl text-center'>Projects</h1>
      <div className="Backend flex-wrap flex flex-row gap-10 items-center justify-center">

        {ProjectsData.map((item) => {
          return <>
            <ProjectsModal key={item.id} item={item} />
          </>
        })}
      </div>
    </div>
  )
}

export default Projects