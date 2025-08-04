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
  const baseStyles = "rounded-full cursor-pointer text-base font-normal lg:p-3 p-2 px-4   focus:outline-none transition-all duration-200";

 

  const variantStyles = {
    purple: "bg-[#400186] text-white ",
    black: "bg-black text-white ",
    secondary: "bg-gray-200 text-gray-800 ",
    outline: "border border-gray-400 text-gray-700",
    colourWhite: "bg-white text-black"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`  
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
