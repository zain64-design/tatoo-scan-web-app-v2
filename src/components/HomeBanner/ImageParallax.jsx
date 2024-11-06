import React from 'react'
import useImageParallax from '../../utils/hooks/useImageParallax';
import backOrnament from '/images/home/back-ornament.png';
import phone1 from '/images/home/phone-1.png';
import phone2 from '/images/home/phone-2.png';
import '../../assets/scss/components/home/parallaxImg.scss'
import Image from '../UI/Image'

const ImageParallax = () => {
    const sceneRef = useImageParallax();
    return (
        <>
            <div className="img-main" ref={sceneRef}>
                <div data-depth="0.9" className="back-img">
                    <Image src={backOrnament} className="img-fluid thumb3" alt="Back Ornament" />
                </div>
                <div data-depth="0.5" className="front-img-one">
                    <Image src={phone2} className="img-fluid thumb1" alt="Phone 2" />
                </div>
                <div data-depth="0.7" className="front-img-two">
                    <Image src={phone1} className="img-fluid thumb2" alt="Phone 1" />
                </div>
            </div>
        </>
    )
}

export default ImageParallax