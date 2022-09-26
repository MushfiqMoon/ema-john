import React from 'react'

import './Banner.css'

export const Banner = () => {
    return (
        <div className='banner-area'>
            <div className="banner-text">
                <small>Sale up to 70% off</small>
                <h2>New Collection For Fall</h2>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <span>
                    <button className='ema-btn'>SHOP NOW</button>
                </span>
            </div>
            <img src="./banner.jpg" alt="" />
        </div>
    )
}
