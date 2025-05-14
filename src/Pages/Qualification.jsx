import React from 'react'

const Qualification = () => {
  return (
    <>
    <div id='Qualifications' className='w-full h-full flex flex-col gap-10 items-center justify-center'>
        <h1 className='text-3xl text-center'>Qualification</h1>
        <div className="graduation flex flex-col md:flex-row dark:bg-[#171717] dark:text-white p-4 rounded-md gap-10 md:w-fit w-full shadow-black shadow">
            <div className="left flex items-center justify-center">
                <img className='rounded-full h-28' src='/npgc.png' alt="" />
            </div>
            <div className="right flex flex-col  gap-2">
            <h1 className='font-medium text-xl'>Bachelor of Vocational Software Development and E-governance
            </h1>
            <p>National P.G. College (University of Lucknow)</p>
            <p>Grade - 7.6 CGPA</p>
            <p className='bg-[#27E0B3] dark:text-[#000000] rounded-md p-1 w-fit font-semibold'>Aug 2022 - April 2025 </p>
            </div>
        </div>
        <div className="school flex flex-col md:flex-row gap-16">
        <div className="inter flex flex-row dark:bg-[#171717] dark:text-white p-4 rounded-md gap-10 w-full md:w-fit shadow-black shadow">
            <div className="left flex flex-col gap-2">
            <h1 className='font-medium text-xl'>Mahatma Memorial Inter College.
            <p className='font-medium text-lg'>UP Borad (X), Science</p>
            </h1>
            <p>Lucknow, Uttar-Pradesh</p>
            <p>Grade - 74%</p>
            <p className='bg-[#27E0B3] dark:text-[#000000] rounded-md p-1 w-fit font-semibold'> 2021 - 2022 </p>
            </div>
        </div>
        <div className="highSchool flex flex-row dark:bg-[#171717] dark:text-white p-4 rounded-md gap-10 w-full md:w-fit shadow-black shadow">
        <div className="left flex flex-col gap-2">
        <h1 className='font-medium text-xl'>Mount Glory Maple Public High School.
        <p className='font-medium text-lg'>UP Borad (XII), Science</p>
        </h1>
        <p>Lucknow, Uttar-Pradesh</p>
        <p>Grade - 64%</p>
        <p className='bg-[#27E0B3] dark:text-[#000000] rounded-md p-1 w-fit font-semibold'> 2019 - 2020 </p>
        </div>
        </div>
    </div>
    </div>
        
</>
  )
}

export default Qualification