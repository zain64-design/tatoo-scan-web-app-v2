import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CommentForm from './CommentForm';
import BlogDesc from './BlogDesc';
import Text from '../UI/Text';
import Comments from './Comments';
import CircleLoader from '../Loader/CircleLoader';
import { BLOG_COMMENTS_API } from '../../utils/constant';
import fetchData from '../../utils/hooks/fetchData';
import { useQuery } from '@tanstack/react-query';
import '../../assets/scss/components/blog/secBlogDetails.scss'

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecBlogDetails = (blogData) => {

    const {data:comments,isLoading,isError,error} = useFetchData(['comments'],BLOG_COMMENTS_API);
        if(isLoading) return <CircleLoader/>

        if (isError) {
            return <Text as="h3" className='error-message'>Fetching Comments: {error.message}</Text>
        }

    return (
        <>
            <section className='sec-blog-details'>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="desc-area">
                                <BlogDesc blogData={blogData}/>
                            </div>
                            <div className="comment-form">
                                <Text as="h4">Comments</Text>
                                <CommentForm />
                            </div>
                            <div className="comments-area">
                                <Comments commentsData={comments}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecBlogDetails