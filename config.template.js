// Weather Dashboard Configuration Template
// Copy this file to config.js and replace the placeholder values with your actual API keys

const CONFIG = {
    // API Keys - Replace with your actual keys
    // Get your free API key at: https://openweathermap.org/api
    OPENWEATHER_API_KEY: 'YOUR_OPENWEATHER_API_KEY',
    
    // WeatherAPI Key (Optional - for future enhancements)
    // Get your free API key at: https://www.weatherapi.com/
    WEATHERAPI_KEY: 'YOUR_WEATHERAPI_KEY',
    
    // Default location (fallback if geolocation fails)
    DEFAULT_LOCATION: {
        lat: 32.7767, // Dallas, TX coordinates
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
