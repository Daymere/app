import React from 'react';
import useScroll from '../../util/hooks/useScroll';
import classname from 'classnames';

export default function () {
    const [ref, inView] = useScroll({});

    return (
        <section ref={ref} className={classname("investors container", { animation: inView })}>
            <h2 className="p-title investors__title">Backed by Global Investors</h2>
            <ul className="investors-group">
                <li className="investors-group__item">
                    <div className="investors-group__image">
                        <img src="assets/images/investors/spartan.png" alt="spartan" className="investors-group__img" />
                    </div>
                    <h5 className="investors-group__company">The Spartan Group</h5>
                </li>

                <li className="investors-group__item">
                    <div className="investors-group__image">
                        <img src="assets/images/investors/multicoin.png" alt="spartan" className="investors-group__img" />
                    </div>
                    <h5 className="investors-group__company">Multicoin Capital</h5>
                </li>

                <li className="investors-group__item">
                    <div className="investors-group__image">
                        <img src="assets/images/investors/defiance.png" alt="spartan" className="investors-group__img" />
                    </div>
                    <h5 className="investors-group__company">DeFiance Capital</h5>
                </li>

                <li className="investors-group__item">
                    <div className="investors-group__image">
                        <img src="assets/images/investors/delphi.png" alt="spartan" className="investors-group__img" />
                    </div>
                    <h5 className="investors-group__company">Delphi Ventures</h5>
                </li>
            </ul>
        </section>
    );
}