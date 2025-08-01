import React from 'react'
import BannerBliss from '../../Components/BlissBody/BannerBliss'
import BodyMatterBliss from '../../Components/BlissBody/BodyMatterBliss'
import SignBlissBody from '../../Components/BlissBody/SignBlissBody'
import ImbalanceSignsSection from '../../Components/Common/ImbalanceSignsSection '
import Therapies from '../../Components/Common/Therapies'
import RestorativeApproach from '../../Components/Common/Restorative Approach'
import InterSection from '../../Components/Common/InterSection'
import Gallery from '../../Components/Common/Gallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'

const BlissBody = () => {
  return (
    <div>
      <BannerBliss/>
      <BodyMatterBliss/>
      <ImbalanceSignsSection/>
      <Therapies/>
      <RestorativeApproach/>

      <SignBlissBody/>
      <InterSection/>
      <Gallery/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>

    </div>
  )
}

export default BlissBody
