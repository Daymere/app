import React from 'react';
import classnames from 'classnames';
import useScroll from '../../util/hooks/useScroll';
import { NavLink } from 'react-router-dom';

export default function () {
    const [ref, inView] = useScroll({});

    return (
        <section ref={ref} className={classnames("launchpad container", { animation: inView })}>
            <div className="p-line launchpad__line"></div>
            <h2 className="p-title launchpad__title">Deck Launchpad</h2>
            <div className="launchpad__image">
                <img src="assets/images/launchpad.png" alt="launchpad" className="launchpad__img" />
            </div>
            <div className="launchpad__text">
                <p className="launchpad__prh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
                <p className="launchpad__prh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <NavLink to="/" className="launchpad__btn">Deck Launchpad Website</NavLink>
        </section>
    );
}