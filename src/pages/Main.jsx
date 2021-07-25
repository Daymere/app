import React, { Fragment } from 'react';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import * as Sections from '../components/sections';

export default function () {
    return (
        <Fragment>
            <Header variant="navigation" />
            <Sections.Hero />
            <div className="p-back_gradient">
                <Sections.Statistics />
                <Sections.Banner />
                <Sections.Products />
                <Sections.Security />
                <Sections.Launchpad />
                <Sections.Projects />
            </div>
            <div className="p-back_gradient">
                <Sections.Investors />
                <Footer />
            </div>
        </Fragment>
    );
}