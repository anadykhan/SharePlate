export const onHoverCardAnimation = {
    animation: {
        scale: 1.05,
        filter: 'grayscale(100%) sepia(100%) hue-rotate(30deg) brightness(80%) contrast(120%)',
    },
    transition: {
        duration: 0.3
    }

}

export const offHoverCardAnimation = {
    animation: {
        scale: 1,
        filter: 'grayscale(0%) sepia(0%) hue-rotate(0deg) brightness(100%) contrast(100%) blur(0px)',
    },
    transition: {
        duration: 0.3,
    },
}

export const onHoverCardNumberAnimation = {
    animation: {
        y: -30,// or any desired value
    },
    transition: {
        duration: 0.3,
    }
}

export const offHoverCardNumberAnimation = {
    animation: {
        y: 0,// or any desired value
    },
    transition: {
        duration: 0.3,
    }
}