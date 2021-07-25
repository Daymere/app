import React from 'react';

function Form({ className, children }) {
    const classes = ["p-wrapper", "form__wrapper", "form"];
    if (typeof className === "string") {
        classes.push(className)
    }
    return (
        <form method="post" className={classes.join(" ")}>
            {children}
        </form>
    );
}

Form.InputTitle = ({ className, left, right }) => {
    const classes = ["c-text", "c-text_gray", "form__suptext"];
    if (typeof className === "string") {
        classes.push(className)
    }
    return (
        <div className={classes.join(" ")}>
            {left && <span>{left}</span> || <span>&nbsp;</span>}
            {right && <span>{right}</span>}
        </div>
    );
}

Form.Selector = ({ }) => {
    return (
        <div>

        </div>
    );
}

Form.Row = ({ className, variant, children }) => {
    const classes = ["form__row"];
    if (typeof className === "string") {
        classes.push(className)
    }
    if (variant === "half") {
        classes.push("form__row_half")
    }

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    )
}

Form.Submit = ({ className, children }) => {
    const classes = ["c-text", "form__submit"];
    if (typeof className === "string") {
        classes.push(className)
    }

    return (
        <button type="submit" className={classes.join(" ")}>{children}</button>
    );
}

export default Form;