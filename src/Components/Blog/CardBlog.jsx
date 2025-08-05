import React from 'react'
import Text from '../Common/Text'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const CardBlog = () => {

    const navigate = useNavigate()

  return (
    <>
    
       <div className='max-w-7xl mx-auto mt-40 py-10 lg:py-20'>
             <div className='text-center'>
            <Text variant='text5' className='marcellus-text'>Blog</Text>
            <Text variant='text1'>tset</Text>
        </div>
        <div onClick={() => navigate("/blog-one")} className=" w-[530px] cursor-pointer border mx-auto bg-[#F6F6F6] rounded-t-lg rounded-b-lg overflow-hidden flex-shrink-0 flex flex-col">
             <img
               src='./102.jpeg'
               alt='blog'
               className="w-full h-72 object-cover"
             />
       
             <div className="flex p-3 flex-col flex-grow justify-between h-full">
               <div>
                 <Text variant="text4" className=" px-2  mt-4 marcellus-text">IV Therapy</Text>
       
                 {/* ✅ FIX: Use normal text wrapping */}
                 <Text variant="text1" className="px-2 mt-2 text-gray-700  whitespace-normal break-words leading-normal">
                   Unpacking Benifits of IV Therapy
                 </Text>
                 <Text className='px-2 mt-2 line-clamp-3'>Once seen as an exotic or “Hollywood” type medical treatment, Intravenous Fluid (IV) Therapy has gained increasing popularity in recent years. While most people can get sufficient vitamins from their food, in cases of aging, disease, or even just poor diet due to modern lifestyle and food options, IV therapy can offer substantial improvements to the quality of life and symptom relief for various health</Text>
               </div>
       
               <div className="mt-2 flex flex-col gap-3 px-2 pb-2">
                 <Text variant="text3" className=" mt-1 font-semibold">September 24, 2024</Text>
                <span className='flex items-center gap-2 cursor-pointer'>Click <FaArrowRight className="text-[#400186] mt-0.5" /></span>
               </div>
             </div>
           </div>
       </div>
    </>
  )
}

export default CardBlog
