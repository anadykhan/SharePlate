export const FeaturedCardVariant = {
    hidden: {
        opacity: 0,
        x: -20 // start from the left
    },
    visible: {
        opacity: 1,
        x: 0, // end at the origin
        transition: {
            duration: 0.5 // duration of the transition in seconds
        }
    }
}