import React, { useState } from 'react';
import Title from '../elements/Title';
import Form from '../elements/Form';

export default function () {
    const isTablet = window.innerWidth <= 414;
    const [fromCurrency, setFromCurrency] = useState(0);
    const [toCurrency, setToCurrency] = useState(0);
    const [percent, setPercent] = useState(0.5);
    const [time, setTime] = useState(20);

    return (
        <div className="calculator container">
            <Title
                className="calculator__title"
                icon="assets/images/round_arrows.svg"
                title="Swap between your ibETH/ETH to Deck and vice versa"
            />
            <Form>
                <h5 className="c-text calculator-wrapper__title">Swap</h5>

                <div className="form__item">
                    <Form.InputTitle
                        left="From"
                        right="Balance: 0.0000"
                    />

                    <Form.Row>
                        <div className="form__field">
                            <img src="assets/images/ethereum_icon.png" alt="icon" className="form__icon" />
                            <input
                                type="text"
                                className="form__input"
                                name="fromcurrency"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                            />
                            <button type="button" className="c-text calculator-form__max">Max</button>
                        </div>
                        <div className="c-text form__selector">ETH</div>
                    </Form.Row>
                </div>

                <button className="calculator__trade" type="button">
                    <img src="assets/images/trade_arrow.png" alt="trade-icon" />
                </button>

                <div className="form__item">
                    <Form.InputTitle
                        left={isTablet ? "To" : "To (Estimated)"}
                        right="Balance: 0.0000"
                    />

                    <Form.Row>
                        <div className="form__field">
                            <img src="assets/images/deck_icon.png" alt="icon" className="form__icon" />
                            <input
                                type="text"
                                className="form__input"
                                name="tocurrency"
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                            />
                        </div>
                        <div className="c-text form__selector">Deck</div>
                    </Form.Row>
                </div>

                <Form.Row variant="half">
                    <div className="form__item">
                        <Form.InputTitle left="Slippage Tolerance" />

                        <Form.Row>
                            <div className="form__field">
                                <input
                                    type="text"
                                    className="form__input"
                                    name="percent"
                                    value={percent}
                                    onChange={(e) => setPercent(e.target.value)}
                                />
                                <div className="c-text c-text__medium form__label">%</div>
                            </div>
                        </Form.Row>
                    </div>

                    <div className="form__item">
                        <Form.InputTitle left="Transaction Deadline" />

                        <Form.Row>
                            <div className="form__field">
                                <input
                                    type="text"
                                    className="form__input"
                                    name="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                                <div className="c-text c-text__medium form__label">mins</div>
                            </div>
                        </Form.Row>
                    </div>
                </Form.Row>

                <div className="form__item form__item_submit">
                    <Form.InputTitle
                        left="Price Impact"
                        right="0.00%"
                    />
                    <Form.Submit>Insufficient Amount</Form.Submit>
                </div>
            </Form>
        </div>
    );
}