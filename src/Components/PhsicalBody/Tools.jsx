import React from 'react'
import Text from '../Common/Text'

const Tools = () => {
  return (
    <div className='bg-[#400186] py-10 lg:py-20 '>
      <div className='max-w-6xl mx-auto text-center mb-20 text-white'>
        <Text variant='text5' className='marcellus-text leading-tight'>Tools & Therapies We Use</Text>
        <Text variant='text1'>To restore and rebalance your Physical Body, we use a combination of advanced diagnostics and natural therapies. These methods work together to support healing, reduce symptoms, and strengthen your body’s core systems.</Text>
      </div>
      <div className='max-w-7xl grid grid-cols-1 md:grid-cols-3 mx-auto  text-white'>


      <div className=' items-center justify-center'>
        <div className='flex flex-col gap-4 md:text-right text-center items-center  '>
          <div className='flex flex-col gap-3 md:text-right text-center'>
          <h1 variant='text5' className='text-[20px] md:text-[20px] lg:text-[30px] xl:text-[36px] '>Functional Testing<span className='ml-6   bg-[#9698F8] rounded-full lg:px-3 px-2  lg:py-1 md:py-0.5 text-sm lg:text-lg  '>1</span></h1>
          <Text variant='text1' className='mr-7'>We use detailed lab panels to uncover hidden imbalances in your gut, hormones, nutrients, and overall body systems.</Text>
        </div>
        <div className='flex flex-col gap-3 md:text-right text-center mr-10'>
          <h1 variant='text5' className='text-[20px] md:text-[20px] lg:text-[30px] xl:text-[36px]'>Movement Rehab<span className='ml-6   bg-[#EB4026]  rounded-full lg:px-3 px-2  lg:py-1 md:py-0.5 text-sm lg:text-lg    '>6</span></h1>
          <Text variant='text1' className='mr-7'>Personalized movement, stretching, and recovery plans that restore strength, flexibility, and physical comfort over time.</Text>
        </div>
        <div className='flex flex-col gap-3 md:text-right text-center'>
          <h1 variant='text5' className='text-[20px] md:text-[20px] lg:text-[30px] xl:text-[36px]'>Gentle Detox<span className='ml-6   bg-[#EF8534]  rounded-full lg:px-3 px-2  lg:py-1 md:py-0.5 text-sm lg:text-lg    '>5</span></h1>
          <Text variant='text1' className='mr-7'>Safe, non-invasive methods to clear toxins, reduce inflammation, and enhance your body’s natural cleansing abilities.</Text>
        </div>
        </div>
      </div>

      <div className=''>
        <img src="./84.png" alt="" className='rounded-full  md:mt-20 lg:mt-0 mt-0'/>
      </div>

      <div className=''>
         <div className='flex flex-col gap-4 md:text-left text-center items-center  '>
          <div className='flex flex-col gap-3 md:text-left text-center'>
          <h1 variant='text5' className='text-[20px] md:text-[20px] lg:text-[30px] xl:text-[36px]'><span className='mr-6   bg-[#7779EC]  rounded-full lg:px-3 px-2  lg:py-1 md:py-0.5 text-sm lg:text-lg      '>2</span>Targeted Nutrition</h1>
          <Text variant='text1' className='ml-7'>Customized food and supplement plans designed to support healing, reduce inflammation, and nourish your body from within.</Text>
        </div>
        <div className='flex flex-col gap-3 md:text-left text-center md:ml-10 ml-0'>
          <h1 variant='text5' className='text-[20px] md:text-[20px] lg:text-[30px] xl:text-[36px]'><span className='mr-6  bg-[#403491]  rounded-full lg:px-3 px-2  lg:py-1 md:py-0.5 text-sm lg:text-lg     '>3</span>IV Therapy</h1>
          <Text variant='text1' className='ml-7'>Fast-acting vitamin infusions to boost immunity, energy, hydration, and recovery at a deep cellular level.</Text>
        </div>
        <div className='flex flex-col gap-3 md:text-left text-center'>
          <h1 variant='text5' className='text-[20px] md:text-[20px] lg:text-[30px] xl:text-[36px]'><span className='mr-6  bg-[#F1BA40]  rounded-full lg:px-3 px-2  lg:py-1 md:py-0.5 text-sm lg:text-lg     '>4</span>Hormone Support</h1>
          <Text variant='text1' className='ml-7'>Natural protocols to balance thyroid, cortisol, and reproductive hormones for better mood, metabolism, and vitality.</Text>
        </div>
        </div>
      </div>

      </div>


      
    </div>
  )
}

export default Tools
