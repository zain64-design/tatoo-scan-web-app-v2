import React from 'react';
import Text from '../UI/Text';
import Image from '../UI/Image';
import {Col } from 'react-bootstrap';

const HomeAboutBox = ({aboutData}) => {

    return (
        <>
            {aboutData?.map((value) => {
                const { id, image, head, desc } = value;
                return (<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={id}>
                    <div className="box-main">
                        <div className="ct-head">
                            <Image src={image} className="icon" />
                            <Text as="h6">{head}</Text>
                        </div>
                        <Text as="p">{desc}</Text>
                    </div>
                </Col>)
            })}
        </>
    )
}

export default HomeAboutBox