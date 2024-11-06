import React from 'react'
import { NavLink } from 'react-router-dom';

const Links = () => {


    const links = [
        {
            title: 'home',
            path: '/'
        },
        {
            title: 'about us',
            path: '/about-us'
        },
        {
            title: 'services',
            path: '/services'
        },
        {
            title: 'blogs',
            path: '/blogs'
        },
    ]

    return (
        <>
            <ul className='navbar-nav m-auto'>
                {links?.map(({title,path})=>(
                    <li className='nav-item' key={path}><NavLink className='nav-link' to={path}>{title}</NavLink></li>
                ))}
            </ul>

            <ul className='side-ul'>
                <li className='sd-li'>
                    <NavLink to='/contact' className='btn login'>contact us</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Links