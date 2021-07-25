import React from 'react';
import Blank from '../elements/Blank';
import useScroll from '../../util/hooks/useScroll';
import classname from 'classnames';

export default function () {
    const [ref, inView] = useScroll({});

    return (
        <section ref={ref} className={classname("projects container", { animation: inView })}>
            <h2 className="p-title projects__title">Incubated Projects</h2>
            <div className="projects-list">
                <div className="projects-list__item">
                    <div className="projects-list__image">
                        <img src="assets/images/beta.svg" alt="beta" className="projects-list__icon" />
                    </div>
                    <div className="projects-list__content">
                        <h5 className="projects-list__title">Beta Finance</h5>
                        <p className="projects-list__desc">
                            Offset crypto volatility and bring market
                            stability via short-selling
                        </p>
                        <div className="projects-list__links">
                            <a href="/" className="projects-list__link projects-list__link_website">Website</a>
                            <a href="../../Project Structure.md" className="projects-list__link projects-list__link_file" download>Doc</a>
                        </div>
                    </div>
                </div>
                <Blank className="projects-list__item projects-list__item_blank" />
                <Blank className="projects-list__item projects-list__item_blank" />
            </div>
        </section>
    );
}