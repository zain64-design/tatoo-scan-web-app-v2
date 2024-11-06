import React from 'react';
import Text from '../UI/Text'

const TestimonialHead = (headData) => {
    const {subHead,mainHead,desc} = headData
    
  return (
    <>
    <div className="head-area">
        <Text as="h6">{subHead}</Text>
        <Text as="h3">{mainHead}</Text>
        <Text as="p">{desc}</Text>
    </div>
    </>
  )
}

export default TestimonialHead