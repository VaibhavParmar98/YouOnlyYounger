import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "./Button";

const Header2 = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isBeautyOpenMobile, setIsBeautyOpenMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ New: Track current route

  // 🔁 Auto-close dropdown on route change (desktop/mobile)
  useEffect(() => {
    setIsBeautyOpenMobile(false);
  }, [location.pathname]);

  // 🔒 Scroll Lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="relative overflow-x-hidden z-[900] text-black bg-white w-full p-3 border border-black">
      <div className="2xl:max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img src="./51.png" alt="logo" className="w-32 lg:w-40" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 relative">
            {["Home", "About", "Healing", "Gallery", "Blog", "Career"].map(
              (text, i) => (
                <NavLink
                  key={i}
                  to={
                    text === "Home"
                      ? "/"
                      : text === "About"
                      ? "/about"
                      : text === "Gallery"
                      ? "/gallery"
                      : text === "Blog"
                      ? "/blog"
                      : "*"
                  }
                  className="hover:text-[#400186] text-sm xl:text-base 2xl:text-lg"
                >
                  {text}
                </NavLink>
              )
            )}

            {/* Beauty Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm xl:text-base 2xl:text-lg hover:text-[#400186]"
                onClick={() => setIsBeautyOpenMobile(!isBeautyOpenMobile)}
              >
                Beauty{" "}
                {isBeautyOpenMobile ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <div
                className={`absolute left-0 top-full flex flex-col bg-white rounded-md z-50 p-2 w-56 text-sm transition-all duration-300 transform ${
                  isBeautyOpenMobile
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
              >
                {[
                  { label: "Physical Body", path: "/physical-body" },
                  { label: "Vital Body", path: "/vital-body" },
                  { label: "Mental Body", path: "/mental-body" },
                  { label: "Super Mental Body", path: "/super-mental-body" },
                  { label: "Bliss Body", path: "/bliss-body" },
                ].map((item, i) => (
                  <NavLink
                    to={item.path}
                    key={i}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer rounded"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-2 xl:gap-4">
            <Button variant="black" className="w-44 border border-black">
              Book Appointment
            </Button>
            <button
              onClick={() => navigate("/contact")}
              className="p-2 hover:text-white hover:bg-black border transition-all duration-300 rounded-full text-xs xl:text-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) setIsBeautyOpenMobile(false);
              }}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div className="lg:hidden mt-4 grid grid-cols-2 gap-2">
              {["Home", "About", "Healing", "Gallery", "Blog", "Career"].map(
                (text, i) => (
                  <NavLink
                    key={i}
                    to={
                      text === "Home"
                        ? "/"
                        : text === "About"
                        ? "/about"
                        : text === "Gallery"
                        ? "/gallery"
                        : text === "Blog"
                        ? "/blog"
                        : "*"
                    }
                    className="text-sm hover:bg-gray-200 p-1 rounded"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsBeautyOpenMobile(false);
                    }}
                  >
                    {text}
                  </NavLink>
                )
              )}

              <button
                className="text-sm hover:bg-gray-200 p-1 rounded text-left flex items-center gap-1"
                onClick={() => setIsBeautyOpenMobile(!isBeautyOpenMobile)}
              >
                Beauty{" "}
                {isBeautyOpenMobile ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {isBeautyOpenMobile && (
              <div className="lg:hidden mt-2 grid grid-cols-1 gap-1 bg-gray-50 p-2 rounded">
                {[
                  { label: "Physical Body", path: "/physical-body" },
                  { label: "Vital Body", path: "/vital-body" },
                  { label: "Mental Body", path: "/mental-body" },
                  { label: "Super Mental Body", path: "/super-mental-body" },
                  { label: "Bliss Body", path: "/bliss-body" },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.path}
                    className="px-3 py-1 hover:bg-gray-100 rounded text-sm"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsBeautyOpenMobile(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}

            {/* Mobile Buttons */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBeautyOpenMobile(false);
                }}
                className="p-2 bg-black text-white rounded-full text-xs w-full max-w-xs mx-auto"
              >
                Book Appointment
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                  setIsBeautyOpenMobile(false);
                }}
                className="p-2 border hover:text-[#400186] rounded-full text-xs w-full max-w-xs mx-auto"
              >
                Contact Us
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header2;
