import React from 'react';

import './nav.css';

export default function TopNav(props) {

    return(
        <header>
            <nav>
                <ul className='navLinks'>
                    <a href='#aboutPage' className='aboutLink'
                        onClick={() => props.onNewSearch()}> About</a>
                </ul>
            </nav>
            <div className='siteTitle'>
            <h1>The "Dread Pirate Eats" welcomes you!</h1>
                <h2>Join him on his mighty frigate - The Decider</h2>
            </div>
        </header>
    )
}