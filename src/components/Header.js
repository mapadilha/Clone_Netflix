import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt='Netflix'/>
                </a>

            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg" alt='Usuário'/>
                </a>

            </div>
        </header>
    );

}