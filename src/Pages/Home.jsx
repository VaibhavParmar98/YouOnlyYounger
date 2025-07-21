import React from 'react'
import Banner from '../Components/Banner'
import InterSection from '../Components/InterSection'
import Headline from '../Components/Headline'
import Gallery from '../Components/Gallery'
import ClientReview from '../Components/ClientReview'
import FandQ from '../Components/FandQ'
import Consultation from '../Components/Consultation'
import CallToActtionBanner from '../Components/CallToActtionBanner'
import DeepHealing from '../Components/DeepHealing'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Headline/>
      <InterSection/>
      <ClientReview/>
      <Consultation/>
      <CallToActtionBanner/>
      <DeepHealing/>
      <FandQ/>
      <Gallery/>
    </div>
  )
}

export default Home
