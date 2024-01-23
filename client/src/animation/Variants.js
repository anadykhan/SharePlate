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

export const BannerUpperTitleVariants = {
    hidden: { 
        x: -500 
    },
    visible: { 
        x: 0, 
        transition: { 
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
        } 
    },
};

export const BannerTitleVariants = {
    hidden: { 
        x: -500 
    },
    visible: { 
        x: 0, 
        transition: { 
            duration: 0.5, 
            delay: 0.5,
            ease: "easeOut"
        } 
    },
};

export const BannerSubtitleVariants = {
    hidden: {
        x: -500
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.8,
            ease: "easeOut"
        }
    },
};

