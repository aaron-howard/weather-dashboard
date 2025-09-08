// Weather Dashboard JavaScript
class WeatherDashboard {
    constructor() {
        // Load configuration with fallback
        this.config = window.CONFIG || this.getDefaultConfig();
        
        // Validate API keys
        this.validateApiKeys();
        
        this.apiKeys = {
            openWeather: this.config.OPENWEATHER_API_KEY,
            weatherApi: this.config.WEATHERAPI_KEY
        };
        
        this.currentLocation = null;
        this.currentWeather = null;
        this.forecastData = null;
        this.hourlyData = null;
        
        this.temperatureChart = null;
        this.humidityChart = null;
        
        // Temperature unit management
        this.tempUnit = this.loadTempUnit(); // 'C' or 'F'
        this.tempSymbol = this.tempUnit === 'F' ? '°F' : '°C';
        
        this.init();
    }

    getDefaultConfig() {
        return {
            OPENWEATHER_API_KEY: 'YOUR_OPENWEATHER_API_KEY',
            WEATHERAPI_KEY: 'YOUR_WEATHERAPI_KEY',
            DEFAULT_LOCATION: {
                lat: 32.7767,
                lon: -96.7970,
                name: 'Dallas, TX'
            },
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
            UPDATE_INTERVALS: {
                weather: 300000,
                time: 60000,
                charts: 600000
            },
            API_TIMEOUT: 10000,
            API_RETRY_ATTEMPTS: 3,
            DEFAULT_THEME: 'light',
            ANIMATION_ENABLED: true,
            CHART_ANIMATION_DURATION: 1000
        };
    }

    validateApiKeys() {
        const openWeatherKey = this.config.OPENWEATHER_API_KEY;
        
        if (!openWeatherKey || openWeatherKey === 'YOUR_OPENWEATHER_API_KEY') {
            this.showError(
                'API Key Required: This demo requires an OpenWeatherMap API key to function. ' +
                'For the live demo, please visit the GitHub repository to set up your own instance. ' +
                'Get your free API key at https://openweathermap.org/api'
            );
            return false;
        }
        
        if (openWeatherKey.length < 20) {
            this.showError('Invalid API Key: The OpenWeatherMap API key appears to be too short.');
            return false;
        }
        
        // Test the API key with a simple request
        this.testApiKey(openWeatherKey);
        
        return true;
    }

