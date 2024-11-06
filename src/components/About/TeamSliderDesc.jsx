import React from 'react';
import Text from '../UI/Text'

const TeamSliderDesc = ({descData}) => {
    const {name,designation,desc} = descData;
    return (
        <>
            <div className="desc">
                <Text as="h4">{name}</Text>
                <Text as='h6'>{designation}</Text>
                <Text as="p">{desc}</Text>
            </div>
        </>
    )
}

export default TeamSliderDesc