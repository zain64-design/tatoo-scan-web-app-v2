import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import Text from '../UI/Text';
import Image from '../UI/Image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ServicesCard = ({ servicesData, loading }) => {

    useBackgroundImage('[data-bg-image]', servicesData);

    return (
        <>
            {loading ? (
                [...Array(servicesData ? servicesData.length : 6)].map((_, index) => (
                    <div className='service-card' key={index}>
                        <Container>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={5} xxl={5}>
                                    <div className="desc">
                                        <Skeleton height={64} width={64} />
                                        <Skeleton count={1} style={{ margin: '10px 0' }} />
                                        <Skeleton count={4} style={{ margin: '10px 0' }} />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={7} xxl={7}>
                                    <Skeleton height='100%' width='100%' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))
            )
                : (servicesData?.map(((value) => {
                    const { id, title, thumbnail, icon, desc } = value;
                    return (
                        <div className='service-card' data-bg-image={thumbnail} key={id}>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={5} xxl={5}>
                                        <div className="desc">
                                            <Image className="icons" src={icon} />
                                            <Text as="h4">{title}</Text>
                                            <Text as="p">{desc}</Text>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                })))}
        </>
    )
}

export default ServicesCard