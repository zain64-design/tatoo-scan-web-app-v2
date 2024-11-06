import React from 'react'
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecContact from '../components/Contact/SecContact';
import useBackgroundImage from '../utils/hooks/useBackgroundImage';

const Contact = () => {

  const contactBannerInfo = {
    BannerTitle: "Contact Us",
    backgroundImage: "/images/contact/contact-bg.png"
  }
  useBackgroundImage('[data-bg-image]');

  return (
    <>
    <InnerBannerOne {...contactBannerInfo}/>
    <SecContact/>
    </>
  )
}

export default Contact