import React from 'react';
import { Card, Col, Stack } from 'react-bootstrap';
import Image from '../UI/Image';
import Text from '../UI/Text';
import icon from '/images/blogs/icon.png';
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import AuthArea from './AuthArea';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const BlogCard = ({ blogsData,loading }) => {

    return (
        <>
            {loading?(
                [...Array(blogsData ? blogsData.length : 9)].map((_, index) => (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={index}>
                        <Card className='blog-card'>
                            <Skeleton height={200} />
                            <div className="desc">
                                <Skeleton count={1} style={{ margin: '10px 0' }} />
                                <Skeleton count={1} style={{ margin: '10px 0' }} />
                                <Stack className="btm-area justify-content-between justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-between flex-row flex-wrap flex-sm-wrap flex-md-wrap flex-lg-nowrap flex-xl-nowrap align-items-center">
                                    <Skeleton width={50} height={20} />
                                    <Skeleton width={100} height={30} />
                                </Stack>
                            </div>
                        </Card>
                    </Col>
                ))
            )
            :(blogsData?.map((value) => {
                const {id,title,thumbnail,authImg,authName,share} = value;
                return (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={id}>
                        <Card className='blog-card'>
                            <Image src={thumbnail} className="blog-img" alt='blog' />
                            <div className="desc">
                                <Text as="h6">{title.length > 100 ? `${title.substring(0, 100)}...` : title}</Text>
                                <AuthArea authImg={authImg} authName={authName}/>
                                <Stack className="btm-area justify-content-between justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-between flex-row flex-wrap flex-sm-wrap flex-md-wrap flex-lg-nowrap flex-xl-nowrap align-items-center">
                                    <Text as='span' className='shares'>
                                        <Image src={icon} className="icon" /> {share}
                                    </Text>
                                    <Link to={`/blog-detail/${id}`} className="btn read-btn">read more <HiArrowUpRight /></Link>
                                </Stack>
                            </div>
                        </Card>
                    </Col>
                )
            }))}
        </>
    )
}

export default BlogCard