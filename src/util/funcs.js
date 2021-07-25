export function clipName(sentencs, symlength) {
    const sentencslen = sentencs.length;
    if (sentencslen <= symlength) return sentencs;
    const arrayLetters = sentencs.split("");
    const start = arrayLetters.slice(0, Math.floor(symlength / 2) + 1).join("");
    const end = arrayLetters.reverse().slice(0, Math.ceil(symlength / 2 - 1)).reverse().join("");

    return start + "..." + end;
}

export function offset(element) {
    const coords = element.getBoundingClientRect();
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const left = window.pageXOffset || document.documentElement.scrollLeft;

    return { top: top + coords.top, left: left + coords.left, height: coords.height, width: coords.width };
}

export function debounce(func, ms) {
    let blocked = false;

    return (...args) => {
        if (blocked) return null;

        blocked = true;
        func(...args);
        setTimeout(() => blocked = false, ms);
    }
}