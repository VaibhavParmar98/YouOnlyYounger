import React from 'react'
import BannerVital from '../../Components/VitalBody/BannerVital'
import CirculationVitalBody from '../../Components/VitalBody/CirculationVitalBody'
import MatterVitalBody from '../../Components/VitalBody/MatterVitalBody'
import ImbalanceSignsSection from '../../Components/Common/ImbalanceSignsSection '
import Therapies from '../../Components/Common/Therapies'
import InterSection from '../../Components/Common/InterSection'
import Gallery from '../../Components/Common/Gallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'
import StrengthVitalBody from '../../Components/Common/StrengthVitalBody'

const VitalBody = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerVital/>
      <CirculationVitalBody/>
      <ImbalanceSignsSection/>
      <Therapies/>
      <StrengthVitalBody/>
      <MatterVitalBody/>
      <InterSection/>
      <Gallery/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default VitalBody
