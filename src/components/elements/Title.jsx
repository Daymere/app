import React from 'react';

export default function ({ className, icon, title }) {
    const classes = ["s-title"];

    if (typeof className === "string") {
        classes.push(className);
    }

    return (
        <div className={classes.join(" ")}>
            <img src={icon} alt="icon" className="s-title__icon" />
            <h3 className="s-title__title">{title}</h3>
        </div>
    );
}