import React from 'react';

export default React.forwardRef((props, ref) => {
    const classes = ["p-blank-item"];
    let { icon, className, title } = props;
    icon = typeof icon === "string" ? icon : "assets/images/clock.svg";
    title = typeof title === "string" ? title : "More Deck Hand products coming";

    if (typeof className === "string") {
        classes.push(className);
    }

    return (
        <div ref={ref} className={classes.join(" ")}>
            <div className="p-blank-item__content">
                <img src={icon} alt="blank" className="p-blank-item__icon" />
                <h5 className="p-blank-item__title">{title}</h5>
            </div>
        </div>
    );
});