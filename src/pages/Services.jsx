import React from 'react';
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecServices from '../components/Services/SecServices';

const Services = () => {

  const serviceBannerInfo = {
    BannerTitle: "Services",
    backgroundImage: "/images/services/service-bg.png",
    paragraph: "Tattoos are more than just ink. They hold your stories and your identity. Our team is made up of tattoo fans and tech enthusiasts who wanted to change the game. We’re all about mixing traditional tattoo art with modern tech to give you a way to connect with your ink like never before. So, if you’re an artist ready to showcase your talent or someone wanting to share what your tattoo means, TattooScan is here to make your tattoo experience even cooler."
  }

  return (
    <>
      <InnerBannerOne {...serviceBannerInfo} />
      <SecServices/>
    </>
  )
}

export default Services