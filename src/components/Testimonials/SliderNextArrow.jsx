import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const SliderNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
<div
      className={`next-arrow ${className}`}
      style={{ ...style}}
      onClick={onClick}
    >
        <HiArrowLongRight />
    </div>
  )
}

export default SliderNextArrow