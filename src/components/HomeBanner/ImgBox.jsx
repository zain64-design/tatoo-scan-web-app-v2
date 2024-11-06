import React from 'react';
import Image from '../UI/Image';

const ImgBox = (props) => {
    const {src} = props;
    return (
        <>
            <div className="img-box">
                <Image src={src} alt="tatoo image" />
            </div>
        </>
    )
}

export default ImgBox