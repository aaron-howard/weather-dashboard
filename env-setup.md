# Environment Variables Setup Guide

This guide explains how to securely configure your API keys for the Weather Dashboard.

## 🔐 Security Best Practices

**Never commit your actual API keys to version control!** Always use placeholder values in your repository.

## 📁 File Structure

```
weather-dashboard/
├── config.js              # Your actual configuration (DO NOT COMMIT)
├── config.template.js     # Template with placeholders (safe to commit)
├── .gitignore            # Excludes config.js from version control
└── ...
```

## 🚀 Quick Setup

### Step 1: Copy the Template
```bash
cp config.template.js config.js
```

### Step 2: Edit Your Configuration
Open `config.js` and replace the placeholder values:

```javascript
const CONFIG = {
    // Replace with your actual API key
    OPENWEATHER_API_KEY: 'your_actual_api_key_here',
    
    // Optional: Replace with your WeatherAPI key
    WEATHERAPI_KEY: 'your_weatherapi_key_here',
    
    // ... rest of configuration
};
```

### Step 3: Get Your API Keys

#### OpenWeatherMap API (Required)
1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to "API Keys" section
4. Copy your API key
5. Paste it in `config.js`

#### WeatherAPI (Optional)
1. Visit [WeatherAPI](https://www.weatherapi.com/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Paste it in `config.js`

## 🛡️ Security Features

### API Key Validation
The dashboard automatically validates your API keys:
- Checks if keys are properly configured
- Validates key length and format
- Shows helpful error messages if keys are missing

### Error Handling
- Clear error messages guide you through setup
- Graceful fallbacks if APIs are unavailable
- No sensitive data exposed in error messages

## 🔧 Configuration Options

### Default Location
Set your preferred fallback location:
```javascript
DEFAULT_LOCATION: {
    lat: 32.7767,    // Your latitude
    lon: -96.7970,   // Your longitude
    name: 'Dallas, TX'
}
```

### API Settings
Configure API behavior:
```javascript
API_TIMEOUT: 10000,        // Request timeout (ms)
API_RETRY_ATTEMPTS: 3,     // Number of retry attempts
```

### UI Settings
Customize the dashboard appearance:
```javascript
DEFAULT_THEME: 'light',           // 'light' or 'dark'
ANIMATION_ENABLED: true,          // Enable/disable animations
CHART_ANIMATION_DURATION: 1000    // Chart animation speed (ms)
```

## 🚫 What NOT to Do

❌ **Don't commit config.js to version control**
❌ **Don't share your API keys publicly**
❌ **Don't hardcode keys in script.js**
❌ **Don't use production keys in development**

## ✅ What TO Do

✅ **Use config.template.js as your starting point**
✅ **Keep config.js in .gitignore**
✅ **Use different keys for development/production**
✅ **Rotate your API keys regularly**
✅ **Monitor your API usage**

## 🔍 Troubleshooting

### "API Key Required" Error
- Make sure you've copied `config.template.js` to `config.js`
- Verify your API key is correctly pasted
- Check that there are no extra spaces or quotes

### "Invalid API Key" Error
- Verify your API key is the correct length (usually 32 characters)
- Make sure you're using the correct API key for OpenWeatherMap
- Check if your API key has expired or been revoked

### API Rate Limit Exceeded
- Check your API usage in the OpenWeatherMap dashboard
- Consider upgrading to a paid plan if needed
- Implement caching to reduce API calls

## 📝 Example Configuration

Here's a complete example of a properly configured `config.js`:

```javascript
const CONFIG = {
    OPENWEATHER_API_KEY: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    WEATHERAPI_KEY: 'x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8',
    
    DEFAULT_LOCATION: {
        lat: 40.7128,
        lon: -74.0060,
        name: 'New York, NY'
    },
    
    API_TIMEOUT: 15000,
    API_RETRY_ATTEMPTS: 3,
    
    DEFAULT_THEME: 'light',
    ANIMATION_ENABLED: true
};
```

## 🔄 Updating Configuration

To update your configuration:
1. Edit `config.js` with your new values
2. Refresh the browser to load new settings
3. Test the dashboard to ensure everything works

Remember: Never commit your actual `config.js` file to version control!
