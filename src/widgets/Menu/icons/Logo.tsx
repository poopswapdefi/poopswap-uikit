import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 225 35" {...props}>
      <image width="225" height="35" href={isDark ? '/images/poop/logo-text-light.png' : '/images/poop/logo-text-dark.png'}/>
    </Svg>
  )
};

export default Logo;
