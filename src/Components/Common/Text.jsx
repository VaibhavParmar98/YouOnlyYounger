import React from "react";
import PropTypes from "prop-types";

const sizeClasses = {
  text1: "text-[12px] md:text-[14px] lg:text-[16px]",
  text2: "text-[28px] md:text-[30px] lg:text-[50px]",
  text3: "text-[12px] md:text-[14px] lg:text-[18px]",
  text4: "text-[16px] md:text-[20px] lg:text-[25px]",
  text5: "text-[20px] md:text-[28px] lg:text-[36px]",
  text6: "text-[60px] md:text-[64px] lg:text-[72px]",
};

const Text = ({ children, variant = "text1", className = "" }) => {
  return (
    <p className={`${sizeClasses[variant]} ${className}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["text1", "text2", "text3", "text4", "text5", "text6"]),
  className: PropTypes.string,
};

export default Text;
