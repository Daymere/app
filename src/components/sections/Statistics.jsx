import React from 'react';
import useScroll from '../../util/hooks/useScroll';
import classname from 'classnames';

export default function () {
    const [ref, inView] = useScroll({ delay: 100 });

    return (
        <section ref={ref} className={classname("statistics container", { animation: inView })}>
            <div className="statistics-wrapper statistics-wrapper_deck">
                <div className="statistics__scoreboard">
                    <span className="statistics__name">Total Deck Stacked</span>
                    <span className="statistics__value statistics__value_fs">113.0M</span>
                    <span className="statistics__subvalue">($48,382,762.01)</span>
                </div>
                <div className="statistics-list">
                    <div className="statistics-list__item">
                        <span className="statistics-list__title">Circulating Supply Staked</span>
                        <span className="statistics-list__value">32.18%</span>
                    </div>
                </div>
            </div>
            <div className="statistics-wrapper statistics-wrapper_value">
                <div className="statistics__scoreboard">
                    <span className="statistics__name">Total Value Locked</span>
                    <span className="statistics__value">$975,945,781.52</span>
                    <span className="statistics__subvalue">&nbsp;</span>
                </div>
                <div className="statistics-list">
                    <div className="statistics-list__item">
                        <span className="statistics-list__title">Deck Homora (Ethereum)</span>
                        <span className="statistics-list__value">$41M</span>
                    </div>
                    <div className="statistics-list__item">
                        <span className="statistics-list__title">Deck Homora (BSC)</span>
                        <span className="statistics-list__value">$39M</span>
                    </div>
                    <div className="statistics-list__item">
                        <span className="statistics-list__title">Deck Homora (V2)</span>
                        <span className="statistics-list__value">$897M</span>
                    </div>
                </div>
            </div>
        </section>
    );
}