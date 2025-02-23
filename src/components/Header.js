import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">Netflix</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;