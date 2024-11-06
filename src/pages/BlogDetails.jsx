import React from 'react'
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne'
import SecBlogDetails from '../components/Blogs/SecBlogDetails';
import fetchData from '../utils/hooks/fetchData';
import { useQuery } from '@tanstack/react-query';
import { BLOG_DETAIL_API } from '../utils/constant';
import { useParams } from 'react-router-dom';
import Text from '../components/UI/Text';
import CircleLoader from '../components/Loader/CircleLoader';
import useBackgroundImage from '../utils/hooks/useBackgroundImage'; 

const BlogDetails = () => {
    // const { data, isloading, error } = useFetch(`${BLOG_DETAIL_API}`);
    // const blogID  = useParams();
    // const blogData = data.find(blog => blog.id === parseInt(blogID.id));
    // if (isloading) return <div>loading...</div>;
    // if (error) return <div>Fetching details blogs: {error}</div>

    const { id } = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['blogDetails', id],
        queryFn: () => fetchData(BLOG_DETAIL_API),
    });

    const blogData = data && Array.isArray(data) ? data.find(blog => blog.id === parseInt(id)) : null;

    useBackgroundImage('[data-bg-image]',data);

    if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching Blog Details: {error.message}</Text>
    }
    
    
    return (
        <>
            <InnerBannerOne blogTitle={blogData.title} backgroundImage={blogData.thumbnail} authImg={blogData.authImg} authName={blogData.authName} />
            <SecBlogDetails {...blogData}/>
        </>
    )
}

export default BlogDetails