import {useState, useEffect} from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWeatherData } from './service/weather.service';
  

function App(){
  const [cityName, setCityName] = useState();

  const [enabled, setEnabled] = useState(false);

  const {data, isLoading, error, isFetched } = useQuery({
    queryKey: ["weather-data", cityName],
    queryFn: () => getWeatherData(cityName),
    enabled: enabled ,
  });


  useEffect(() => {
    if (isFetched) {
      setEnabled(false);
    }
  }, [isFetched]);

  return(
   <div className="flex justify-center items-center h-[100vh] flex-col gap-5 bg-red-500">
    <div className="bg-white p-10">
      {error && (
        <p classname="text-red-500">
          {error?.response?.data?.message || "Failed to load "}
        </p>
      )}
    <input 
     type="text" 
     placeholder="Enter cityName" 
     id="cityName" 
     onChange={(e) => {
      setCityName(e.target.value);

    }}
    className="border p-4 rounder-md"
    />


    <button
      on onClick={() => {
        setEnabled(true);
    }}
    classNmae="bg-green-600 p-4 ml-4 rounded-md"
    >
      Search Weather
      </button>
      {isLoading && <p>Loading..</p>}
      <div className="flex flex-col gap-4">

      <p>City Name: {data?.name}</p>
      <p>
        Weather details:{" "}
        {data?.weather?.map((item) => (
          <span>{item?.main}</span>
        ))}
      </p>

      <p>Country: {data?.sys?.country}</p>
      <p>Temperature: {data?.main?.temp}</p>
      <p>Humidity: {data?.main?.humidity}</p>
      <p>Wind Speed: {data?.wind?.speed}</p>
      <p>Pressure: {data?.main?.pressure}</p>
   </div>
   </div>
   </div>
  )
}

export default App;




















