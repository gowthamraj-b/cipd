import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  fill: {
    amber_A700: "bg-amber-a700 shadow-xs text-blue_gray-900",
    gray_100: "bg-gray-100 shadow-md",
  },
};
const sizes = {
  md: "h-[48px] px-[34px] text-[16px]",
  xs: "h-[28px] px-[30px] text-[12px]",
  sm: "h-[38px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "amber_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["amber_A700", "gray_100"]),
};

export { Button };
