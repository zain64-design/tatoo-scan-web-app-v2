import React from 'react';
import Text from '../UI/Text';

const RewardHead = ({heading}) => {
    return (
        <>
            <div className="head-area">
                <Text as="h4">{heading}</Text>
            </div>
        </>
    )
}

export default RewardHead