import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutDesc from './AboutDesc';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import { useQuery } from '@tanstack/react-query';
import Text from '../UI/Text'
import fetchData from '../../utils/hooks/fetchData';
// import CircleLoader from '../Loader/CircleLoader';
import { ABOUT_DESC_API } from '../../utils/constant'
import '../../assets/scss/components/about/secAbout.scss';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecAbout = () => {

    const {data:about,isLoading,isError,error} = useFetchData(['aboutDesc'],ABOUT_DESC_API);
    useBackgroundImage('[data-bg-image]',about);

    // if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching about details: {error.message}</Text>
    }

    // console.log(about);

    return (
        <>
            {about?.map((value) => {
                const { id,image } = value;
                return (
                    <section className='sec-about-inner' data-bg-image={image} key={id}>
                        <Container className='bg-elem'>
                            <Row>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <div className="desc-area">
                                        <AboutDesc {...value} key={id} isLoading={isLoading} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                )
            })}
        </>
    )
}

export default SecAbout