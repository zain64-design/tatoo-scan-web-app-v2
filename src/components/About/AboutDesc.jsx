import React from 'react'
import Text from '../UI/Text'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const AboutDesc = ({ desc, isLoading }) => {
  // const descData = value[0].desc;
  const descData = desc || [];
  console.log(descData);



  return (
    <>
      {isLoading?((descData? descData.length : 2).map((_,index)=> (
        <div className="desc" key={index}>
          <Skeleton count={1} style={{ margin: '10px 0' }} />
          <Skeleton count={6} style={{ margin: '10px 0' }} />
        </div>
      )))
      :
      (descData?.map((value) => {
        const { id, head, para } = value;
        return (
          <div className="desc" key={id}>
            <Text as="h6">{head}</Text>
            <Text as="p">{para}</Text>
          </div>
        )
      }))}
    </>
  )
}

export default AboutDesc