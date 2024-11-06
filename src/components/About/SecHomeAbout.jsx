import React,{ useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../UI/Image';
import aboutImage from '/images/home/about-img2.png';
import Text from '../UI/Text';
import HomeAboutBox from './HomeAboutBox';
import { HOME_ABOUT_API } from '../../utils/constant';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../../utils/hooks/fetchData';
import CircleLoader from '../Loader/CircleLoader';
import '../../assets/scss/components/home/homeAbout.scss';

const useFetchData = (key, url) => {
  return useQuery({
    queryKey: key,
    queryFn: () => fetchData(url),
  });
};

const SecHomeAbout = () => {

  const aboutRef = useRef();
  console.log(aboutRef.current);

  useGSAP(()=> {
    console.log('Home about Initializing timeline');
    console.log(aboutRef.current);
gsap.fromTo(".desc",{
    opacity: 0,
    y: -150,
  },
  {
    opacity: 1,
    y: 0,
    duration:1,
    ease: "power2.in",
    scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top center',
        scrub: false,
        markers: true,
      },
  });
},{dependencies:[],scope:aboutRef})

  const { data: homeAbout, isLoading, isError, error } = useFetchData(['homeAbout'], HOME_ABOUT_API);

  if (isLoading) return <CircleLoader />

  if (isError) {
    return <Text as="h3" className='error-message'>Fetching home About: {error.message}</Text>
  }

  return (
    <>
      <section ref={aboutRef} className="sec-about">
        <Container className='bg-elem'>
          <Row className='justify-content-center align-items-end'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div className="img-box">
                <Image src={aboutImage} />
              </div>
            </Col >
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div className="desc">
                <Text as="h2">What Makes Us Ink-redible</Text>
                <Row>
                  <HomeAboutBox aboutData={homeAbout} />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SecHomeAbout