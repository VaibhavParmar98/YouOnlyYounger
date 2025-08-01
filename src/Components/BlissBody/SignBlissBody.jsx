import React from 'react'
import { TbCircleCheckFilled } from 'react-icons/tb'

const SignBlissBody = () => {
  return (
     <div className="py-10 bg-[#F6F6F6]">
          <div className="max-w-7xl w-full mx-auto lg:flex-row flex flex-col p-6 md:p-0 items-center justify-center gap-10">
            <img src="./79.png" alt="" className="xl:w-auto xl:h-auto  h-64 lg:w-1/2 w-full lg:ml-6 ml-0 xl:ml-0" />
            <div className="flex flex-col gap-3 lg:w-1/2 w-full">
              <h1 className="text-4xl font-marcellous">
              Signs Your Bliss Body Needs Support
              </h1>
              <p className="flex items-center gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
               Struggling to feel inner peace
              </p>
              <p className="flex items-center gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Happiness depends on external situations
              </p>
              <p className="flex items-center gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Feeling disconnected from life’s purpose
              </p>
              <p className="flex items-center gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Persistent anxiety or fear dominates
              </p>
              <p className="flex items-center gap-3 text-xl">
                <span>
                  <TbCircleCheckFilled className="text-[#400186] " />
                </span>
                Difficulty experiencing gratitude or compassion
              </p>{" "}
              <button className="w-fit px-6 mt-3 xl:text-xl py-3 text-white bg-[#400186] rounded-full hover:bg-[#310066] transition">
                Book an appointment
              </button>
            </div>
          </div>
        </div>
  )
}

export default SignBlissBody
