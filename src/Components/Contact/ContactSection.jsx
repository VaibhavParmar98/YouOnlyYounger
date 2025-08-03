import React from "react";
import { Mail } from "lucide-react";
import Text from "../Common/Text";
import Button from "../Common/Button";

const ContactSection = () => {
  return (
    <section className="bg-purple-50 py-10 lg:py-20 px-4 font-inter">
      <Text variant="text2" className="text-center mb-6 font-marcellous">
        Let’s Talk
      </Text>
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Map Embed */}
        <div className="md:w-1/2 w-full">
          <iframe
            title="You Only Younger Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11093.261290659822!2d-95.6242173394116!3d29.59420384148111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e46b3046ab47%3A0x3d59843e56ce059a!2sYou%20Only%20Younger!5e0!3m2!1sen!2sus!4v1687983483396!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl border"
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 w-full space-y-4">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-md p-3  bg-white"
            />
            <input
              type="text"
              placeholder="Phone No."
              className="w-full border rounded-md p-3 bg-white"
            />
            <textarea
              rows="4"
              placeholder="Your Message (include Requirements, etc.)*"
              className="w-full border rounded-md px-4 py-2 bg-white"
            ></textarea>

            <div className="flex justify-between md:gap-6 lg:gap-0 gap-0">
             <Button className="w-44 h-13">Submit</Button>
              <div className="flex items-center gap-3 lg:mt-6">
                <div className="bg-purple-200 text-[#400186] lg:p-2 p-0.5 rounded-full">
                  <Mail size={18} />
                </div>
                <div>
                  <Text variant="text1" className="font-bold ">Email</Text>
                  <Text variant="text1" className="font-bold text-gray-700">
                    Info@YouOnlyYounger.com
                  </Text>
                </div>
              </div>
            </div>
          </form>

          {/* Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
