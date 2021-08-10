import React from 'react';
import "./NavCss.css"

const NavCss = () => {
    return (
        <div id="wrapper">
            <a href="#main" id="skip-nav">skip navigation</a>
            <header id="header">
            <h1><a href="#">PLMS</a></h1>
            <nav id="gnb">
                <ul>
                <li>
                    <a href="#" class="big_gnb">Punch List</a>
                    <ul>
                    <li><a href="#">All Item</a></li>
                    <li><a href="#">My Item</a></li>
                    <li><a href="#">Recycle Bin</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="big_gnb">Management</a>
                </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default NavCss;