import React from 'react'
import BannerGallery from '../../Components/Gallery/BannerGallery'
import BeforAfterGallery from '../../Components/Gallery/BeforAfterGallery'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'

const Gallery = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerGallery/>
      <BeforAfterGallery/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default Gallery
