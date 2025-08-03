import React from 'react'
import { TbCircleCheckFilled } from 'react-icons/tb'
import Text from '../Common/Text'
import Button from '../Common/Button'

const SignBlissBody = () => {
  return (
     <div className="py-10 lg:py-20 bg-[#F6F6F6]">
          <div className="max-w-7xl w-full mx-auto lg:flex-row flex flex-col p-6 md:p-0 items-center justify-center lg:justify-start justify-center gap-10">
            <img src="./79.png" alt="" className="xl:w-auto xl:h-auto md:w-96  h-64 lg:w-1/2 w-full lg:ml-6 ml-0 xl:ml-0" />
            <div className="flex flex-col gap-3 lg:w-1/2 w-full">
              <Text variant='text5' className=" font-marcellous text-center lg:text-start">
              Signs Your Bliss Body Needs Support
              </Text>
              <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
               Struggling to feel inner peace
              </Text>
              <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Happiness depends on external situations
              </Text>
              <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Feeling disconnected from life’s purpose
              </Text>
              <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Persistent anxiety or fear dominates
              </Text>
              <Text variant='text1' className="flex items-center justify-center lg:justify-start gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Difficulty experiencing gratitude or compassion
              </Text>{" "}
              <Button className='w-52 self-center lg:self-start'>Book Appointment</Button>
            </div>
          </div>
        </div>
  )
}

export default SignBlissBody
