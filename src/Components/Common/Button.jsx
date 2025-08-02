import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  size = "md",         // sm | md | lg
  variant = "purple",  // purple | black | outline | secondary
  className = "",
  disabled = false,
}) => {
  const baseStyles = "rounded-full text-[16px] lg:p-3 p-2 px-4 hover: font-medium focus:outline-none transition-all duration-200";

 

  const variantStyles = {
    purple: "bg-[#400186] text-white hover:bg-[#32006b]",
    black: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    colourWhite: "bg-white text-black"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={` text-[14px] md:text-[16px] lg:text-[18px] 
        ${baseStyles}
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
