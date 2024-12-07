// Configuration constants for the Test Boss website

export const CONFIG = {
    // Animation durations
    SCROLL_DURATION: 800,
    FADE_DURATION: 300,
    
    // Scroll threshold for showing/hiding elements
    SCROLL_THRESHOLD: 100,
    
    // Breakpoints
    MOBILE_BREAKPOINT: 768,
    
    // Class names
    CLASSES: {
        ACTIVE: 'active',
        VISIBLE: 'visible',
        HIDDEN: 'hidden',
        LOADING: 'loading',
        ERROR: 'error'
    },
    
    // Selectors
    SELECTORS: {
        CODE_BLOCKS: '.code-example',
        NAV_LINKS: '.nav-link',
        SECTIONS: 'section',
        COPY_BUTTON: '.copy-button',
        THEME_TOGGLE: '#theme-toggle',
        BACK_TO_TOP: '#back-to-top'
    },
    
    // Theme settings
    THEMES: {
        LIGHT: 'light',
        DARK: 'dark'
    },
    
    // Storage keys
    STORAGE_KEYS: {
        THEME: 'test-boss-theme'
    }
};