import React from 'react'
import { TbCircleCheck } from 'react-icons/tb'
import Text from '../Common/Text'
import Button from '../Common/Button'

const WisdomSuperMentalBody = () => {
  return (
    <div>
          <div className="py-10 lg:py-20 xl:mt-40 lg:mt-20 mt-20">
             <div className=' flex flex-col gap-6 p-3 md:p-0 text-center max-w-7xl mx-auto mb-20'>
                    <Text variant='text5' className="  font-marcellous">Supramental Body: The Gateway to Higher Wisdom</Text>
                    <Text variant='text1' >he Supramental Body represents your highest cognitive and intuitive functions—intuition, insight, and expanded awareness. It is the bridge between everyday consciousness and deeper universal wisdom, guiding you toward clarity and purpose.</Text>
                    <Text variant='text1' >Carl Jung described this as tapping into the collective unconscious, while meditation traditions call it accessing higher states of awareness. When this layer is active, you move beyond analytical thinking into a state where truths simply emerge—clear, profound, and life-guiding.</Text>
                </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 px-4 font-inter">
               
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex items-center  lg:justify-start justify-center">
                <img
                  src="./77.png"
                  alt="Doctor"
                  className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
                />
              </div>
    
              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <Text variant='text5' className="text-2xl text-center lg:text-left sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">
                 Why the Supermental Body Matters
                </Text>
                <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3  text-gray-700">When you access this higher layer of consciousness:</Text>
                <Text variant='text1' className=" flex items-center justify-center lg:justify-start  gap-3  text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>You make decisions with deep clarity instead of confusion or fear.
                </Text>
                 <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3   text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>Your life feels aligned with your true purpose.
                </Text>
                 <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3   text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>You trust your intuition, knowing it’s guided by a higher intelligence.
                </Text>
                 <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3   text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>You experience peace because you’re no longer battling with doubts and overthinking.
                </Text>
    
               <Button className='w-44 self-center lg:self-start'>Contact Us</Button>
              </div>
            </div>
    
            <div className="max-w-7xl mx-auto mt-30  flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 px-4 font-inter">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <Text variant='text5' className="text-2xl text-center lg:text-left sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">
                 Signs of a Balanced Supermental Body
                </Text>
                <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3  text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span> A strong sense of inner knowing – you feel guided even without external validation.
                </Text>
                 <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3   text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>Effortless decision-making – clarity flows easily when you need it.
                </Text>
                 <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3   text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>Unshakeable trust in life’s process.
                </Text>
                 <Text variant='text1' className=" flex items-center justify-center lg:justify-start gap-3   text-gray-700">
                 <span><TbCircleCheck className="text-[#400186]"/>
    </span>Alignment between thoughts, actions, and higher purpose.
                </Text>
    
              
              </div>
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex items-center  lg:justify-start justify-center">
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

export default WisdomSuperMentalBody
