import React from "react";
import Styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

import Logo from "../../image/logo/logo.png";

const Navigation = () => {
    return (
        <section className={Styles.navigation}>
            <img className={Styles.navigation__logo} src={Logo} alt="логотип компании" />
            <div className={Styles.navigation__block}>
                <nav className={Styles.navigation__list}>
                    <NavLink to="/company" className={Styles.navigation__link}>Компания</NavLink>
                    <NavLink to="/catalog" className={Styles.navigation__link}>Очковые линзы</NavLink>
                    <NavLink to="/breds" className={Styles.navigation__link}>Бренды</NavLink>
                    <NavLink to="/articles" className={Styles.navigation__link}>Статьи</NavLink>
                </nav>
                <button className={`${Styles.button} ${Styles.button_length_long}`}>Адреса салонов</button>
            </div>
        </section>
    );
};

export default Navigation;