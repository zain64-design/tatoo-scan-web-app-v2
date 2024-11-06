import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import Text from '../UI/Text';
import '../../assets/scss/components/InnerBanner/innerBannerOne.scss'
import AuthArea from '../Blogs/AuthArea';

const InnerBannerOne = ({ BannerTitle, backgroundImage, paragraph,blogTitle,authName,authImg }) => {

    // useBackgroundImage('data-bg-image');

    return (
        <>
            <section className="sec-inner-banner" data-bg-image={backgroundImage}>
                <Container>
                    {blogTitle?<Row className="justify-content-start">
                        <Col xs={12} sm={12} md={10} lg={8} xl={8} xxl={8}>
                            <div className="desc">
                                {blogTitle && <Text as="h6" className='blog-heading'>{blogTitle}</Text>}
                                <AuthArea authName={authName} authImg={authImg} />
                            </div>
                        </Col>
                    </Row>:<Row className="justify-content-center">
                        <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                            <div className="desc">
                                {BannerTitle && <Text as="h6" className='banner-heading'>{BannerTitle}</Text>}
                                {paragraph && <Text as="p">{paragraph}</Text>}
                            </div>
                        </Col>
                    </Row>}
                </Container>
            </section>
        </>
    )
};

export default InnerBannerOne