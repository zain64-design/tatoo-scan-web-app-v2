import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from '../UI/Image'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const RewardSlider = ({rewardsData,isLoading}) => {
    return (
        <>
            <Swiper
                modules={[A11y, Thumbs, Autoplay]}
                autoplay={{ delay: 3000 }}
                spaceBetween={90}
                grabCursor={true}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 4,
                    },
                    1444: {
                        slidesPerView: 4,
                    },
                    1599: {
                        slidesPerView: 4,
                    },
                }}
                className="award-slider"
            >
                {isLoading ? (<Skeleton height={160} width='100%' />) : 
                (rewardsData?.map((value) => {
                    const { id, image } = value;
                    return (
                        <SwiperSlide key={id}>
                            <Image src={image} />
                        </SwiperSlide>
                    )
                }))}
            </Swiper>
        </>
    )
}

export default RewardSlider