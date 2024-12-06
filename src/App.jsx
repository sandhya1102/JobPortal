import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import JobCards from './components/JobCards'
import { jobsData, remoteJobsData } from './assets/data'
import TermsOfService from './components/TermsOfService'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <JobCards title="Featured Jobs " jobsdata={jobsData}/>
    <JobCards title="Remote Jobs" jobsdata={remoteJobsData}/>
    <TermsOfService/>
    <Footer/>
    </div>
  )
}
