import React from 'react'

const Image = (props) => {
    const {alt,src,className} = props
  return (
    <>
    <img src={src} alt={alt} className={`img-fluid ${className || ''}`} />
    </>
  )
}

export default Image