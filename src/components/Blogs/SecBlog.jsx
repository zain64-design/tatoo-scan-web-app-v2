import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';
import { useQuery } from '@tanstack/react-query';
import Text from '../UI/Text'
import fetchData from '../../utils/hooks/fetchData';
import CircleLoader from '../Loader/CircleLoader';
import { BLOG_API } from '../../utils/constant';
import Paginations from './Paginations';
import '../../assets/scss/components/blog/secBlog.scss';


const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecBlog = () => {

    const {data:blogs,isLoading,isError,error} = useFetchData(['blogs'],BLOG_API);

    // if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching blogs: {error.message}</Text>
    }

    return (
        <>
            <section className='sec-blog'>
                <Container>
                    <Row>
                        <BlogCard blogsData={blogs} loading={isLoading}/>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Paginations/>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecBlog