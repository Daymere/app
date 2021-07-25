import React, { useState } from 'react';
import Title from '../elements/Title';
import classnames from 'classnames';
import Form from '../elements/Form';

const depositStats = [
    { id: 0, name: "Balance", value: "0.000 ibetH" },
    { id: 1, name: "Total ETH Value", value: "0.000 ETH" },
];

const sales = [25, 50, 75, 100];

export default function () {
    const [convertFrom, setConvertFrom] = useState(0);
    const [convertTo, setConvertTo] = useState(0);
    const [sale, setSale] = useState(null);

    return (
        <div className="deposit container">
            <Title
                className="deposit__title"
                icon="assets/images/round_arrows.svg"
                title="Swap between your ETH to ibETH and vice versa"
            />
            <div className="deposit__row">
                <div className="p-wrapper deposit-wrapper deposit-wrapper_stats">
                    <div className="deposit-wrapper__header">
                        <h5 className="c-text deposit-wrapper__title">Your ibETH Holding</h5>
                        <button className="c-text deposit-wrapper__btn">Migrate ibETH to V2</button>
                    </div>
                    <ul className="deposit-wrapper__list">
                        {depositStats.map(({ id, name, value }) => (
                            <li className="deposit-wrapper__item" key={id}>
                                <span className="c-text c-text_gray deposit-wrapper__name">{name}</span>
                                <span className="c-text deposit-wrapper__value">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Form className="deposit-wrapper">
                    <h5 className="c-text deposit__title">Deposit ETH</h5>

                    <div className="form__item deposit-form__item">
                        <Form.InputTitle left="Convert from" />

                        <Form.Row>
                            <div className="form__field">
                                <img src="assets/images/ethereum_icon.png" alt="icon" className="form__icon" />
                                <input
                                    type="text"
                                    className="form__input"
                                    name="convertfrom"
                                    value={convertFrom}
                                    onChange={(e) => setConvertFrom(e.target.value)}
                                />
                            </div>
                            <div className="c-text form__selector deposit-form__selector">ETH</div>
                        </Form.Row>
                    </div>

                    <div className="deposit-form__radiobuttons">
                        {sales.map(percent => (
                            <div key={`per${percent}`} className={classnames("form__radio", "deposit-form__radio", { active: sale === percent })}>
                                <input
                                    type="radio"
                                    name="sale"
                                    id={`per${percent}`}
                                    checked={sale === percent}
                                    onChange={() => setSale(percent)}
                                />
                                <label className="c-text c-text_gray" htmlFor={`per${percent}`}>{percent}%</label>
                            </div>
                        ))}
                    </div>

                    <div className="form__item deposit-form__item deposit-form__item_receive">
                        <Form.InputTitle
                            className="deposit-form__suptext"
                            left="to receive"
                        />

                        <Form.Row>
                            <div className="form__field">
                                <img src="assets/images/ethereum_icon.png" alt="icon" className="form__icon" />
                                <input
                                    type="text"
                                    className="form__input"
                                    name="convertto"
                                    value={convertTo}
                                    onChange={(e) => setConvertTo(e.target.value)}
                                />
                                <div className="c-text form__label">ibETH</div>
                            </div>
                        </Form.Row>

                        <Form.Submit className="deposit-form__submit">Convert</Form.Submit>
                    </div>

                </Form>
            </div>
        </div>
    );
}