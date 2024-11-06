import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import InfoBox from './InfoBox';
import '../../assets/scss/components/contact/secContact.scss'
import ContactForm from './ContactForm';

const SecContact = () => {

    return (
        <>
            <section className='sec-contact'>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col xs={12} sm={12} md={12} lg={5} xl={4} xxl={4}>
                            <div className="side-info">
                                <InfoBox />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <ContactForm/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecContact