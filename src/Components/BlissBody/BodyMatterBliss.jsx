import React from 'react'
import { TbCircleCheck } from 'react-icons/tb'
import Text from '../Common/Text'
import Button from '../Common/Button'

const BodyMatterBliss = () => {
  return (
   <div className='py-10 lg:py-20'>
             <div className="py-10 xl:mt-40 lg:mt-20 mt-20">
                <div className=' flex flex-col gap-6 text-center max-w-7xl mx-auto mb-20'>
                       <Text variant='text5' className="  font-marcellous">The Bliss Body</Text>
                       <Text variant='text1' >The Bliss Body represents the deepest and most subtle layer of our being. It is the realm of pure consciousness, inner joy, and connection to the universal source energy. Unlike the other bodies, which function through thoughts, emotions, and physical sensations, the Bliss Body exists beyond duality. It is our true essence — the silent witness that is untouched by stress, pain, or worldly struggles.</Text>
                       <Text variant='' >When you connect with this layer, healing becomes profound and lasting, as it flows directly from the source of life itself.</Text>
                   </div>
               <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 px-4 font-inter">
                  
                 {/* Image Section */}
                 <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start justify-center">
                   <img
                     src="./85.png"
                     alt="Doctor"
                     className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
                   />
                 </div>
       
                 {/* Text Section */}
                 <div className="w-full lg:w-1/2 flex flex-col gap-4">
                   <Text variant='text5' className=" text-center lg:text-start font-marcellous">
                    Why the Bliss Body Matters
                   </Text >
                   <Text variant='text1' className='flex items-center justify-center lg:justify-start gap-3'>
                    <span><TbCircleCheck className="text-[#400186]"/></span>Connects you to your true essence — pure consciousness and universal energy
                   </Text>
                    <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Brings profound inner peace and freedom from fear or anxiety
                   </Text>
                    <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Allows healing to flow naturally from the deepest source
                   </Text>
                    <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Cultivates unconditional joy, independent of external circumstances
                   </Text>
                   <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Inspires love, compassion, and positive energy toward others
                   </Text>
       
                  <Button className='w-44 self-center lg:self-start'>Contact Us</Button>
                 </div>
               </div>
       
               <div className="max-w-7xl mx-auto mt-30  flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 px-4 font-inter">
                 {/* Text Section */}
                 <div className="w-full lg:w-1/2 flex flex-col gap-4">
                   <Text variant='text5' className="text-center lg:text-start  font-marcellous">
                    Signs of a Balanced Bliss Body
                   </Text >
                   <Text variant='text1' className='flex items-center justify-center lg:justify-start gap-3'>
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span> You feel a deep sense of peace, regardless of circumstances
                   </Text>
                    <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Joy arises naturally, without needing external triggers
                   </Text>
                    <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>A strong sense of connection to all living beings
                   </Text>
                    <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Emotional ups and downs no longer control your inner state
                   </Text>
                   <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3  
                   sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Life feels guided by trust, flow, and higher wisdom
                   </Text>
       
                 
                 </div>
                 {/* Image Section */}
                 <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start justify-center">
                   <img
                     src="./86.png"
                     alt="Doctor"
                     className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
                   />
                 </div>
               </div>
             </div>
           </div>
  )
}

export default BodyMatterBliss
