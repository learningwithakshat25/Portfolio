import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeEffect = () => {
  return (
    <TypeAnimation className='text-2xl md:text-3xl inline-block'
      sequence={[
        'FRONTEND DEVELOPER',
        2000,
        'HTML',
        2000,
        'CSS',
        2000,
        'JAVA SCRIPT',
        2000,
        'BOOTSTRAP',
        2000,
        'TAILWIND CSS',
        2000,
        'REACT JS',
        2000
      ]}
      wrapper="span"
      speed={30}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypeEffect