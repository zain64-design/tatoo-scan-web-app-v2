import React from 'react'
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecBlog from '../components/Blogs/SecBlog';
import useBackgroundImage from '../utils/hooks/useBackgroundImage';
const Blogs = () => {

  const bannerData = {
  BannerTitle: "Our Blogs",
  backgroundImage: "/images/blogs/blog-bg.png"
  }

  useBackgroundImage('[data-bg-image]');

  return (
    <>
    <InnerBannerOne {...bannerData} />
    <SecBlog/>
    </>
  )
}

export default Blogs