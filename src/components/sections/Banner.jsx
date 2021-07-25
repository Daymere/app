import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <div className="banner container">
            <div className="banner__wrapper">
                <img src="assets/images/beta.svg" alt="beta" className="banner__beta" />
                <div className="banner-content">
                    <p className="banner-content__text">Announcing Beta Finance</p>
                    <p className="banner-content__text_s18">Offset crypto volatility &#38; bring market stability.</p>
                    <NavLink to="/" className="banner-content__label">Launch via <span>DECK HAND CRYPTO</span></NavLink>
                </div>
                <NavLink to="/information" className="p-btn p-btn_dark banner__link">Learn More</NavLink>
            </div>
        </div>
    );
}