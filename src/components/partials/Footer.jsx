import React from 'react';
import Social from '../elements/Social';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <footer className="footer container">
            <Social className="footer-social">
                <Social.Twitter className="footer-social__link" to="https://google.com" />
                <Social.Telegram className="footer-social__link" to="https://google.com" />
                <Social.Discord className="footer-social__link" to="https://google.com" />
                <Social.Github className="footer-social__link" to="https://google.com" />
                <Social.Coingecko className="footer-social__link" to="https://google.com" />
                <Social.Coinmarketcap className="footer-social__link" to="https://google.com" />
                <Social.Defipulse className="footer-social__link" to="https://google.com" />
            </Social>
            <div className="footer-links">
                <NavLink to="/" className="footer-links__item">Bug Bounty</NavLink>
                <NavLink to="/" className="footer-links__item">Doc</NavLink>
            </div>
        </footer>
    );
}