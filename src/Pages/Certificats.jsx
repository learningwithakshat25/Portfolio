import React from 'react'
import CertificatsModal from '../Modal/CertificatsModal'
import CertificatsData from '../Api/CertificatsData.json';

const Certificats = () => {
  return (
    <div id='Certificats' className='w-full h-full flex flex-col gap-10'>
        <h1 className='text-4xl text-center'>Certificats</h1>
        <div className="main w-full h-full flex flex-row flex-wrap gap-10 items-center justify-center">
            {CertificatsData.map((item)=>{
                return <>
                <CertificatsModal key={item.id} item={item} />
                </>

            })}
        </div>
    </div>
  )
}

export default Certificats