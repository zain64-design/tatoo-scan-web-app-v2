import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TestimonialHead from './TestimonialHead'
import TestimonialSlider from './TestimonialSlider'
import '../../assets/scss/components/testimonial/secTestimonial.scss'
import CircleLoader from '../Loader/CircleLoader';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../../utils/hooks/fetchData';
import { TESTIMONIAL_API } from '../../utils/constant'

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url)
    });
  };

const SecTestimonials = () => {

    const {data:testimonial,isLoading,isError,error} = useFetchData(['testimonial'],TESTIMONIAL_API);

    if(isLoading) return <CircleLoader/>
  
    if (isError) {
        return <Text as="h3" className='error-message'>Fetching Testimonials: {error.message}</Text>
    }

    const headData = {
        subHead: 'testimonial',
        mainHead: 'Check Out Their Thoughts',
        desc: 'Here’s the lowdown from users who are loving our app. They’re discovering cool tattoo stories, connecting with others, and having a great time. See why they’re excited about scanning their ink with us!'
    }

    return (
        <>
            <section className="sec-testimonial">
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                            <TestimonialHead {...headData} />
                        </Col>
                    </Row>
                    <TestimonialSlider testimonialData={testimonial}/>
                </Container>
            </section>
        </>
    )
}

export default SecTestimonials