import { useState } from "react";
import { NavLink } from "react-router-dom";


    const Header2 = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <div className="text-black bg-white w-full p-3 border border-black">
          <div className="2xl:max-w-7xl 2xl:mx-auto max-w-7xl mx-auto  px-4">
            <div className="flex items-center justify-between">
              <div>
                <NavLink to='/'> <img src="./51.png" alt="logo" className="w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40" /></NavLink>
              </div>
              <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
                <NavLink to="/" className="hover:underline text-sm xl:text-base 2xl:text-lg">Home</NavLink>
                <NavLink to="/about" className="hover:underline text-sm xl:text-base 2xl:text-lg">About</NavLink>
                <NavLink to="/mental-body" className="hover:underline text-sm xl:text-base 2xl:text-lg">Conditions</NavLink>
                <NavLink to="/super-mental-body" className="hover:underline text-sm xl:text-base 2xl:text-lg">Med Spa</NavLink>
                <NavLink to="/profile" className="hover:underline text-sm xl:text-base 2xl:text-lg">Health</NavLink>
                <NavLink to="/healing" className="hover:underline text-sm xl:text-base 2xl:text-lg">Healing</NavLink>
                <NavLink to="/vital-body" className="hover:underline text-sm xl:text-base 2xl:text-lg">Gallery</NavLink>
                <NavLink to="/bliss-body" className="hover:underline text-sm xl:text-base 2xl:text-lg">Blog</NavLink>
                <NavLink to="/contact" className="hover:underline text-sm xl:text-base 2xl:text-lg">Career</NavLink>
              </div>
              <div className="hidden lg:flex gap-2 xl:gap-4">
                <button className="p-3 bg-black xl:w-44 w-36 text-white rounded-full cursor-pointer text-xs xl:text-sm 2xl:text-base">Book Appointment</button>
                <button className="p-2 hover:underline  border rounded-full cursor-pointer text-xs xl:text-sm 2xl:text-base">Contact Us</button>
              </div>
              <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                  </svg>
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <>
              <div className="lg:hidden mt-4 grid grid-cols-2 items-center gap-2">
                <NavLink to="/" className="text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/about" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>About</NavLink>
                <NavLink to="/mental-body" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Conditions</NavLink>
                <NavLink to="/msuper-mental-body" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Med Spa</NavLink>
                <NavLink to="/profile" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Health</NavLink>
                <NavLink to="/healing" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Healing</NavLink>
                <NavLink to="/gallery" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Gallery</NavLink>
                <NavLink to="/vital-body" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Blog</NavLink>
                <NavLink to="/Contact" className="hover:underline text-sm hover:bg-gray-200 p-1 rounded " onClick={toggleMenu}>Career</NavLink>
             </div>
             <div className=" flex gap-3 mt-6">
                  <button className="p-2 bg-black text-white rounded-full cursor-pointer text-xs w-full max-w-xs">Book Appointment</button>
                <button className="p-2 hover:underline border rounded-full cursor-pointer text-xs w-full max-w-xs">Contact Us</button>
</div> 
</>
            )}
          </div>
        </div>
      );
    };

    export default Header2