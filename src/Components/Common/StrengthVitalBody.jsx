import React from 'react'
import { BsShieldFillPlus, BsJournalPlus } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { LuGitGraph } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import Text from "./Text";

const StrengthVitalBody = () => {
  return (
   <div className="max-w-7xl mx-auto px-4 py-10 lg:pt-10 lg:pb-20 ">
         {/* Heading Section */}
         <div className="flex flex-col gap-4 items-center text-center mb-10">
           <img src="./32.png" alt="" className="w-20 h-20 object-contain" />
           <Text variant="text5" className="  marcellus-text leading-tight">
How to Strengthen Your Vital Body           </Text  >
           <Text variant="text1" >
Your Vital Body thrives on movement, nourishment, and energy flow. Try these daily practices to recharge your life force:           </Text>
         </div>
   
         {/* Grid Section */}
         <div className="flex flex-wrap justify-center gap-6">
           {/* Card 1 */}
           <div className="bg-[#EFECFD] p-5 rounded-lg  flex flex-col gap-2 w-[400px] h-[230px]">
             <img src='./92.svg' size={40} className="text-white bg-[#7355EC] h-16 w-16 p-4  rounded" />
             <Text variant="text3" className="font-bold ">Breathe & Move Your Energy</Text >
             <Text variant="text3" className="line-clamp-3">
Use pranayama, breathwork, Qi Gong, Tai Chi, or yoga to increase oxygen flow, release stagnant energy, and improve circulation.             </Text>
           </div>
   
           {/* Card 2 */}
           <div className="bg-[#FFF2E0] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
             <img src='./91.svg' size={40} className="text-white bg-[#FFCC78] h-16 w-16 p-4  rounded" />
             <Text variant="text3" className="font-bold ">Eat Vital Foods</Text  >
             <Text variant="text3" className="line-clamp-3">
Choose fresh, whole, and seasonal foods rich in life force energy, and include fermented foods and probiotics to support gut health and boost vitality.             </Text>
           </div>
   
           {/* Card 3 */}
           <div className="bg-[#F0F8FF] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
             <img src='./94.svg' size={40} className="text-white bg-[#66C7FF] h-16 w-16 p-4  rounded" />
             <Text variant="text3" className="font-bold ">Rest & Recharge Naturally</Text >
             <Text variant="text3" className="line-clamp-3">
Get morning sunlight for vitamin D and spend time in nature or grounding practices to balance your energetic field.             </Text>
           </div>
   
           {/* Card 4 */}
           <div className="bg-[#EAF7F2] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
             <img src='./93.svg' size={40} className="text-white bg-[#28B078] h-16 w-16 p-4  rounded" />
             <Text variant="text3" className="font-bold ">Protect Your Energy</Text  >
             <Text variant="text3" className="line-clamp-3">
Avoid toxic environments or draining interactions, and practice meditation or visualization rituals to cleanse and restore energy daily.             </Text>
           </div>
   
           {/* Card 5 */}
           <div className="bg-[#FEE4D9] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
             <img src='./95.svg' size={40} className="text-white bg-[#F4877A] h-16 w-16 p-4  rounded" />
             <Text variant="text3" className="font-bold ">Strengthen Immunity</Text >
             <Text variant="text3" className="line-clamp-3">
Drink herbal teas, use adaptogens (ashwagandha, ginseng), and stay hydrated to keep your immune system strong and energy channels clear.             </Text>
           </div>
         </div>
       </div>
  )
}

export default StrengthVitalBody
