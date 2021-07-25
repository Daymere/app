import React from 'react';
import Title from '../elements/Title';

export default function () {
    return (
        <div className="pool container">
            <Title
                className="pool__title"
                title="Deck Pools"
                icon="assets/images/deck_icon.png"
            />
            <ul className="pool-list">
                <li className="pool-list__item">
                    <h5 className="c-text pool-list__title">
                        <img src="assets/images/defiance_icon.png" alt="logo" />
                        <span>Uniswap ibETH/DECK</span>
                    </h5>
                    <p className="c-text c-text_gray pool-list__subtitle">Accepting ibETH, DECK</p>
                    <div className="pool-list__logos">
                        <img src="assets/images/ethereum_icon.png" alt="logo" />
                        <img src="assets/images/deck-big_icon.png" alt="logo" />
                    </div>
                    <div className="pool-list__row">
                        <div className="pool-list__info">APR</div>
                        <div className="pool-list__percent">6.71%</div>
                    </div>
                    <button className="pool-list__btn">Supply 1x</button>
                </li>

                <li className="pool-list__item">
                    <h5 className="c-text pool-list__title">
                        <img src="assets/images/defiance_icon.png" alt="logo" />
                        <span>Uniswap ibETH/DECK</span>
                    </h5>
                    <p className="c-text c-text_gray pool-list__subtitle">Accepting ibETH, DECK</p>
                    <div className="pool-list__logos">
                        <img src="assets/images/ibeth_icon.png" alt="logo" />
                        <img src="assets/images/deck-big_icon.png" alt="logo" />
                    </div>
                    <div className="pool-list__row">
                        <div className="pool-list__info">APR</div>
                        <div className="pool-list__percent">6.71%</div>
                    </div>
                    <button className="pool-list__btn">Supply 1x</button>
                </li>

                <li className="pool-list__item pool-list__item_empty">
                    <img src="assets/images/blue_arrow.png" alt="arrow" className="pool-list__icon" />
                    <p className="pool-list__placeholder">View all pools</p>
                </li>
            </ul>
        </div>
    );
}