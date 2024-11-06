import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from 'react-bootstrap'
import Image from '../UI/Image';
import Fancybox from '../UI/Fancybox';
import { FaPlay } from "react-icons/fa";
import Slider from 'react-slick';
import SliderNextArrow from "./SliderNextArrow";


const TestimonialSlider = ({ testimonialData }) => {

    console.log(testimonialData);


    const [singleImg, setSingleImg] = useState(null);
    const [multiImg, setMultiImg] = useState(null);

    let singleImgRef = useRef(null);
    let multiImgRef = useRef(null);

    useEffect(() => {
        // setSingleImg(singleImgRef);
        // setMultiImg(multiImgRef);
        if (singleImgRef.current && multiImgRef.current) {
            setSingleImg(singleImgRef.current);
            setMultiImg(multiImgRef.current);
        }
    }, []);


    const singleImgSetting = {
        asNavFor: multiImg,
        // ref: slider => (singleImgRef = slider),
        // ref: (slider) => setSingleImg(slider),
        ref: singleImgRef,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        fade: true,
    }

    const multiImgSetting = {
        asNavFor: singleImg,
        // ref: slider => (multiImgRef = slider),
        // ref: (slider) => setMultiImg(slider),
        ref: multiImgRef,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <SliderNextArrow/>,
    }

    return (
        <>
            <div className="testimonial-slider-area">
                <Row className='justify-content-center gx-4 gx-sm-4 gx-md-4 gx-lg-4 gx-xl-3 gx-xxl-3 align-items-end'>
                    <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            }
                        }}>
                            <Slider className="single-img" {...singleImgSetting}>
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
                    <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            }
                        }}>
                            <Slider className="multi-img" {...multiImgSetting}>
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