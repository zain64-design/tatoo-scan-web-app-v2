import { Col, Container, Row } from 'react-bootstrap';
import TeamSlider from './TeamSlider';
import fetchData from '../../utils/hooks/fetchData';
import { useQuery } from '@tanstack/react-query';
// import CircleLoader from '../Loader/CircleLoader';
import { ABOUT_TEAM_SLIDER_API } from '../../utils/constant';
import '../../assets/scss/components/about/secAboutTeam.scss'
import AboutHeading from './AboutHeading';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecAboutTeam = () => {

    const {data:team,isLoading,isError,error} = useFetchData(['teams'],ABOUT_TEAM_SLIDER_API);

    // if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching Teams Data: {error.message}</Text>
    }
    

    return (
        <>
            <section className='sec-our-team'>
                <Container>
                    <Row className='row align-items-center justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <AboutHeading mainHeading="Our Team"/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <TeamSlider teamData={team} isLoading={isLoading}/>
                </Container>
            </section>
        </>
    )
}

export default SecAboutTeam