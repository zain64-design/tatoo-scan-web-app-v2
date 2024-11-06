import React from 'react'
import Image from '../UI/Image'
import Text from '../UI/Text'
import { FaPlay } from "react-icons/fa";
import Fancybox from '../UI/Fancybox';
import { Col,Row } from 'react-bootstrap';
import '../../assets/scss/components/home/videoBox.scss'


const VideoBox = ({galleryData}) => {
    return (
        <>
            <Fancybox options={{
                Carousel: {
                    infinite: false,
                }
            }}>
                <Row className='justify-content-center gx-3 gx-sm-3 gx-md-3 gx-lg-4 gx-xl-5 gx-xxl-5'>
                {galleryData?.map((value) => {
                    const { id, image, head,link } = value;

                    return (
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={id}>
                        <div className="video-box">
                            <Image src={image} alt="video gallery" />
                            <div className="desc">
                                <Text as="h6">{head}</Text>
                                <a data-fancybox="gallery" data-caption={head} data-src={link} href={link}>
                                <Image src={image} alt="video gallery" className="d-none" />
                                    <FaPlay />
                                </a>
                            </div>
                        </div>
                    </Col>
                    )
                })}
                </Row>
            </Fancybox>
        </>
    )
}

export default VideoBox