import { useEffect, useState } from "react";

const API_key = "a65a3f613545bf5b9fac5ec4b39fe7bd";

const moc = {
  coord: {
    lon: 35.0225,
    lat: 48.5232,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 14.97,
    feels_like: 13.8,
    temp_min: 14.97,
    temp_max: 14.97,
    pressure: 1013,
    humidity: 49,
    sea_level: 1013,
    grnd_level: 1006,
  },
  visibility: 10000,
  wind: {
    speed: 2.55,
    deg: 83,
    gust: 3.18,
  },
  clouds: {
    all: 100,
  },
  dt: 1680616903,
  sys: {
    country: "UA",
    sunrise: 1680577956,
    sunset: 1680624787,
  },
  timezone: 10800,
  id: 694165,
  name: "Shevchenko",
  cod: 200,
  icon: "https://openweathermap.org/img/wn/04d@2x.png",
};

export const useWeather = (): [Record<string, any> | undefined, boolean] => {
  const [wetherData, setWetherData] = useState<Record<string, any>>(moc);
  const [loading, setLoading] = useState<boolean>(false);

  const [position, setPosition] = useState<any>();

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: any) {
    const crd = pos.coords;

    if (crd) {
      setPosition(crd);
      getWether(crd);
    }
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  async function getWether(position: Record<string, string | number>) {
    // setLoading(true);
    const { latitude, longitude } = position;

    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`)
    //     .then(res => res.json())
    //     .then(data => {

    //         data.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    //         setWetherData(data);

    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     });
  }

  return [wetherData, loading];
};
