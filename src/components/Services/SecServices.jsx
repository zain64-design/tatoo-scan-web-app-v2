import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ServicesCard from './ServicesCard'
import { useQuery } from '@tanstack/react-query';
import { SERVICES_API } from '../../utils/constant';
import fetchData from '../../utils/hooks/fetchData';
import '../../assets/scss/components/services/secServices.scss'
import ServicesHeading from './ServicesHeading';

const useFetchData = (key, url) => {
  return useQuery({
    queryKey: key,
    queryFn: () => fetchData(url)
  });
};

const SecServices = () => {

  const {data:services,isLoading,isError,error} = useFetchData(['services'],SERVICES_API);

  if (isError) {
      return <Text as="h3" className='error-message'>Fetching Services: {error.message}</Text>
  }

  return (
    <>
    <section className='sec-services'>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <ServicesHeading subHeading="Our Tattoo App" mainHeading="Services & Features"/>
                </Col>
            </Row>
        </Container>
        <ServicesCard servicesData={services} loading={isLoading}/>
    </section>
    </>
  )
}

export default SecServices