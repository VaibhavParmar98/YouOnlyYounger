import React from 'react'
import Button from '../Common/Button'
import Text from '../Common/Text'

const CirculationVitalBody = () => {
  return (
    <div>
       <div className="py-10 lg:py-20 xl:mt-40 lg:mt-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="./72.png"
            alt="Doctor"
            className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-4">
          <Text variant='text5' className="  font-marcellous">
The Body of Energy and Circulation          </Text>
          <Text variant='text1' className=" ">
The Vital Body is your energetic powerhouse—the invisible current that fuels every cell, organ, and system. It governs digestion, immunity, and overall vitality, ensuring that your physical body stays vibrant and resilient. When your Vital Body is balanced, you feel energetic, radiant, and alive; when depleted, fatigue and illness creep in.          </Text>
         
          <Button className='w-44 self-center lg:self-start'>Contact Us</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CirculationVitalBody
