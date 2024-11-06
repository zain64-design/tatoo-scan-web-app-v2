import React from 'react';
import Text from '../UI/Text'

const BlogDesc = ({blogData}) => {
    const { content } = blogData;
    return (
        <>
            {content?.map((data) => {
                const { id, heading, para } = data;
                return (<div className="desc" key={id}>
                    {heading && <Text as="h6">{heading}</Text>}
                    {para && <Text as="p">{para}</Text>}
                </div>)
            })}
        </>
    )
}

export default BlogDesc