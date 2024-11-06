import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import VideoBox from './VideoBox';
import { HOME_VIDEO_GALLERY_API } from '../../utils/constant';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../../utils/hooks/fetchData';
import CircleLoader from '../Loader/CircleLoader';
import '../../assets/scss/components/home/homeGallery.scss';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecHomeGallery = () => {

    const {data:gallery,isLoading,isError,error} = useFetchData(['gallery'],HOME_VIDEO_GALLERY_API);

    if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching gallery: {error.message}</Text>
    }

    return (
        <>
            <section className='sec-gallery'>
                <Container>
                    <div className="head-area">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Text as="h4">Experience the magic of memory and artistry combined</Text>
                                <Text as="h6">Your skin, your stories, your way!"</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Text as="p">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Container>
                            <VideoBox galleryData={gallery}/>
                        </Container>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecHomeGallery