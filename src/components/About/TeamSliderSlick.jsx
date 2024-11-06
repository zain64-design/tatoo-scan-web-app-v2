import React, { useState, useEffect, useRef } from "react";
import Slider from 'react-slick';
import Image from '../UI/Image';
import { Col, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamSliderDesc from './TeamSliderDesc';

const TeamSliderSlick = ({teamData}) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const sliderOneSetting = {
        asNavFor:nav2,
        ref:slider => (sliderRef1 = slider),
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: true,
        fade: true,
                // nextArrow: <SliderNextArrow/>,
    }

    const sliderTwoSetting = {
        asNavFor:nav1,
        ref:slider => (sliderRef2 = slider),
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 1399,
                settings: {
                  slidesToShow: 2.6,
                }
              }
          ]
    }

    return (
        <>
            <Row className='row align-items-center justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center bg-elem'>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                    <Slider {...sliderOneSetting} className="team-details">
                        {teamData?.map((value) => {
                            const { id } = value;
                            return (
                                <TeamSliderDesc key={id} {...value} />
                            )
                        })}
                    </Slider>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='pe-xxl-0 pe-xl-0 pe-lg-0'>
                    <div className="slider-main">
                        <Slider {...sliderTwoSetting} className="team-slider">
                            {teamData?.map((value) => {
                                const {id,image} = value;
                                return (
                                    <Image src={image} key={id} />
                                )
                            })}
                        </Slider>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TeamSliderSlick