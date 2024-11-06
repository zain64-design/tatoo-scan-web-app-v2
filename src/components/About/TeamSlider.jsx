import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y, Controller } from 'swiper/modules';
import Image from '../UI/Image';
import { Col, Row } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SliderNav from './SliderNav';
import TeamSliderDesc from './TeamSliderDesc';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const TeamSlider = ({ teamData, isLoading }) => {
    // console.log(teamData);

    return (
        <>
            <Row className='row align-items-center justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center bg-elem'>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                    <Swiper
                        modules={[Navigation, A11y, Thumbs, Controller]}
                        slidesPerView={1}
                        touchRatio={0}
                        spaceBetween={10}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        className="team-details"
                    >
                        {isLoading ? (
                            <>
                                <Skeleton count={1} width='50%' height={40} style={{ margin: '10px 0' }} />
                                <Skeleton count={1} width='40%' height={30} style={{ margin: '10px 0' }} />
                                <Skeleton count={5} style={{ margin: '10px 0' }} />
                            </>
                        )
                            : (teamData?.map((value) => {
                                const { id, ...descData } = value;
                                return (
                                    <SwiperSlide key={id}>
                                        <TeamSliderDesc descData={descData} />
                                    </SwiperSlide>
                                )
                            }))}
                        <SliderNav />
                    </Swiper>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='pe-xxl-0 pe-xl-0 pe-lg-0'>
                    <div className="slider-main">
                        <Swiper
                            modules={[Navigation, Thumbs, A11y, Controller]}
                            spaceBetween={1}
                            touchRatio={0}
                            loop={true}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2.2,
                                },
                                992: {
                                    slidesPerView: 1.9,
                                },
                                1200: {
                                    slidesPerView: 2.5,
                                },
                                1400: {
                                    slidesPerView: 2.5,
                                },
                                1444: {
                                    slidesPerView: 2.5,
                                },
                                1599: {
                                    slidesPerView: 2.6,
                                },
                            }}
                            className="team-slider"
                        >
                            {isLoading ? 
                            // ([...Array(teamData ? teamData.length : 3)].map((_, index) => (
                            //     <swiper-slide key={index}>
                            //         <Skeleton count={1} width={375} height={540} style={{ margin: '0 20px', display: 'inline-flex' }} />
                            //     </swiper-slide>
                            // )))
                            (<Skeleton count={1} width='100%' height={400} style={{ margin: '0 20px', display: 'inline-flex' }} />)
                             :
                                (teamData?.map((value) => {
                                    const { id, image } = value;

                                    return (
                                        <SwiperSlide key={id}>
                                            <Image src={image} />
                                        </SwiperSlide>
                                    )
                                }))}
                        </Swiper>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TeamSlider