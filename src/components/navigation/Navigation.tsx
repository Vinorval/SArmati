import React from "react";
import Styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

import Logo from "../../image/logo/logo.png";

const Navigation = () => {
    return (
        <section className="navigation">
            <img className="navigation__logo" src={Logo} alt="логотип компании" />
            <div className="navigation__block">
                <nav className="navigation__list">
                    <NavLink to="/company" className="navigation__link">Компания</NavLink>
                    <NavLink to="/catalog" className="navigation__link">Очковые линзы</NavLink>
                    <NavLink to="/breds" className="navigation__link">Бренды</NavLink>
                    <NavLink to="/articles" className="navigation__link">Статьи</NavLink>
                </nav>
                <button className={`${Styles.button} ${Styles.button_length_long}`}>Адреса салонов</button>
            </div>
        </section>
    );
};

export default Navigation;