import React from 'react';

export default function () {
    return (
        <div className="report container">
            <div className="p-wrapper report-card">
                <h3 className="c-text report-card__title">
                    Total Valur Locked in ibETH/DECK Pool
                    on Uniswap
                </h3>
                <div className="report-card__total">529 755,965 USD</div>
            </div>
            <div className="p-wrapper report-card">
                <h3 className="c-text report-card__title">Your Liquidity</h3>
                <ul className="report-list">
                    <li className="report__row report__row_title">
                        <div className="report__col report__ph">&nbsp;</div>
                        <div className="report__col report__ph">Total Added</div>
                        <div className="report__col report__ph">Current Balance</div>
                        <div className="report__col report__ph">Net Gain (USD)</div>
                    </li>
                    <li className="report__row">
                        <div className="report__col report__col_icon">
                            <img src="assets/images/ibeth_icon.png" alt="ibeth" />
                            <span>ibETH</span>
                        </div>
                        <div className="report__col">
                            <div className="report__mobile-title report__ph">Total Added</div>
                            <span>0,00</span>
                        </div>
                        <div className="report__col">
                            <div className="report__mobile-title report__ph">Current Balance</div>
                            <span>0,00</span>
                        </div>
                        <div className="report__col report__col_rate">
                            <div className="report__mobile-title report__ph">Net Gain (USD)</div>
                            <p className="report__nums">
                                <span>0,00</span>
                                <span>(0,00%)</span>
                            </p>
                        </div>
                    </li>
                    <li className="report__row">
                        <div className="report__col report__col_icon">
                            <img src="assets/images/deck-big_icon.png" alt="ibeth" />
                            <span>DECK</span>
                        </div>
                        <div className="report__col">
                            <div className="report__mobile-title report__ph">Total Added</div>
                            <span>0,00</span>
                        </div>
                        <div className="report__col">
                            <div className="report__mobile-title report__ph">Current Balance</div>
                            <span>0,00</span>
                        </div>
                        <div className="report__col report__col_rate">
                            <div className="report__mobile-title report__ph">Net Gain (USD)</div>
                            <p className="report__nums">
                                <span>0,00</span>
                                <span>(0,00%)</span>
                            </p>
                        </div>
                    </li>
                </ul>
                <button type="button" className="c-text c-text_gray form__submit report__btn">Remove Liquidity</button>
            </div>
        </div>
    );
}