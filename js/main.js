// Main entry point for Test Boss website JavaScript

// Import our utility modules
import { NavigationManager } from './modules/navigation.js';
import { CodeBlockManager } from './modules/codeBlocks.js';
import { ThemeManager } from './modules/theme.js';

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    // Initialize our core functionality
    const nav = new NavigationManager();
    const codeBlocks = new CodeBlockManager();
    const theme = new ThemeManager();
});
