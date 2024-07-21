import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal not-italic",
  textlg: "text-[18px] font-normal not-italic",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
