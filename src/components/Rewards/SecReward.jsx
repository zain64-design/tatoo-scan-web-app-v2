import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../../utils/hooks/fetchData';
// import CircleLoader from '../Loader/CircleLoader';
import { REWARDS_API } from '../../utils/constant';
import RewardSlider from './RewardSlider';
import RewardHead from './RewardHead';
import Text from '../UI/Text'
import '../../assets/scss/components/reward/secReward.scss'

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecReward = () => {

    const {data:rewards,isLoading,isError,error} = useFetchData(['rewards'],REWARDS_API);

    // if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching rewards: {error.message}</Text>
    }

    return (
        <>
            <section className='sec-reward'>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="cta-reward">
                                <RewardHead heading="Awards & Achievements"/>
                                <RewardSlider rewardsData={rewards} isLoading={isLoading}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecReward