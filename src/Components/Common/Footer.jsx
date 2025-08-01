import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

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
          <div className="flex flex-col lg:flex-row gap-44">
            {/* Left Column */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <img src="./6.png" alt="Logo" className="w-40 sm:w-52" />
              <p className="text-lg leading-relaxed">
                At You Only Younger, we go beyond treating symptoms — we uncover
                the root cause and guide you through personalized, proven steps
                to lasting, whole-body health.
              </p>
              <img src="./45.png" alt="Sub Logo" className="w-32 sm:w-44" />
              <hr className="border-white/40" />

              <div className="flex items-center gap-6">
                <Facebook size={18} className="cursor-pointer hover:text-gray-300" />
                <Instagram size={18} className="cursor-pointer hover:text-gray-300" />
                <Youtube size={18} className="cursor-pointer hover:text-gray-300" />
              </div>

              <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-200 transition">
                Contact us
              </button>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              {/* Contact and Hours */}
              <div className="flex flex-col sm:flex-row gap-10 w-full">
                {/* Let’s Chat */}
                <div className="flex flex-col gap-4 w-1/2">
                  <h3 className="text-3xl font-marcellous">Let’s Chat</h3>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <Phone size={16} />
                    <span>+1 (346) 746-6759</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <Mail size={16} />
                    <span>Info@YouOnlyYounger.com</span>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-base">
                    <MapPin size={18} />
                    <span>
                      Greatwood Professional Center <br />
                      7002 Riverbrook Suite 700 <br />
                      Sugar Land, TX 77479
                    </span>
                  </div>
                </div>

                {/* Clinic Hours */}
                <div className="flex flex-col gap-1 text-base w-1/2">
                  <h3 className="text-3xl font-marcellous">Clinic Hours</h3>
                  <p className="mt-3">Mon–Wed: 9:00am—5:00pm</p>
                  <p>Thurs: 11:00am—5:00pm, After 6pm by Appt</p>
                  <p>Fri: 9:00am—5:00pm</p>
                  <p>Sat: 9:00am—3:00pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>

              {/* URLs */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-marcellous">URLs</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm sm:text-base">
                  <a href="#">About</a>
                  <a href="#">Med spa</a>
                  <a href="#">Health</a>
                  <a href="#">Healing</a>
                  <a href="#">Gallery</a>
                  <a href="#">Contact</a>
                  <a href="#">Blog</a>
                  <a href="#">FAQ’s</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Conditions</a>
                  <a href="#">Careers</a>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="mt-8 text-sm sm:text-base text-center leading-relaxed">
            <strong>Accessibility:</strong> If you are vision-impaired or have some
            other impairment covered by the Americans with Disabilities Act or a
            similar law, and you wish to discuss potential accommodations related
            to using this website, please contact our Accessibility Manager at{" "}
            <a href="tel:+13467466759" className="underline">(346) 746-6759</a>.
          </div>
        </footer>

        {/* Bottom Bar */}
        <div className="p-3 border-t border-white text-center text-xs sm:text-sm">
          © youonlyyounger 2025. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
