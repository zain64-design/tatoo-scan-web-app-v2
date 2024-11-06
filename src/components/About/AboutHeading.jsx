import React from 'react'
import Text from '../UI/Text'

const AboutHeading = ({mainHeading}) => {
    return (
        <>
            <div className="head-area">
                <Text as="h3">{mainHeading}</Text>
            </div>
        </>
    )
}

export default AboutHeading