import React from 'react';
import Text from '../UI/Text';
import AppBtn from './AppBtn';
import { Container, Row, Col } from 'react-bootstrap';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import '../../assets/scss/components/home/ctaBannerThree.scss'

const CTABannerThree = () => {
    useBackgroundImage('[data-bg-image]');
    return (
        <>
            <section className='sec-cta-three'>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="cta-area" data-bg-image="/images/home/cta-img-4.png">
                                <div className="ct-bg"></div>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className="desc">
                                            <Text as="h4">Stay in the Loop</Text>
                                            <Text as="p">Get latest updates, tips, and tattoo stories delivered straight to your inbox. Subscribe to our newsletter NOW!</Text>
                                            <AppBtn />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CTABannerThree