import React from 'react'
import { Card } from 'react-bootstrap'
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";
import Text from '../UI/Text';

const contactInfo = [
    {
        icon: <HiOutlinePhone />,
        title: 'Phone Number',
        link: 'tel:000000000',
        value: '000-000-000',
    },
    {
        icon: <HiOutlineEnvelope />,
        title: 'Email Address',
        link: 'mailto:info@email.com',
        value: 'info@email.com',
    },
    {
        icon: <HiOutlineMapPin />,
        title: 'Address',
        link: 'void:;',
        value: 'Address',
    },
];

const InfoBox = () => {
    return (
        <>
            {contactInfo?.map((data,index) => {
                const {icon,title,link,value} = data;
                return (
                    <Card className='info-card' key={index}>
                        <div className="icon-area">
                            {icon}
                        </div>
                        <div className="desc">
                            <Text as="h6">{title}</Text>
                            <a href={link}>{value}</a>
                        </div>
                    </Card>
                )
            })}
        </>
    )
}

export default InfoBox