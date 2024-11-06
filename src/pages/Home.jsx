import React from 'react'
import SecHomeBanner from '../components/HomeBanner/SecHomeBanner'
import CTABannerTwo from '../components/HomeBanner/CTABannerTwo'
import SecHomeAbout from '../components/About/SecHomeAbout'
import CTABannerOne from '../components/HomeBanner/CTABannerOne'
import SecHomeGallery from '../components/Gallery/SecHomeGallery'
import CTABannerThree from '../components/HomeBanner/CTABannerThree'
import SecTestimonials from '../components/Testimonials/SecTestimonials'

const Home = () => {
  return (
    <>
    <SecHomeBanner/>
    <SecHomeAbout/>
    <CTABannerOne/>
    <SecHomeGallery/>
    <CTABannerTwo/>
    <SecTestimonials/>
    <CTABannerThree/>
    </>
  )
}

export default Home