import React from 'react'

import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className='nav-area'>
            <img src="Logo.svg" alt="" />
            <div className="nav-menu">
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
            </div>
        </nav>
    )
}
