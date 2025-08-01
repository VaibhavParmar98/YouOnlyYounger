import React from 'react'
import BannerMentalBody from '../../Components/MentalBody/BannerMentalBody'
import LayerMentalBody from '../../Components/MentalBody/LayerMentalBody'
import ImbalanceSignsSection from '../../Components/Common/ImbalanceSignsSection '
import Therapies from '../../Components/Common/Therapies'
import RestorativeApproach from '../../Components/Common/Restorative Approach'
import InterSection from '../../Components/Common/InterSection'
import Gallery from '../../Components/Common/Gallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'
import SignMentalBody from '../../Components/Common/SignMentalBody'

const MentalBody = () => {
  return (
    <div>
      <BannerMentalBody/>
      <LayerMentalBody/>
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

export default MentalBody
