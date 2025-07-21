import React from 'react'
import Profile from '../Components/Profile'
import ProfileDetails from '../Components/ProfileDetails'
import VisualFramework from '../Components/VisualFramework'
import IntegrativeHealing from '../Components/IntegrativeHealing '
import HealthServices from '../Components/HealthServices '
import AboutOurMethod from '../Components/AboutOurMethod '
import Categories from '../Components/Categories'
import Consultation from '../Components/Consultation'
import Headline from '../Components/Headline'
import Gallery from '../Components/Gallery'
import ClientReview from '../Components/ClientReview'
import FandQ from '../Components/FandQ'
import CallToActtionBanner from '../Components/CallToActtionBanner'

const ProfilePage = () => {
  return (
    <div>
      <Profile/>
      <ProfileDetails/>
      <Categories/>
      <VisualFramework/>
      <IntegrativeHealing/>
      <Consultation/>
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

export default ProfilePage
