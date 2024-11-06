import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Text from '../UI/Text'

const FooterLinks = () => {

    const footerLinks = [
        {
            title: 'Links',
            links: [
                { title: 'Home', path: '/' },
                { title: 'About Us', path: '/about-us' },
                { title: 'Services', path: '/services' },
                { title: 'Blog', path: '/blogs' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { title: 'Terms of Use', path: '/' },
                { title: 'Privacy Policy', path: '/' },
                { title: 'Cookie Policy', path: '/' },
            ],
        },
        {
            title: 'Product',
            links: [
                { title: 'Take Tour', path: '/' },
                { title: 'Live Chat', path: '/' },
                { title: 'Reviews', path: '/' },
            ],
        },
    ];

    return (
        <>
            {footerLinks?.map((data, index) => {
                const titles = data;
                const { title, links } = titles;
                return (
                    <Col key={index} xs={12} sm={6} md={6} lg={6} xl={2} xxl={2} className='ms-xl-4 ms-xxl-4 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>
                        <div className="categ-main">
                            <Text as="h6">{title}</Text>
                            <ul>
                                {links?.map((link, index) => {
                                    const allLinks = link;
                                    const { title, path } = allLinks;
                                    return (
                                        <li key={index}>
                                            <NavLink to={path}>{title}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                )
            })}
        </>
    )
}

export default FooterLinks