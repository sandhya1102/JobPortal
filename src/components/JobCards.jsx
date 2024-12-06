import React, { useEffect } from "react";
import { jobsData } from "../assets/data"; 
function JobCards({title,jobsdata}) {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(()=>{
    const intervalID=setInterval(() => {
        scrollRight();
    }, 6000);

    return()=>clearInterval(intervalID)
  },[]);

  return (
    <div className="relative">
      <h1 className="flex justify-center text-3xl items-center text-indigo-900 font-semibold ">
        {title}
      </h1>
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-[50%] transform -translate-y-1/2 z-10  "
      >
        <i className="ri-arrow-left-s-line  text-blue-600 text-6xl "></i>
      </button>
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden scroll-smooth whitespace-nowrap px-16 py-8"
      >
        {jobsData.map((job, index) => (
          <div
            key={index}
            className="ml-8 w-64 h-auto border-[1px] border-gray-300 p-4 shadow-lg bg-white flex-shrink-0 flex flex-col gap-3"
          >
            <h2 className="text-xl font-bold text-blue-900">{job.jobName}</h2>
            <p className="text-gray-900 font-semibold ">Company: {job.companyName}</p>
            <p className="text-gray-600 text-sm">Type: {job.jobType}</p>
            <p className="text-gray-600 text-sm">Experience: {job.experience}</p>
            <p className="text-gray-600 text-sm">Location: {job.location}</p>
            <button className="bg-cyan-500 p-1 font-semibold text-white hover:text-yellow-500 hover:border-[1px] hover:border-yellow-400 ">Apply<i class="ri-send-plane-2-fill ml-2 "></i></button>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-[50%] transform -translate-y-1/2 z-10 "
      >
        <i className="ri-arrow-right-s-line text-blue-600 text-6xl"></i>
      </button>
    </div>
  );
}

export default JobCards;

