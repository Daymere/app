import React from 'react';
import useScroll from '../../util/hooks/useScroll';
import classname from 'classnames';

export default function () {
    const [ref, inView] = useScroll({});

    return (
        <section ref={ref} className={classname("security container", { animation: inView })}>
            <div className="p-line security__line"></div>
            <h2 className="p-title secturity__title">Protocol Security</h2>
            <ul className="security-group">
                <li className="security-group__item">
                    <div className="security-group__label">
                        <img src="assets/images/security/zeppelin.png" alt="zeppelin" className="security-group__img" />
                    </div>
                    <p className="security-group__text">Security audit</p>
                </li>
                <li className="security-group__item">
                    <div className="security-group__label">
                        <img src="assets/images/security/shield.png" alt="zeppelin" className="security-group__img" />
                    </div>
                    <p className="security-group__text">Security audit</p>
                </li>
                <li className="security-group__item">
                    <div className="security-group__label">
                        <img src="assets/images/security/quantstamp.png" alt="zeppelin" className="security-group__img" />
                    </div>
                    <p className="security-group__text">Security audit</p>
                </li>
                <li className="security-group__item">
                    <div className="security-group__label">
                        <img src="assets/images/security/immunefi.png" alt="zeppelin" className="security-group__img" />
                    </div>
                    <p className="security-group__text">Active bug bounty program</p>
                </li>
            </ul>
        </section>
    );
}