export const BannerUpperTitleVariants = {
    hidden: { 
        opacity: 0,
        x: -50
    },
    visible: { 
        opacity: 1,
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
        opacity: 0,
        x: -50
    },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: { 
            duration: 0.5, 
            delay: 0.5,
            ease: "easeOut"
        } 
    },
};

export const BannerSubtitleVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.8,
            ease: "easeOut"
        }
    },
};

export const FeaturedCardNumberVariant = {
    hidden: {
        y: 0,
    },
    hover: {
        y: -50, // or any desired value
        transition: {
            duration: 0.3,
        }
    }
};

export const FeaturedCardVariant = {
    hidden: {
        opacity: 1,
        scale: 1,
        zIndex: 0,
    },
    hover: {
        scale: 1.05,
        zIndex: 1,
    },
};

export const ButtonHover = {
    hidden: {
        scale: 1
    },
    hover: {
        scale: 1.5,
        backgroundColor: '#c7920c',
        transition: {
            duration: 1
        }
    }
}