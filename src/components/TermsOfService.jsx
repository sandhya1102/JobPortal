import React from 'react'

function TermsOfService() {
  return (
    <>
    <div className='lg:flex lg:flex-row lg:h-[200px] justify-evenly flex flex-col gap-4 text-black'>
         <div className=' bg-blue-100 flex justify-center items-center flex-col p-4'>
            <h1 className='flex items-center justify-center font-bold text-3xl p-2 '>Jobs In India</h1>
            <p className=' p-2 flex gap-6'>
                #Mumbai
                #Delhi
                #Ajmer
                #Pune
                #Hyderabad
                #Agra
                #Chennai
                #Kolkata
                #Indore
                #Gurugram
                #Jaipur
                #Ahmedabad
            </p>
        </div>
        <div className='bg-blue-100  flex justify-center
         items-center flex-col p-4'>
            <h1 className='flex items-center justify-center font-bold text-3xl p-2'>International Jobs</h1>
            <p className='p-2 flex gap-6'>#Africa
#USA
#UK
#Australia
#Canada
#Singapore
#Dubai
#Saudi Arabia
#New Zealand</p>
        </div>
    </div>
    <hr className='border-blue-900 border-[1px]' />

    <div className='flex bg-blue-100 justify-around items-center h-[100px] w-full'>
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-black font-bold lg:text-md leading-tight text-sm'>Job Posted</h2>
            <p className='lg:text-4xl font-bold text-indigo-700 tracking-widest '>20000</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-black font-bold lg:text-md leading-tight text-sm'>Job Filled</h2>
            <p className='lg:text-4xl font-bold text-indigo-700 tracking-widest'>15149</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-black font-bold lg:text-md leading-tight text-sm'>Employeers</h2>
            <p className='lg:text-4xl font-bold text-indigo-700 tracking-widest'>15003</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-black font-bold lg:text-md leading-tight text-sm '>Active Users</h2>
            <p className='lg:text-4xl font-bold text-indigo-700 tracking-widest'>22,8899</p>
        </div>
    </div>
    <hr className='border-blue-900 border-[1px]' />
    </>
  )
}

export default TermsOfService
