import React from 'react'
import { TbCircleCheck } from 'react-icons/tb'

const BodyMatterBliss = () => {
  return (
   <div>
             <div className="py-10 xl:mt-40 lg:mt-20 mt-20">
                <div className=' flex flex-col gap-6 text-center max-w-7xl mx-auto mb-20'>
                       <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">The Bliss Body</h1>
                       <p className="text-sm flex items-center gap-3 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">The Bliss Body represents the deepest and most subtle layer of our being. It is the realm of pure consciousness, inner joy, and connection to the universal source energy. Unlike the other bodies, which function through thoughts, emotions, and physical sensations, the Bliss Body exists beyond duality. It is our true essence — the silent witness that is untouched by stress, pain, or worldly struggles.</p>
                       <p className="text-sm flex items-center gap-3 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">When you connect with this layer, healing becomes profound and lasting, as it flows directly from the source of life itself.</p>
                   </div>
               <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
                  
                 {/* Image Section */}
                 <div className="w-full lg:w-1/2 flex items-center justify-center">
                   <img
                     src="./77.png"
                     alt="Doctor"
                     className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
                   />
                 </div>
       
                 {/* Text Section */}
                 <div className="w-full lg:w-1/2 flex flex-col gap-4">
                   <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">
                    Why the Bliss Body Matters
                   </h1>
                   <p className="text-sm flex items-center gap-3 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/></span>Connects you to your true essence — pure consciousness and universal energy
                   </p>
                    <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Brings profound inner peace and freedom from fear or anxiety
                   </p>
                    <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Allows healing to flow naturally from the deepest source
                   </p>
                    <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Cultivates unconditional joy, independent of external circumstances
                   </p>
                   <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Inspires love, compassion, and positive energy toward others
                   </p>
       
                   <button className="w-fit px-6 xl:text-xl py-3 text-white bg-[#400186] rounded-full hover:bg-[#310066] transition">
                     Contact Us
                   </button>
                 </div>
               </div>
       
               <div className="max-w-7xl mx-auto mt-30  flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
                 {/* Text Section */}
                 <div className="w-full lg:w-1/2 flex flex-col gap-4">
                   <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">
                    Signs of a Balanced Bliss Body
                   </h1>
                   <p className="text-sm flex items-center gap-3 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span> You feel a deep sense of peace, regardless of circumstances
                   </p>
                    <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Joy arises naturally, without needing external triggers
                   </p>
                    <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>A strong sense of connection to all living beings
                   </p>
                    <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Emotional ups and downs no longer control your inner state
                   </p>
                   <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
                    <span><TbCircleCheck className="text-[#400186]"/>
       </span>Life feels guided by trust, flow, and higher wisdom
                   </p>
       
                 
                 </div>
                 {/* Image Section */}
                 <div className="w-full lg:w-1/2 flex items-center justify-center">
                   <img
                     src="./78.png"
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
