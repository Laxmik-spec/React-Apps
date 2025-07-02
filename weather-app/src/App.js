import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useEffect } from 'react';
import { useWeather } from './context/Weather'

function App() {

  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []); // Fetch data when the component mounts

  console.log(weather);
  return (
    <div className="App">
        <h1>Weather App</h1>
        <Input/>
        <Button onClick={weather.fetchData} value="Search"/>
        <Card/>
    </div>
  );
}

export default App;
