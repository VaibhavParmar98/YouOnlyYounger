import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarDays, Phone } from "lucide-react";
import Text from "../Common/Text";
import { NavLink } from "react-router-dom";
import Button from "../Common/Button";

const BookingSection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="max-w-7xl py-10 lg:py-20 2xl:mt-52 xl:mt-52 lg:mt-28 mx-auto px-4 font-inter">
      {/* TOP SECTION */}
      <section className="mt-20 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <Text variant="text2" className=" leading-tight font-marcellous">
              Let’s Explore What’s Possible
            </Text>
            <Text variant="text1" className="text-gray-600 text-base max-w-md mx-auto lg:mx-0">
              Ready to see how You Only Younger can help your team move faster
              and simplify research? Book a time to connect — we’d love to learn
              about your goals.
            </Text>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* Box 1 */}
          <div className="border p-4 md:p-3 rounded-2xl flex-1 bg-white shadow-sm">
            <div className="space-y-6">
              <div>
<img src="./51.png" alt="" className=""/>                <Text variant="text4" className="font-semibold mt-2">
                  Intro Call (30 mins)
                </Text>
              </div>

              <div className="flex items-center gap-2  text-gray-700">
                <CalendarDays className="w-4 h-4" />
                <Text variant="text1">30 min</Text>
              </div>
              <div className="flex items-center gap-2  text-gray-700">
                <Phone className="w-4 h-4" />
                <Text variant="text1">Phone call</Text>
              </div>

              <Text variant="text1" className=" text-gray-600 mt-2">
                This is an example of a meeting you would have with a potential
                customer to demonstrate your product.
              </Text>

              <div className="
             flex justify-between pt-6 text-gray-400">
                <NavLink  className='text-[#7D2AE8]'>Cookie settings</NavLink>
                <NavLink className='text-gray-700'>Report abuse</NavLink>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="border p-4 md:p-3 rounded-2xl flex-1 bg-white shadow-sm">
            <Text variant="text1" className="font-medium  mb-2">Select a Date & Time</Text>
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-lg shadow-sm border w-full"
            />
            <Text variant="text1" className="
           mt-3 text-gray-600">
              Selected Date:{" "}
              <Text variant="text1" className="font-medium">{date.toDateString()}</Text>
            </Text>

            <div className="
           mt-2 text-gray-600">
              Time zone:{" "}
              <Text variant="text1">
                Central European Time (8:11pm)
              </Text>
            </div>

            <button className="w-full cursor-pointer mt-3 border border-gray-300 rounded-full py-2  hover:bg-gray-100 transition">
              Troubleshooting
            </button>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row gap-10 py-10 items-center">
        <div className="w-full md:w-1/2">
          <img src="./44.png" alt="Wellness" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3 text-center md:text-left">
          <Text variant="text2" className=" font-marcellous">
            Start Your Wellness Journey Today
          </Text>
          <Text variant="text1">
            Let’s transform your health—together. Connect with us to discover
            how You Only Younger can help you heal the root cause, elevate
            energy, and restore balance at every level.
          </Text>
          <Button className="w-44 self-center md:self-start">Get Start</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
