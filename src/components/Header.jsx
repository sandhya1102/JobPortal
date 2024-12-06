import React from 'react'

function Header() {
  return (
    <>
    <div className='bg-gradient-to-r from-cyan-200 to-blue-700 lg:w-[97%] mx-auto rounded-lg lg:h-16 h-[30%] w-[70%] md:text-sm mt-3'>
      <div className='lg:flex lg:justify-between lg:flex-row lg:items-center px-4 py-2 flex-col flex'>
        <h1 className='text-4xl text-white font-semibold text-md mb-2'>Employers</h1>
        <h2 className='hidden md:block'>WELCOME OFFER - FREE JOB Postings and Much More.</h2>
        <div className='flex lg:gap-7 gap-3 items-center '>
            <h3 className='p-2 bg-yellow-400 rounded-md hover:text-white font-medium lg:font-bold text-sm'>Register For Free</h3>
            <h3 className='p-2 bg-white rounded-md font-medium lg:font-bold text-sm'>Post A Job</h3>
            <a className='underline hover:text-blue-700' href="">Sales Enquiry</a>
        </div>
      </div>
    </div>
    <div className='mt-4 flex flex-col justify-center items-center gap-1'>
        <h1 className='text-blue-900 font-extrabold text-2xl'>Bringing you the Perfect Job !</h1>
       <p className='text-blue-800 font-semibold text-xl'>11,000+ JOBS to Apply</p> 
    </div>

    {/* searchbar */}
    <div className='lg:flex lg:gap-12 lg:p-4 lg:flex-row flex flex-col gap-4'>
        <div className='bg-cyan-300 rounded-md w-[350px] h-[130px] m-auto lg:w-[650px] lg:h-[150px]'>
            <div className='flex items-center w-full gap-2 p-4'>
                <input className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ' type="text" placeholder='Search Jobs Now' />
                <button className='bg-yellow-400 text-black px-4 py-2 font-semibold rounded-lg hover:bg-yellow-500'>Search</button>
            </div>
            <div className=" flex gap-4 items-end justify-end">
          <button className="bg-white border border-gray-300 text-black px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-medium lg:font-bold text-sm">
            View Jobs
          </button>
          <button className="bg-yellow-400 text-black px-4 py-2 mr-2 rounded-lg shadow hover:bg-yellow-500 font-medium lg:font-bold text-sm">
            Register For FREE
          </button>
        </div>
        </div>
        <div className='bg-cyan-300 rounded-md w-[350px] h-[200px] m-auto lg:w-[650px] lg:h-[150px] mb-7'>
            <h1 className='flex items-center justify-center font-bold text-2xl p-2 text-blue-900 '>Quick Job Search</h1>
            <p className='text-white p-3'>"#Fresher",
            "#Work From Home",
            "#WFH",
            "#IT",
            "#HR",
            "#Back Office",
            "#BPO Jobs",
            "#ITES",
            "#Finance",
            "#Accounts",
            "#Medical",
            "#Pharma",
            "#Manager",
            "#Developer",
            "#Marketing",
            "#Engineering",
            "#Non Government Jobs",</p>
        </div>
    </div>
    </>
  )
}

export default Header
