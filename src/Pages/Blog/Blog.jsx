import React from 'react'
import BannerBlog from '../../Components/Blog/BannerBlog'
import CardBlog from '../../Components/Blog/CardBlog'
import ClientReview from '../../Components/Common/ClientReview'
import FandQ from '../../Components/Common/FandQ'
import DeepHealing from '../../Components/Common/DeepHealing'

const Blog = () => {
  return (
    <div>
      <BannerBlog/>
      <CardBlog/>
      <ClientReview/>
      <FandQ/>
      <DeepHealing/>
    </div>
  )
}

export default Blog
