import React from 'react'

import ProfileDetails from '../../Components/Profile/ProfileDetails'
import Categories from '../../Components/Profile/Categories'
import VisualFramework from '../../Components/Profile/VisualFramework'
import IntegrativeHealing from '../../Components/Profile/IntegrativeHealing '
import InterSection from '../../Components/Common/InterSection'
import Headline from '../../Components/Common/Headline'
import HealthServices from '../../Components/Profile/HealthServices '
import Gallery from '../../Components/Common/Gallery'
import AboutOurMethod from '../../Components/Profile/AboutOurMethod '
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import CallToActtionBanner from '../../Components/Common/CallToActtionBanner'

import Carousel from '../../Components/Banner/Carousel'
import Banner from '../../Components/Banner/Banner'



const Home = () => {
  return (
    <div >
            <Banner/>
            <ProfileDetails/>
            <Categories/>
            <VisualFramework/>
            <IntegrativeHealing/>
            <InterSection/>
            <Headline/>
            <HealthServices/>
            <Gallery/>
            <AboutOurMethod/>
            <ClientReview/>
            <FandQ/>
            <CallToActtionBanner/>
    </div>
  )
}

export default Home
