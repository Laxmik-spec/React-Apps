const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=2de4a26f34334a6587251345232709';

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
};


export const getWeatherDataForLocation = async (lat,lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
};
