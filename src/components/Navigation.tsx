import React from "react";

import Logo from "../image/logo.png";

const Navigation = () => {
    return (
        <header className="navigation">
            <img className="navigation__logo">{Logo}</img>
            <nav className="navigation__block">
                <ul className="list navigation__links">
                    <li className="navigation__link"></li>
                    <li className="navigation__link"></li>
                    <li className="navigation__link"></li>
                    <li className="navigation__link"></li>
                </ul>
                <button className="button navigation__button"></button>
            </nav>
        </header>
    )
}