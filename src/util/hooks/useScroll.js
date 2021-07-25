import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { debounce, offset } from '../funcs';

export default function ({ delay, hide, splt }) {
    const ref = useRef();
    const [inView, setInView] = useState(false);

    delay = delay || 0;
    hide = hide || false;
    splt = splt || 2;

    const scroll = debounce((event) => {
        const top = pageYOffset;
        const bottom = top + window.innerHeight;
        const { top: elementTop, height: elementHeight } = offset(ref.current);
        const elementBottom = elementTop + elementHeight;
        const step = Math.max(1, splt);
        const missedAppear = window.innerHeight * (1 / step);

        const visibleTop = elementTop >= top && elementTop + missedAppear <= bottom;
        const visibleBottom = elementBottom >= top + missedAppear && elementBottom <= bottom;
        const visibleMiddle = elementTop <= top && elementBottom >= bottom;

        console.log(Date.now())

        if (visibleTop || visibleBottom || visibleMiddle) {
            setInView(true);
        } else {
            if (!hide) return null;
            setInView(false)
        }
    }, delay);

    useEffect(() => {
        if (ref.current) {
            scroll();
            window.addEventListener("scroll", scroll);

            return () => {
                window.removeEventListener("scroll", scroll);
            }
        }
    }, [ref.current]);

    return [ref, inView];
}