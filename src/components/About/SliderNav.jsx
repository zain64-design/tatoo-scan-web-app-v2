import React from 'react'
import { HiMiniArrowLeft } from "react-icons/hi2";
import { HiMiniArrowRight } from "react-icons/hi2";

const SliderNav = () => {
    return (
        <>
            <div className="btn-flex">
                <div className="swiper-button-prev">
                    <HiMiniArrowLeft />
                </div>
                <div className="swiper-button-next">
                    <HiMiniArrowRight />
                </div>
            </div>
        </>
    )
}

export default SliderNav