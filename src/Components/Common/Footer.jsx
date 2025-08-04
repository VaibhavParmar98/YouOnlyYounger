import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Text from "./Text";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="relative text-white font-inter overflow-hidden">
      {/* Overlay Image on Top of Everything (no effect on background) */}
      <img
        src="./69.png"
        alt="Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover z-50 opacity-10 pointer-events-none mix-blend-normal"
      />

      {/* Actual Content with Pure Purple Background */}
      <div className="relative z-40 bg-[#400186]">
        <footer className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row xl:gap-44 gap-10">
            {/* Left Column */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <img
                src="./6.png"
                alt="Logo"
                className="w-40 sm:w-52 lg:self-start self-center"
              />
              <Text
                variant="text1"
                className=" leading-relaxed text-center lg:text-start"
              >
                At You Only Younger, we go beyond treating symptoms — we uncover
                the root cause and guide you through personalized, proven steps
                to lasting, whole-body health.
              </Text>
              <img
                src="./45.png"
                alt="Sub Logo"
                className="w-32 sm:w-44 lg:self-start self-center"
              />
              <hr className="border-white/40" />

              <div className=" items-center gap-20 lg:self-start self-center">
                <div className="flex gap-30">
                  <div className="flex items-center gap-6 lg:self-start self-center">
                    <a href="https://www.facebook.com/youonlyyounger.medspa">
                      {" "}
                      <Facebook
                        size={18}
                        className="cursor-pointer hover:text-gray-300"
                      />
                    </a>
                    <a href="https://www.instagram.com/youonlyyounger/">
                      {" "}
                      <Instagram
                        size={18}
                        className="cursor-pointer hover:text-gray-300"
                      />
                    </a>{" "}
                    <a href="https://www.youtube.com/">
                      {" "}
                      <Youtube
                        size={18}
                        className="cursor-pointer hover:text-gray-300"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/you-only-younger">
                      {" "}
                      <Youtube
                        size={18}
                        className="cursor-pointer hover:text-gray-300"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://maps.app.goo.gl/UrSo3CqS7r5m834D6">
                      <Text
                        variant="text3"
                        className="flex items-center justify-center text-center"
                      >
                        LEAVE A REVIEW <br />
                        4.9 STARS FROM 58 REVIEWS
                      </Text>
                    </a>
                  </div>
                </div>
                <div>
                  <Button
                    variant="colourWhite"
                    className="w-44 lg:self-start self-center"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 flex flex-col md:gap-8 gap-2">
              {/* Contact and Hours */}
              <div className="flex flex-col sm:flex-row gap-10 w-full">
                {/* Let’s Chat */}
                <div className="flex flex-col gap-4 md:w-1/2 w-full">
                  <Text
                    variant="text4"
                    className=" marcellus-text leading-tight text-center lg:text-start"
                  >
                    Let’s Chat
                  </Text>
                  <Text
                    variant="text1"
                    className="flex items-center gap-2 justify-center lg:items-start lg:justify-start"
                  >
                    <Phone size={16} className="text-center md:text-start" />
                    <span className="text-center md:text-start">
                      +1 (346) 746-6759
                    </span>
                  </Text>
                  <Text
                    variant="text1"
                    className="flex items-center gap-2 justify-center lg:items-start lg:justify-start"
                  >
                    <Mail size={16} />
                    <span>Info@YouOnlyYounger.com</span>
                  </Text>
                  <Text
                    variant="text1"
                    className="flex gap-2 justify-center lg:items-start lg:justify-start"
                  >
                    <MapPin size={18} />
                    <span>
                      Greatwood Professional Center <br />
                      7002 Riverbrook Suite 700 <br />
                      Sugar Land, TX 77479
                    </span>
                  </Text>
                </div>

                {/* Clinic Hours */}
                <div className="flex flex-col gap-1 text-base md:w-1/2 w-full text-center lg:text-start ">
                  <Text
                    variant="text4"
                    className=" marcellus-text leading-tight text-center lg:text-start"
                  >
                    Clinic Hours
                  </Text>
                  <Text variant="text1" className="mt-3">
                    Mon–Wed: 9:00am—5:00pm
                  </Text>
                  <Text variant="text1">
                    Thurs: 11:00am—5:00pm, After 6pm by Appt
                  </Text>
                  <Text variant="text1">Fri: 9:00am—5:00pm</Text>
                  <Text variant="text1">Sat: 9:00am—3:00pm</Text>
                  <Text variant="text1">Sun: Closed</Text>
                </div>
              </div>

              {/* URLs */}
              <div className="flex flex-col gap-3 mt-6 md:mt-0">
                <Text
                  variant="text4"
                  className=" marcellus-text leading-tight text-center lg:text-start"
                >
                  URLs
                </Text>
                <div className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
                  <Text variant="text1" className="text-center lg:text-start">
                    About
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Med spa
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Health
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Healing
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Gallery
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Contact
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Blog
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    FAQ’s
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Privacy Policy
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Conditions
                  </Text>
                  <Text variant="text1" className="text-center lg:text-start">
                    Careers
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Note */}
          <Text variant="text1" className="mt-8  text-center leading-relaxed">
            <strong>Accessibility:</strong> If you are vision-impaired or have
            some other impairment covered by the Americans with Disabilities Act
            or a similar law, and you wish to discuss potential accommodations
            related to using this website, please contact our Accessibility
            Manager at{" "}
            <a href="tel:+13467466759" className="underline">
              (346) 746-6759
            </a>
            .
          </Text>
        </footer>

        {/* Bottom Bar */}
        <Text
          variant="text1"
          className="p-3 border-t border-white text-center "
        >
          © youonlyyounger 2025. All Rights Reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
