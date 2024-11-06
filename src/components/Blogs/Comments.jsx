import React from 'react';
import Text from '../UI/Text';

const Comments = ({commentsData}) => {
    return (
        <>
            {commentsData?.map((value) => {
                const { id, authName, date, comment } = value;
                return (
                    <div className="comment" key={id}>
                        <div className="comment-top">
                            <Text as="h6">{authName}</Text>
                            <Text as="span">{date}</Text>
                        </div>
                        <div className="desc">
                            <Text as='p'>{comment}</Text>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Comments