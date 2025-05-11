import React from 'react'
import UILibraryData from '../Api/UILibraryData.json';
import UILibraryModal from '../Modal/UILibraryModal';

const UILibrary = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>UI Library</h1>
        <div className="UILibrary flex-wrap flex flex-row gap-5 items-center justify-start">
        {UILibraryData.map((item)=>{
          return <>
                <UILibraryModal key={item.id} item={item}/>
          </>
        })}
      </div>

    </div>
  )
}

export default UILibrary