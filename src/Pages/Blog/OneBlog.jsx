import React from 'react'
import BannerOneBlog from '../../Components/OneBlog/BannerOneBlog'
import DetailBlog from '../../Components/OneBlog/DetailBlog'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'

const OneBlog = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerOneBlog/>
      <DetailBlog/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default OneBlog
