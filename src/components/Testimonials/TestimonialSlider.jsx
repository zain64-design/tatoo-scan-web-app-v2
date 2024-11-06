import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from 'react-bootstrap'
import Image from '../UI/Image';
import Fancybox from '../UI/Fancybox';
import { FaPlay } from "react-icons/fa";
import Text from '../UI/Text'
import Slider from 'react-slick';
import SliderNextArrow from "./SliderNextArrow";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";


const TestimonialSlider = ({ testimonialData }) => {
    // console.log(testimonialData);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [nav3, setNav3] = useState(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    let sliderRef3 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        setNav3(sliderRef3);
    }, []);

    const sliderOneSetting = {
        asNavFor:nav2,
        ref:slider => (sliderRef1 = slider),
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        fade: true,
        swipeToSlide: false,
        draggable: false,
        touchMove: false,
    }

    const sliderTwoSetting = {
        asNavFor:nav3,
        ref:slider => (sliderRef2 = slider),
        slidesToShow: 1,
        fade: true,
        draggable: false,
        touchMove: false,
        nextArrow: <SliderNextArrow/>,
    }

    const sliderThreeSetting = {
        asNavFor:nav1,
        ref:slider => (sliderRef3 = slider),
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        focusOnSelect: true,
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
                  slidesToShow: 2,
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
                  slidesToShow: 3,
                }
              }
          ]
    }

    return (
        <>
            <div className="testimonial-slider-area">
                <Row className='justify-content-center align-items-center gx-4 gx-sm-4 gx-md-4 gx-lg-4 gx-xl-3 gx-xxl-3'>
                    <Col xs={12} sm={12} md={5} lg={4} xl={4} xxl={4}>
                    <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            }
                        }}>
                            <Slider className="single-img" {...sliderOneSetting}>
                                {testimonialData?.map((value) => {
                                    const { id, image, designation, link } = value;
                                    return (
                                        <div className="img-main" key={id}>
                                            <a data-fancybox="gallery" data-caption={designation} data-src={link} href={link}>
                                                <FaPlay />
                                            </a>
                                            <Image src={image} alt='slider-img' />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </Fancybox>
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}  className="position-relative">

                        <Slider className="desc-slider" {...sliderTwoSetting}>
                            {testimonialData?.map((value)=> {
                                const {id,desc,designation,name} = value;
                                return (
                                    <div className="desc" key={id}>
                                        <Text as="h4">{name}</Text>
                                        <Text as="h6">{designation}</Text>
                                        <Text as="p">{desc}</Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            }
                        }}>
                            <Slider className="multi-img d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block" {...sliderThreeSetting}>
                                {testimonialData?.map((value) => {
                                    const { id, image, designation, link } = value;
                                    return (
                                        <div className="img-main" key={id}>
                                            <a data-fancybox="gallery" data-caption={designation} data-src={link} href={link}>
                                                <FaPlay />
                                            </a>
                                            <Image src={image} alt='slider-img' />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </Fancybox>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default TestimonialSlider