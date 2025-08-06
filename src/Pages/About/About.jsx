import React from 'react'
import AboutBanner from '../../Components/About/AboutBanner'
import CoreValuesSection from '../../Components/About/CoreValuesSection '
import VisualFramewrok2 from '../../Components/About/VisualFramewrok2'
import LicensesAndCertifications from '../../Components/About/LicensesAndCertifications '
import Card from '../../Components/About/Card'
import Gallery from '../../Components/Common/Gallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import CallToActtionBanner from '../../Components/Common/CallToActtionBanner'

const About = () => {
  return (
    <div className=''>
      <AboutBanner/>
     
        <CoreValuesSection/>
      <VisualFramewrok2/>
      <LicensesAndCertifications/>
      <Card/>
      <Gallery/>
      <ClientReview/>
      <FandQ/>
      <CallToActtionBanner/>
    </div>
  )
}

export default About