    async testApiKey(apiKey) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
            );
            
            if (!response.ok) {
                if (response.status === 401) {
                    this.showError(
                        'API Key Invalid: Your OpenWeatherMap API key is not valid or not activated. ' +
                        'Please check your key in config.js and ensure it\'s activated in your OpenWeatherMap account.'
                    );
                } else if (response.status === 429) {
                    this.showError(
                        'API Rate Limit Exceeded: You\'ve exceeded your API call limit. ' +
                        'Please wait a moment and try again.'
                    );
                } else {
                    this.showError(
                        `API Error: ${response.status} ${response.statusText}. ` +
                        'Please check your OpenWeatherMap account and API key.'
                    );
                }
                return false;
            }
            
            console.log('API Key validation successful');
            return true;
        } catch (error) {
            console.error('API Key test failed:', error);
            this.showError(
                'Network Error: Unable to connect to OpenWeatherMap API. ' +
                'Please check your internet connection and try again.'
            );
            return false;
        }
    }

    init() {
        this.setupEventListeners();
        this.setupCharts();
        this.updateTempToggle();
        this.getCurrentLocation();
        this.updateDateTime();
        
        // Update time every minute
        setInterval(() => this.updateDateTime(), 60000);
    }

    setupEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const locationBtn = document.getElementById('locationBtn');
        const locationInput = document.getElementById('locationInput');
        const closeError = document.getElementById('closeError');
        const tempToggle = document.getElementById('tempToggle');

        searchBtn.addEventListener('click', () => this.searchLocation());
        locationBtn.addEventListener('click', () => this.getCurrentLocation());
        closeError.addEventListener('click', () => this.hideError());
        tempToggle.addEventListener('click', () => this.toggleTempUnit());
        
        locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchLocation();
            }
        });
    }

    setupCharts() {
        // Temperature Chart
        const tempCtx = document.getElementById('temperatureChart').getContext('2d');
        this.temperatureChart = new Chart(tempCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Temperature',
                    data: [],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        });

        // Humidity Chart
        const humidityCtx = document.getElementById('humidityChart').getContext('2d');
        this.humidityChart = new Chart(humidityCtx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'Humidity (%)',
                    data: [],
                    backgroundColor: 'rgba(52, 152, 219, 0.8)',
                    borderColor: '#3498db',
                    borderWidth: 1
                }, {
                    label: 'Pressure (hPa)',
                    data: [],
                    backgroundColor: 'rgba(155, 89, 182, 0.8)',
                    borderColor: '#9b59b6',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        });
    }

    async getCurrentLocation() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by this browser.');
            return;
        }

        this.showLoading();

        try {
            const position = await this.getCurrentPosition();
            const { latitude, longitude } = position.coords;
            this.currentLocation = { lat: latitude, lon: longitude };
            await this.fetchWeatherData();
        } catch (error) {
            console.error('Error getting location:', error);
            this.showError('Unable to get your location. Please search for a city manually.');
        }
    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            });
        });
    }

    async searchLocation() {
        const locationInput = document.getElementById('locationInput');
        const query = locationInput.value.trim();

        if (!query) {
            this.showError('Please enter a city name.');
            return;
        }

        this.showLoading();

        try {
            // First, get coordinates for the city
            const coords = await this.getCoordinatesForCity(query);
            this.currentLocation = coords;
            await this.fetchWeatherData();
        } catch (error) {
            console.error('Error searching location:', error);
            this.showError('City not found. Please try a different city name.');
        }
    }

    async getCoordinatesForCity(cityName) {
        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${this.apiKeys.openWeather}`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch coordinates');
        }
        
        const data = await response.json();
        
        if (data.length === 0) {
            throw new Error('City not found');
        }
        
        return {
            lat: data[0].lat,
            lon: data[0].lon,
            name: data[0].name,
            country: data[0].country
        };
    }

    async fetchWeatherData() {
        try {
            // Fetch current weather and forecast
            const [currentWeather, forecast] = await Promise.all([
                this.fetchCurrentWeather(),
                this.fetchForecast()
            ]);

            this.currentWeather = currentWeather;
            this.forecastData = forecast;
            this.hourlyData = forecast.hourly || [];

            this.updateCurrentWeather();
            this.updateForecast();
            this.updateHourlyForecast();
            this.updateCharts();

            this.hideLoading();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.showError('Failed to fetch weather data. Please try again.');
            this.hideLoading();
        }
    }

    async fetchCurrentWeather() {
        const { lat, lon } = this.currentLocation;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKeys.openWeather}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch current weather');
        }
        
        return await response.json();
    }

    async fetchForecast() {
        const { lat, lon } = this.currentLocation;
        
        // Use the 5-day/3-hour forecast API (free tier compatible)
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKeys.openWeather}&units=metric`
        );
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Forecast API Error:', response.status, errorText);
            throw new Error(`Failed to fetch forecast: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Debug: Log the API response structure
        console.log('Forecast API Response:', data);
        console.log('First forecast item:', data.list?.[0]);
        
        // Convert 5-day/3-hour forecast to daily format for compatibility
        return this.convertForecastToDaily(data);
    }

    convertForecastToDaily(forecastData) {
        // Group forecasts by date and create daily summaries
        const dailyForecasts = {};
        
        forecastData.list.forEach(item => {
            const date = new Date(item.dt * 1000).toDateString();
            
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = {
                    dt: item.dt,
                    temp: { 
                        min: item.main.temp_min || item.main.temp, 
                        max: item.main.temp_max || item.main.temp,
                        day: item.main.temp
                    },
                    weather: [item.weather[0]],
                    humidity: item.main.humidity,
                    pressure: item.main.pressure,
                    wind_speed: item.wind.speed,
                    hourly: []
                };
            } else {
                // Update min/max temperatures
                const currentMin = item.main.temp_min || item.main.temp;
                const currentMax = item.main.temp_max || item.main.temp;
                
                dailyForecasts[date].temp.min = Math.min(dailyForecasts[date].temp.min, currentMin);
                dailyForecasts[date].temp.max = Math.max(dailyForecasts[date].temp.max, currentMax);
                dailyForecasts[date].hourly.push(item);
            }
        });
        
        return {
            daily: Object.values(dailyForecasts).slice(0, 7),
            hourly: forecastData.list.slice(0, 24)
        };
    }

    // Temperature conversion functions
    celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    convertTemp(temp, fromUnit = 'C', toUnit = null) {
        if (toUnit === null) toUnit = this.tempUnit;
        if (fromUnit === toUnit) return temp;
        
        if (fromUnit === 'C' && toUnit === 'F') {
            return this.celsiusToFahrenheit(temp);
        } else if (fromUnit === 'F' && toUnit === 'C') {
            return this.fahrenheitToCelsius(temp);
        }
        return temp;
    }

    formatTemp(temp, unit = null) {
        if (unit === null) unit = this.tempUnit;
        const convertedTemp = this.convertTemp(temp, 'C', unit);
        return Math.round(convertedTemp);
    }

    // Temperature unit management
    loadTempUnit() {
        const saved = localStorage.getItem('weatherDashboard_tempUnit');
        return saved || 'C';
    }

    saveTempUnit(unit) {
        localStorage.setItem('weatherDashboard_tempUnit', unit);
    }

    toggleTempUnit() {
        this.tempUnit = this.tempUnit === 'C' ? 'F' : 'C';
        this.tempSymbol = this.tempUnit === 'F' ? '°F' : '°C';
        this.saveTempUnit(this.tempUnit);
        this.updateTempToggle();
        this.updateAllTemperatures();
    }

    updateTempToggle() {
        const tempUnitSpan = document.getElementById('tempUnit');
        const tempToggleBtn = document.getElementById('tempToggle');
        
        tempUnitSpan.textContent = this.tempSymbol;
        tempToggleBtn.classList.toggle('active', this.tempUnit === 'F');
    }

    updateAllTemperatures() {
        // Update current weather temperatures
        this.updateCurrentWeather();
        
        // Update forecast temperatures
        this.updateForecast();
        
        // Update hourly temperatures
        this.updateHourlyForecast();
        
        // Update charts
        this.updateCharts();
    }

    updateCurrentWeather() {
        if (!this.currentWeather) return;

        const weather = this.currentWeather;
        
        // Update location
        document.getElementById('currentLocation').textContent = 
            `${weather.name}, ${weather.sys.country}`;
        
        // Update temperature
        document.getElementById('currentTemp').textContent = this.formatTemp(weather.main.temp);
        document.getElementById('currentTempUnit').textContent = this.tempSymbol;
        
        // Update weather description and icon
        const weatherDesc = document.getElementById('weatherDesc');
        const weatherIcon = document.getElementById('weatherIcon');
        
        weatherDesc.textContent = weather.weather[0].description;
        weatherIcon.className = this.getWeatherIcon(weather.weather[0].icon);
        
        // Update weather details
        document.getElementById('visibility').textContent = 
            `${(weather.visibility / 1000).toFixed(1)} km`;
        document.getElementById('humidity').textContent = `${weather.main.humidity}%`;
        document.getElementById('windSpeed').textContent = 
            `${Math.round(weather.wind.speed * 3.6)} km/h`;
        document.getElementById('feelsLike').textContent = 
            `${this.formatTemp(weather.main.feels_like)}${this.tempSymbol}`;
        document.getElementById('pressure').textContent = `${weather.main.pressure} hPa`;
        document.getElementById('uvIndex').textContent = 
            this.forecastData?.current?.uvi?.toFixed(1) || '--';
    }

    updateForecast() {
        if (!this.forecastData?.daily) return;

        const forecastContainer = document.getElementById('forecastContainer');
        forecastContainer.innerHTML = '';

        this.forecastData.daily.slice(0, 7).forEach((day, index) => {
            const forecastCard = document.createElement('div');
            forecastCard.className = 'forecast-card fade-in';
            forecastCard.style.animationDelay = `${index * 0.1}s`;

            const date = new Date(day.dt * 1000);
            const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });

            forecastCard.innerHTML = `
                <div class="forecast-day">${dayName}</div>
                <div class="forecast-icon">${this.getWeatherIcon(day.weather[0].icon)}</div>
                <div class="forecast-temp">
                    <span class="forecast-high">${this.formatTemp(day.temp.max)}°</span>
                    <span class="forecast-low">${this.formatTemp(day.temp.min)}°</span>
                </div>
                <div class="forecast-desc">${day.weather[0].description}</div>
            `;

            forecastContainer.appendChild(forecastCard);
        });
    }

    updateHourlyForecast() {
        if (!this.hourlyData || !Array.isArray(this.hourlyData)) {
            console.warn('Hourly data not available or invalid format');
            this.showHourlyError('Hourly forecast data not available');
            return;
        }

        const hourlyContainer = document.getElementById('hourlyContainer');
        hourlyContainer.innerHTML = '';

        let validHours = 0;

        this.hourlyData.slice(0, 24).forEach((hour, index) => {
            // Validate data structure
            if (!hour || !hour.dt || !hour.main || !hour.weather || !hour.weather[0]) {
                console.warn('Invalid hourly data structure at index:', index, hour);
                return;
            }

            const hourlyCard = document.createElement('div');
            hourlyCard.className = 'hourly-card slide-in';
            hourlyCard.style.animationDelay = `${index * 0.05}s`;

            const date = new Date(hour.dt * 1000);
            const time = date.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                hour12: true 
            });

            // Get temperature from the correct location in the data structure
            const temperature = hour.main.temp;
            const weatherIcon = hour.weather[0].icon;
            const weatherDesc = hour.weather[0].description;

            // Validate temperature value
            if (isNaN(temperature) || temperature === null || temperature === undefined) {
                console.warn('Invalid temperature value at index:', index, temperature);
                return;
            }

            hourlyCard.innerHTML = `
                <div class="hourly-time">${time}</div>
                <div class="hourly-icon">${this.getWeatherIcon(weatherIcon)}</div>
                <div class="hourly-temp">${this.formatTemp(temperature)}°</div>
                <div class="hourly-desc">${weatherDesc}</div>
            `;

            hourlyContainer.appendChild(hourlyCard);
            validHours++;
        });

        // If no valid hours were processed, show an error message
        if (validHours === 0) {
            this.showHourlyError('Unable to load hourly forecast data');
        }
    }

    showHourlyError(message) {
        const hourlyContainer = document.getElementById('hourlyContainer');
        hourlyContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #7f8c8d;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 15px; color: #f39c12;"></i>
                <p style="font-size: 1.1rem; margin: 0;">${message}</p>
                <p style="font-size: 0.9rem; margin: 10px 0 0 0; opacity: 0.7;">This may be due to API limitations or data format issues.</p>
            </div>
        `;
    }

    updateCharts() {
        if (!this.forecastData?.daily) return;

        // Update temperature chart
        const dailyData = this.forecastData.daily.slice(0, 7);
        const labels = dailyData.map((day, index) => {
            const date = new Date(day.dt * 1000);
            return index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
        });
        
        const temperatures = dailyData.map(day => this.formatTemp(day.temp.day));
        const humidities = dailyData.map(day => day.humidity);
        const pressures = dailyData.map(day => day.pressure);

        this.temperatureChart.data.labels = labels;
        this.temperatureChart.data.datasets[0].data = temperatures;
        this.temperatureChart.data.datasets[0].label = `Temperature (${this.tempSymbol})`;
        this.temperatureChart.update();

        this.humidityChart.data.labels = labels;
        this.humidityChart.data.datasets[0].data = humidities;
        this.humidityChart.data.datasets[1].data = pressures;
        this.humidityChart.update();
    }

    getWeatherIcon(iconCode) {
        const iconMap = {
            '01d': 'fas fa-sun',
            '01n': 'fas fa-moon',
            '02d': 'fas fa-cloud-sun',
            '02n': 'fas fa-cloud-moon',
            '03d': 'fas fa-cloud',
            '03n': 'fas fa-cloud',
            '04d': 'fas fa-cloud',
            '04n': 'fas fa-cloud',
            '09d': 'fas fa-cloud-rain',
            '09n': 'fas fa-cloud-rain',
            '10d': 'fas fa-cloud-sun-rain',
            '10n': 'fas fa-cloud-moon-rain',
            '11d': 'fas fa-bolt',
            '11n': 'fas fa-bolt',
            '13d': 'fas fa-snowflake',
            '13n': 'fas fa-snowflake',
            '50d': 'fas fa-smog',
            '50n': 'fas fa-smog'
        };
        
        return `<i class="${iconMap[iconCode] || 'fas fa-sun'}"></i>`;
    }

    updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
    }

    showLoading() {
        document.getElementById('loadingOverlay').classList.add('active');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }

    showError(message) {
        document.getElementById('errorMessage').textContent = message;
        document.getElementById('errorModal').classList.add('active');
        this.hideLoading();
    }

    hideError() {
        document.getElementById('errorModal').classList.remove('active');
    }
}

// Initialize the weather dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WeatherDashboard();
});

// Add some utility functions for better user experience
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const errorModal = document.getElementById('errorModal');
            if (errorModal.classList.contains('active')) {
                errorModal.classList.remove('active');
            }
        }
    });
    
    // Add loading animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    document.querySelectorAll('.forecast-card, .hourly-card, .detail-item').forEach(card => {
        observer.observe(card);
    });
});
