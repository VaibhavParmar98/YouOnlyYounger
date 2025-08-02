import React from 'react'
import Profile from '../../Components/Profile/Profile'
import ProfileDetails from '../../Components/Profile/ProfileDetails'
import Categories from '../../Components/Profile/Categories'
import VisualFramework from '../../Components/Profile/VisualFramework'
import IntegrativeHealing from '../../Components/Profile/IntegrativeHealing '
import Headline from '../../Components/Common/Headline'
import HealthServices from '../../Components/Profile/HealthServices '
import Gallery from '../../Components/Common/Gallery'
import AboutOurMethod from '../../Components/Profile/AboutOurMethod '
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import CallToActtionBanner from '../../Components/Common/CallToActtionBanner'
import InterSection from '../../Components/Common/InterSection'


const ProfilePage = () => {
  return (
    <div>
      <Profile/>
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

export default ProfilePage
