import React from "react";

const sizes = {
  texts: "text-[14px] font-medium",
  textmd: "text-[16px] font-medium",
  textxl: "text-[24px] font-medium md:text-[22px]",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[16px] font-bold",
  headingmd: "text-[24px] font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "texts", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
