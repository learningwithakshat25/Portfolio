import React from 'react'
import Hero from '../Pages/Hero'
import FrontEndSkills from '../Pages/FrontEndSkills'
import UILibrary from '../Pages/UILibrary'
import BackendSkills from '../Pages/BackendSkills'
import DatabaseSkills from '../Pages/DatabaseSkills'
import DevopsSkills from '../Pages/DevopsSkills'
import CoreSkills from '../Pages/CoreSkills'
import Qualification from '../Pages/Qualification'
import Experiences from '../Pages/Experiences'
import Certificats from '../Pages/Certificats'
import Projects from '../Pages/Projects'
import Thanks from '../Component/Thanks'

const Bundler = () => {
  return (
    <>
      <Hero />
      <div className="main flex flex-col gap-10">
        <Thanks />
        <FrontEndSkills />
        <UILibrary />
        <BackendSkills />
        <DatabaseSkills />
        <DevopsSkills />
        <CoreSkills />
        <Qualification />
        <Experiences />
        <Projects />
        <Certificats />
      </div>
    </>
  )
}

export default Bundler