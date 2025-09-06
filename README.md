# 🌤️ Weather Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.x-blue.svg)](https://www.chartjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-3.0-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A beautiful, responsive weather dashboard built with JavaScript, Chart.js, and modern CSS3. Features real-time weather data, interactive charts, and a sleek user interface.

![Weather Dashboard Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Weather+Dashboard+Preview)

## ✨ Live Demo

[View Live Demo](https://aaron-howard.github.io/weather-dashboard) | [Report Bug](https://github.com/aaron-howard/weather-dashboard/issues) | [Request Feature](https://github.com/aaron-howard/weather-dashboard/issues)

## Features

- 🌤️ **Current Weather Display** - Real-time weather conditions with detailed metrics
- 📊 **Interactive Charts** - Temperature trends and humidity/pressure visualization using Chart.js
- 🔍 **Location Search** - Search for any city worldwide
- 📍 **Geolocation Support** - Automatic location detection
- 📅 **7-Day Forecast** - Extended weather forecast with beautiful cards
- ⏰ **24-Hour Forecast** - Hourly weather predictions
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Beautiful glassmorphism design with smooth animations

## Technologies Used

- **JavaScript** - Core functionality and API integration
- **Chart.js** - Data visualization and interactive charts
- **CSS3** - Modern styling with glassmorphism effects
- **OpenWeatherMap API** - Weather data source
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Setup Instructions

### 1. Get API Keys

1. **OpenWeatherMap API** (Required)
   - Visit [OpenWeatherMap API](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

2. **WeatherAPI** (Optional - for future enhancements)
   - Visit [WeatherAPI](https://www.weatherapi.com/)
   - Sign up for a free account
   - Generate an API key

### 2. Configure the Application (Secure Method)

**🔐 Recommended: Use the secure configuration system**

1. **Copy the configuration template:**
   ```bash
   cp config.template.js config.js
   ```

2. **Edit your configuration:**
   - Open `config.js`
   - Replace `YOUR_OPENWEATHER_API_KEY` with your actual API key
   - Replace `YOUR_WEATHERAPI_KEY` with your actual API key (optional)
   - Customize other settings as needed

3. **Security Note:** 
   - `config.js` is automatically excluded from version control
   - Never commit your actual API keys to the repository
   - Use `config.template.js` as your starting point

### 3. Run the Application

1. Open `index.html` in your web browser
2. Allow location access when prompted (or search for a city manually)
3. Enjoy your weather dashboard!

### 🔧 Alternative: Quick Setup

If you prefer to edit the configuration directly:
1. Open `config.js`
2. Replace the placeholder API keys with your actual keys
3. Save and refresh your browser

## 📁 Project Structure

```
weather-dashboard/
├── 📄 index.html              # Main HTML file
├── 🎨 styles.css              # CSS styling and animations
├── ⚡ script.js               # JavaScript functionality
├── ⚙️ config.js               # Your configuration (DO NOT COMMIT)
├── 📋 config.template.js      # Configuration template (safe to commit)
├── 🚫 .gitignore             # Excludes sensitive files from version control
├── 📖 env-setup.md           # Detailed environment setup guide
├── 🚀 setup.html             # Quick setup guide
├── 🔧 test-api.html          # API testing tool
├── 🐛 debug-api.html         # Debug tool for API issues
├── 📦 package.json           # Project metadata and dependencies
├── 📄 LICENSE                # MIT License
├── 🤝 CONTRIBUTING.md        # Contribution guidelines
└── 📖 README.md              # This file
```

## 🔐 Security Features

- **API Key Validation**: Automatic validation of API keys with helpful error messages
- **Secure Configuration**: Separate template and actual configuration files
- **Version Control Safety**: Sensitive files automatically excluded from git
- **No Hardcoded Keys**: All API keys stored in configuration files only

## Features Breakdown

### Current Weather Section
- Location display with country
- Current temperature with weather icon
- Weather description
- Detailed metrics: visibility, humidity, wind speed, feels like, pressure, UV index

### Data Visualization
- **Temperature Chart**: 7-day temperature trend line
- **Humidity & Pressure Chart**: Dual-axis bar chart showing humidity and atmospheric pressure

### Forecast Sections
- **7-Day Forecast**: Daily weather cards with high/low temperatures
- **24-Hour Forecast**: Hourly weather predictions in a scrollable container

### Interactive Features
- City search with autocomplete
- Geolocation button for current location
- Responsive design that adapts to all screen sizes
- Smooth animations and transitions
- Error handling with user-friendly messages

## Customization

### Changing Default Location
Edit the `DEFAULT_LOCATION` in `config.js`:
```javascript
DEFAULT_LOCATION: {
    lat: 32.7767, // Your latitude
    lon: -96.7970, // Your longitude
    name: 'Your City, State'
}
```

### Styling Customization
- Modify `styles.css` to change colors, fonts, or layout
- The design uses CSS custom properties for easy theming
- Glassmorphism effects can be adjusted in the `.header` and card styles

### Chart Customization
- Chart colors and styles are defined in the `setupCharts()` method
- Modify the `CHART_CONFIG` in `config.js` for consistent theming

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## API Rate Limits

- **OpenWeatherMap Free Tier**: 1,000 calls/day, 60 calls/minute
- **WeatherAPI Free Tier**: 1 million calls/month

## Troubleshooting

### Common Issues

1. **"Failed to fetch weather data"**
   - Check your API key is correct
   - Verify you have internet connection
   - Check if you've exceeded API rate limits

2. **Location not working**
   - Ensure you've allowed location access in your browser
   - Try searching for a city manually instead

3. **Charts not displaying**
   - Check browser console for JavaScript errors
   - Ensure Chart.js is loaded properly

### Debug Mode
Open browser developer tools (F12) and check the console for detailed error messages.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaron-howard/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Set up your API key**
   ```bash
   cp config.template.js config.js
   # Edit config.js with your OpenWeatherMap API key
   ```

3. **Run locally**
   ```bash
   # Option 1: Using Python
   python -m http.server 8000
   
   # Option 2: Using Node.js
   npm install
   npm run dev
   
   # Option 3: Using npx
   npx serve .
   ```

4. **Open in browser**
   Navigate to `http://localhost:8000` (or the port shown in terminal)

## 🛠️ Development

### Prerequisites
- Modern web browser
- OpenWeatherMap API key (free)
- Python 3.x or Node.js (for local development)

### Available Scripts
- `npm start` - Start Python HTTP server
- `npm run serve` - Start with npx serve
- `npm run dev` - Start with live-server (auto-reload)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Multiple weather data sources
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Weather maps integration
- [ ] Dark/light theme toggle
- [ ] Weather widgets for other cities
- [ ] Export weather data
- [ ] Weather comparison tools
- [ ] PWA support
- [ ] Offline functionality

## 🐛 Troubleshooting

### Common Issues
- **API Key Issues**: Check our [API Setup Guide](env-setup.md)
- **Layout Problems**: Use our [Debug Tool](debug-api.html)
- **Browser Compatibility**: Ensure you're using a modern browser

### Getting Help
- 📖 Check the [Documentation](env-setup.md)
- 🐛 [Report a Bug](https://github.com/aaron-howard/weather-dashboard/issues)
- 💡 [Request a Feature](https://github.com/aaron-howard/weather-dashboard/issues)
- 💬 [Start a Discussion](https://github.com/aaron-howard/weather-dashboard/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Chart.js](https://www.chartjs.org/) for beautiful charts
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=aaron-howard/weather-dashboard&type=Date)](https://star-history.com/#aaron-howard/weather-dashboard&Date)

---

<div align="center">
  <p>Made with ❤️ by Aaron</p>
  <p>
    <a href="https://github.com/aaron-howard/weather-dashboard">GitHub</a> •
    <a href="https://aaron-howard.github.io/weather-dashboard">Live Demo</a> •
     <a href="https://github.com/aaron-howard/weather-dashboard/issues">Issues</a>
  </p>
</div>
