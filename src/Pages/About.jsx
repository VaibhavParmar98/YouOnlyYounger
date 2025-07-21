import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import CoreValuesSection from '../Components/CoreValuesSection '
import VisualFramewrok2 from '../Components/VisualFramewrok2'
import LicensesAndCertifications from '../Components/LicensesAndCertifications '
import Card from '../Components/Card'
import Test from '../Components/Test'
import Gallery from '../Components/Gallery'
import ClientReview from '../Components/ClientReview'
import FandQ from '../Components/FandQ'
import CallToActtionBanner from '../Components/CallToActtionBanner'

const About = () => {
  return (
    <div>
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
