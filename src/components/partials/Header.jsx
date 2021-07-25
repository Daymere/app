import React from 'react';
import { NavLink } from 'react-router-dom';
import { clipName } from '../../util/funcs';

export default function ({ variant }) {
    const isNav = variant === "navigation";
    const isUser = variant === "user";

    return (
        <header className="header container">
            <NavLink to="/" className="header__logo">
                <img src="assets/images/logo.png" alt="logo" className="logo__image" />
                <div className="p-logo-text">Deck<span>Hand</span></div>
                <div className="header__subtitle">Crypto</div>
            </NavLink>
            {isNav && <nav className="header-nav">
                <NavLink className="header-nav__link" to="/products">Products</NavLink>
                <NavLink className="header-nav__link" to="/">Protocol Security</NavLink>
                <NavLink className="header-nav__link" to="/launchpad">Alpha Launchpad</NavLink>
                <NavLink className="header-nav__link" to="/">Investors</NavLink>
            </nav>}
            {isUser && (<>
                <div className="header__extra-btn header__extra-btn_tokenomics">
                    <NavLink to="/" className="header-nav__tokenomics">DECK Tokenomics</NavLink>
                </div>
                {/* <div className="header__extra-btn header__extra-btn_balance">
                    <div className="header-nav__item header-nav__item_balance">0.000 DECK</div>
                </div>
                <div className="header__extra-btn header__extra-btn_user">
                    <NavLink to="/user" className="header-nav__item header-nav__item_user">
                        <img src="assets/images/fox.png" alt="avatar" className="header-nav__item_icon" />
                        {clipName("0x9276qb12bdb1212ae", 10)}
                    </NavLink>
                </div> */}
                <nav className="header-nav">
                    <div className="header-nav__item header-nav__item_balance">0.000 DECK</div>
                    <NavLink to="/user" className="header-nav__item header-nav__item_user">
                        <img src="assets/images/fox.png" alt="avatar" className="header-nav__item_icon" />
                        {clipName("0x9276qb12bdb1212ae", 10)}
                    </NavLink>
                </nav>
            </>)}
        </header>
    );
}