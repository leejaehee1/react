import React from 'react';
import "./NavCss.css"

const NavCss = () => {
    return (
        <div id="wrapper">
            <a href="#main" id="skip-nav">skip navigation</a>
            <header id="header">
            <h1><a href="http://localhost:3000/">PLMS</a></h1>
            <nav id="gnb">
                <ul>
                <li>
                    <a href="http://localhost:3000/list" class="big_gnb">Punch List</a>
                    <ul>
                    <li><a href="http://localhost:3000/list">All Item</a></li>
                    <li><a href="http://localhost:3000/list">My Item</a></li>
                    <li><a href="http://localhost:3000/list">Recycle Bin</a></li>
                    </ul>
                </li>
                <li>
                    <a href="http://localhost:3000/admin" class="big_gnb">Management</a>
                </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default NavCss;