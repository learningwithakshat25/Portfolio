import React from 'react'

const Experiences = () => {
  return (
    <div id='Experiences' className='w-full h-full flex flex-col gap-10'>
      <h1 className='text-3xl text-center'>Experiences</h1>
      {/* Experience 1st */}
      <div className="box1 flex flex-col-reverse md:flex-row items-center justify-between w-full md:w-full  dark:bg-[#171717] dark:text-white rounded-md p-4">
        <div className="left flex flex-col gap-5 w-full md:w-1/2">
          <div className="upper flex flex-col gap-4 justify-between">
            <h2 className='font-semibold text-md bg-[#27E0B3] dark:text-[#000000] p-2 rounded-md w-fit'>PERN Stack Internship</h2>
            <h3 className='font-medium text-2xl'>Remote Sensing Applications centre | Lucknow, Uttar-Pradesh</h3>
            <p className='font-medium text-md'>Neural-Infused Chatbot and Scalable Strapi CMS: A Paradigm Shift in
              Intelligent Content Curation</p>
            <p className='text-md'>- Successfully enhanced my full-stack development skills at Remote Sensing, refining best practices in web
              development and gaining hands- on experience in building scalable applications.</p>
            <p className='text-md'>- Independently developed RSAC-WEB, a full-stack web application handling everything from frontend UI/UX to
              Backend logic, system design, testing and deployment , reinforcing my expertise in web application architecture.</p>
            <p className='text-md'>- Designed and implemented key features in RSAC-WEB.</p>
            <div className="tags flex flex-row flex-wrap gap-6">
              <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>React JS</p>
              <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>Node JS</p>
              <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>Express</p>
              <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>Postgresql</p>
              <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>Strapi</p>
              <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>Tailwind CSS</p>
            </div>
          </div>
      </div>
        <div className="right h-full w-full md:w-1/2 flex items-center justify-end">
          <img className='h-full md:h-[500px]' src='/exp1rbg.png' alt="" />
        </div>
        </div>
      {/* Experience 2nd */}


      <div className="exp2 flex flex-col-reverse md:flex-row-reverse gap-5 dark:bg-[#171717] dark:text-white rounded-md p-4 w-full items-center justify-between md:w-full ">

        <div className="left flex flex-col gap-4 justify-between md:w-1/2">
          <h2 className='font-semibold text-md bg-[#27E0B3] dark:text-[#000000] p-2 rounded-md w-fit'>Data Analyst Internship</h2>
          <h3 className='font-medium text-2xl'>PD workforce Developers.</h3>
          <p className='text-md'>-Created interactive dashboards in Power BI to analyze credit card payment defaults based on age, gender, marital status, andeducation.</p>
          <p className='text-md'>- Conducted an in-depth analysis using Power BI, revealing that females, particularly those aged 20 to 30, are more likelytodefaultonpayments, while identifying that marital status has minimal impact on defaults. Highlighted the correlation betweenhigher educationlevels and reduced default rates.</p>
          <p className='text-md'>- Utilized ratio count cards and slicers in Power BI for detailed data representation, providing clear insights into default factors.</p>
          <div className="tags flex flex-row gap-6">
            <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>PowerBI</p>
            <p className='p-2 bg-[#27E0B3] dark:text-[#000000] font-semibold rounded-md text-sm'>Microsoft Excel</p>
          </div>
        </div>
      <div className="right h-full w-full md:w-1/2 flex items-center justify-center md:justify-start bg-transparent">
        <img src='/exp3.png' alt="" />
      </div>
      </div>
    </div>

  )
}

export default Experiences