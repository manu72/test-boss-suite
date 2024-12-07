// Theme management utilities
import { CONFIG } from '../config.js';

/**
 * Manages theme switching functionality
 */
export class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || CONFIG.THEMES.LIGHT;
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.setupThemeToggle();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
        this.currentTheme = theme;
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === CONFIG.THEMES.LIGHT 
            ? CONFIG.THEMES.DARK 
            : CONFIG.THEMES.LIGHT;
        this.applyTheme(newTheme);
    }
    
    setupThemeToggle() {
        const toggle = document.querySelector(CONFIG.SELECTORS.THEME_TOGGLE);
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}