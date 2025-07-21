import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarDays, Phone } from "lucide-react";

const BookingSection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="max-w-6xl mx-auto px-4 font-inter">
      {/* TOP SECTION */}
      <section className="mt-20 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-marcellous">
              Let’s Explore What’s Possible
            </h2>
            <p className="text-gray-600 text-base max-w-md mx-auto lg:mx-0">
              Ready to see how You Only Younger can help your team move faster
              and simplify research? Book a time to connect — we’d love to learn
              about your goals.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* Box 1 */}
          <div className="border p-4 md:p-3 rounded-2xl flex-1 bg-white shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold">You Only Younger</h3>
                <p className="text-xl font-semibold mt-2">
                  Intro Call (30 mins)
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CalendarDays className="w-4 h-4" />
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4" />
                <span>Phone call</span>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                This is an example of a meeting you would have with a potential
                customer to demonstrate your product.
              </p>

              <div className="text-xs flex justify-between pt-6 text-gray-400">
                <a href="#">Cookie settings</a>
                <a href="#">Report abuse</a>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="border p-4 md:p-3 rounded-2xl flex-1 bg-white shadow-sm">
            <p className="font-medium text-sm mb-2">Select a Date & Time</p>
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-lg shadow-sm border w-full"
            />
            <p className="text-xs mt-3 text-gray-600">
              Selected Date:{" "}
              <span className="font-medium">{date.toDateString()}</span>
            </p>

            <div className="text-xs mt-2 text-gray-600">
              Time zone:{" "}
              <span className="font-medium">
                Central European Time (8:11pm)
              </span>
            </div>

            <button className="w-full cursor-pointer mt-3 border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100 transition">
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
          <h1 className="text-3xl md:text-4xl font-semibold font-marcellous">
            Start Your Wellness Journey Today
          </h1>
          <p>
            Let’s transform your health—together. Connect with us to discover
            how You Only Younger can help you heal the root cause, elevate
            energy, and restore balance at every level.
          </p>
          <button className="mt-6 bg-[#400186] w-44 text-white px-5 py-2 rounded-full cursor-pointer transition self-center md:self-start">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
