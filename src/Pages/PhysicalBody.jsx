import React from 'react'
import PhysicalBanner from '../Components/PhysicalBanner'
import ImbalanceSignsSection from '../Components/ImbalanceSignsSection '
import Tools from '../Components/Tools'
import RestorativeApproach from '../Components/Restorative Approach'
import HealingSection from '../Components/HealingSection'
import Consultation from '../Components/Consultation'
import Gallery from '../Components/Gallery'
import ClientReview from '../Components/ClientReview'
import FandQ from '../Components/FandQ'
import DeepHealing from '../Components/DeepHealing'

const PhysicalBody = () => {
  return (
    <div>
      <PhysicalBanner/>
      <ImbalanceSignsSection/>
      {/* <Tools/> */}
      <RestorativeApproach/>
      <HealingSection/>
      <Consultation/>
      <Gallery/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default PhysicalBody
