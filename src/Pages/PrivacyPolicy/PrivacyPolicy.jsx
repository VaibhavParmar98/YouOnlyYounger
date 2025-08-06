import React from 'react'
import BannerPrivacyPolicy from '../../Components/PrivacyPolicy/BannerPrivacyPolicy'
import DetailPrivacyPolicy from '../../Components/PrivacyPolicy/DetailPrivacyPolicy'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'

const PrivacyPolicy = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerPrivacyPolicy/>
      <DetailPrivacyPolicy/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default PrivacyPolicy
