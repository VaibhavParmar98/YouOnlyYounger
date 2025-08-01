import React from 'react'
import BannerSuperMentalBody from '../../Components/SuperMentalBody/BannerSuperMentalBody'
import WisdomSuperMentalBody from '../../Components/SuperMentalBody/WisdomSuperMentalBody'
import ImbalanceSignsSection from '../../Components/Common/ImbalanceSignsSection '
import Therapies from '../../Components/Common/Therapies'
import RestorativeApproach from '../../Components/Common/Restorative Approach'
import SignMentalBody from '../../Components/Common/SignMentalBody'
import InterSection from '../../Components/Common/InterSection'
import Gallery from '../../Components/Common/Gallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'

const SuperMentalBody = () => {
  return (
    <div>
      <BannerSuperMentalBody/>
      <WisdomSuperMentalBody/>
      <ImbalanceSignsSection/>
      <Therapies/>
      <RestorativeApproach/>
      <SignMentalBody/>
      <InterSection/>
      <Gallery/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default SuperMentalBody
