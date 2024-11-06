import React from 'react';
import { NavLink } from 'react-router-dom';
import appBtn from '/images/home/app-btn.png';
import Image from '../UI/Image';
import playBtn from '/images/home/play-btn.png';

const AppBtn = () => {
    return (
        <>
            <div className="btn-flex">
                <NavLink to="/" className="links">
                    <Image src={appBtn} className="img-fluid thumb" alt="App Button" />
                </NavLink>
                <NavLink to="/" className="links">
                    <Image src={playBtn} className="img-fluid thumb" alt="Play Button" />
                </NavLink>
            </div>
        </>
    )
}

export default AppBtn