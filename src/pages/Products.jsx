import React, { Fragment } from 'react';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import * as Sections from '../components/sections';

export default function () {
    return (
        <Fragment>
            <div className="p-fullh p-back_darkgradient">
                <Header variant="user" />
                <Sections.Calculator />
                <Sections.Deposit />
                <Footer />
            </div>
        </Fragment>
    );
}