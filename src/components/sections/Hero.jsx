import React from 'react';
import Social from '../elements/Social';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <section className="hero">
            <div className="container hero__container">
                <img src="assets/images/hero_strokes.png" alt="strokes" className="hero__strokes" />
                <div className="hero-content">
                    <div className="hero-content__wrapper">
                        <h1 className="p-logo-text hero-content__title">Deck<span>Hand</span> Crypto</h1>
                        <p className="hero-content__desc">
                            Alpha Finance Lab is a DeFi Lab, and on a mission to build Alpha
                            Universe. Alpha Universe includes the Alpha ecosystem, which
                            consists of Alpha products that interoperate to maximize returns
                            while minimizing risks for users, and other ecosystems incubated
                            through the Alpha Launchpad incubator program.
                        </p>
                    </div>
                    <div className="hero-controls">
                        <NavLink to="/" className="p-btn p-btn_stroke hero-controls__btn_stroke">Deck Hand Crypto Doc</NavLink>
                        <NavLink to="/" className="p-btn p-btn_white hero-controls__btn_white">Blog</NavLink>
                        <Social className="hero-social">
                            <Social.Twitter to="https://twitter.com" className="hero-social__link" />
                            <Social.Telegram to="https://web.telegram.org/" className="hero-social__link" />
                            <Social.Discord to="https://discord.com/" className="hero-social__link" />
                        </Social>
                    </div>
                </div>
            </div>
        </section>
    );
}