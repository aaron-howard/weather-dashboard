// Demo Configuration for GitHub Pages
// This file provides a safe fallback configuration for the live demo

const CONFIG = {
    // Demo API Keys (these are placeholders and won't work)
    OPENWEATHER_API_KEY: 'DEMO_API_KEY_PLACEHOLDER',
    WEATHERAPI_KEY: 'DEMO_WEATHERAPI_KEY_PLACEHOLDER',
    
    // Default location (Dallas, TX)
    DEFAULT_LOCATION: {
        lat: 32.7767,
        lon: -96.7970,
        name: 'Dallas, TX'
    },
    
    // Chart configuration
    CHART_CONFIG: {
        temperature: {
            color: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)'
        },
        humidity: {
            color: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.8)'
        },
        pressure: {
            color: '#9b59b6',
            backgroundColor: 'rgba(155, 89, 182, 0.8)'
        }
    },
    
    // Update intervals (in milliseconds)
    UPDATE_INTERVALS: {
        weather: 300000, // 5 minutes
        time: 60000,     // 1 minute
        charts: 600000   // 10 minutes
    },
    
    // API Configuration
    API_TIMEOUT: 10000,
    API_RETRY_ATTEMPTS: 3,
    
    // UI Configuration
    DEFAULT_THEME: 'light',
    ANIMATION_ENABLED: true,
    CHART_ANIMATION_DURATION: 1000
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
