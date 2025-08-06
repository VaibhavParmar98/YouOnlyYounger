import React from 'react'
import PhysicalBanner from '../../Components/PhsicalBody/PhysicalBanner'
import ImbalanceSignsSection from '../../Components/Common/ImbalanceSignsSection '
import RestorativeApproach from '../../Components/Common/Restorative Approach'
import HealingSection from '../../Components/PhsicalBody/HealingSection'
import Consultation from '../../Components/Common/Consultation'
import Gallery from '../../Components/Common/Gallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'
import Tools from '../../Components/PhsicalBody/Tools'

const PhysicalBody = () => {
  return (
    <div className='overflow-x-hidden'>
      <PhysicalBanner/>
      <ImbalanceSignsSection/>
      <Tools/>
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
