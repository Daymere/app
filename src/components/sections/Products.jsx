import React from 'react';
import Blank from '../elements/Blank';
import useScroll from '../../util/hooks/useScroll';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

function Post({ placeholder, title, text, appBtn, docBtn }) {
    return (
        <li className="products-list__item products-list__item_variant-bb" key={title}>
            <div className="products-list__imagewrap">
                <img src="assets/images/products/round_strokes.png" alt="round" className="products-list__img products-list__img_big" />
                <div className="products-list__placeholder">{placeholder || "&nbsp;"}</div>
            </div>
            <div className="products-list__content">
                <h3 className="products-list__title">{title}</h3>
                <p className="products-list__text">{text}</p>
                <div className="product-list-controls">
                    {docBtn && <NavLink to={docBtn.to} className="p-btn p-btn_stroke product-list-controls__btn">{docBtn.name}</NavLink>}
                    {appBtn && <NavLink to={appBtn.to} className="p-btn p-btn_white product-list-controls__btn">{appBtn.name}</NavLink>}
                </div>
            </div>
        </li>
    );
}

export default function () {
    const isTablet = window.innerWidth <= 991;
    const [fRef, fIntoView] = useScroll({});
    const [sRef, sIntoView] = useScroll({});
    const [tRef, tIntoView] = useScroll({});

    return (
        <section className="products container">
            <div className="p-title products__title">Deck Hand Products</div>
            <ul className="products-list">
                <li className="products-list__item products-list__item_variant-bb">
                    <div className="products-list__imagewrap">
                        <img src="assets/images/products/round_strokes.png" alt="round" className="products-list__img products-list__img_big" />
                        <div className="products-list__placeholder">Tokenomics</div>
                    </div>
                    <div className="products-list__content">
                        <h3 className="products-list__title">Deck Hand Tokenomics</h3>
                        <p className="products-list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="product-list-controls">
                            <NavLink to="/" className="p-btn p-btn_stroke product-list-controls__btn">{isTablet && "Doc" || "Deck Tokenomics Doc"}</NavLink>
                            <NavLink to="/" className="p-btn p-btn_white product-list-controls__btn">Launch App</NavLink>
                        </div>
                    </div>
                </li>

                <li ref={fRef} className={classnames("products-list__item products-list__item_variant-ob", { animation: fIntoView })}>
                    <div className="products-list__imagewrap">
                        <img src="assets/images/products/two.png" alt="two" className="products-list__img" />
                        <div className="products-list__placeholder">Homora v2</div>
                    </div>
                    <div className="products-list__content">
                        <h3 className="products-list__title">Deck Hand Homora V2</h3>
                        <p className="products-list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="product-list-controls">
                            <NavLink to="/" className="p-btn p-btn_stroke product-list-controls__btn">{isTablet && "Doc" || "Deck Homora V2 Doc"}</NavLink>
                            <NavLink to="/" className="p-btn p-btn_white product-list-controls__btn">Launch App</NavLink>
                        </div>
                    </div>
                </li>

                <li className="products-list__item products-list__item_variant-db">
                    <div className="products-list__imagewrap">
                        <img src="assets/images/products/ethereum.png" alt="ethereum" className="products-list__img" />
                        <div className="products-list__placeholder">Homora v1</div>
                    </div>
                    <div className="products-list__content">
                        <h3 className="products-list__title">Deck Hand Homora (Ethereum)</h3>
                        <p className="products-list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="product-list-controls">
                            <NavLink to="/" className="p-btn p-btn_stroke product-list-controls__btn">{isTablet && "Doc" || "Deck Homora Doc (vEthereum)"}</NavLink>
                            <NavLink to="/" className="p-btn p-btn_white product-list-controls__btn">Launch App</NavLink>
                        </div>
                    </div>
                </li>

                <li ref={sRef} className={classnames("products-list__item products-list__item_variant-db", { animation: sIntoView })}>
                    <div className="products-list__imagewrap">
                        <img src="assets/images/products/dex_cube.png" alt="dex_cube" className="products-list__img" />
                        <div className="products-list__placeholder">HOMORA V1</div>
                    </div>
                    <div className="products-list__content">
                        <h3 className="products-list__title">Deck Homora Doc (vBSC)</h3>
                        <p className="products-list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="product-list-controls">
                            <NavLink to="/" className="p-btn p-btn_stroke product-list-controls__btn">{isTablet && "Doc" || "Deck Tokenomics Doc"}</NavLink>
                            <NavLink to="/" className="p-btn p-btn_white product-list-controls__btn">Launch App</NavLink>
                        </div>
                    </div>
                </li>

                <li className="products-list__item products-list__item_variant-wb">
                    <div className="products-list__imagewrap">&nbsp;</div>
                    <div className="products-list__content">
                        <h3 className="products-list__title">&nbsp;</h3>
                        <p className="products-list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="product-list-controls">
                            <NavLink to="/" className="p-btn p-btn_stroke product-list-controls__btn">Launch App</NavLink>
                        </div>
                    </div>
                </li>

                <Blank ref={tRef} className={classnames("products-list__item products-list__item_blank", { animation: tIntoView })} />
            </ul>
        </section>
    );
}