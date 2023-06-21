import { useEffect, useState } from "react";

const API_key = "a65a3f613545bf5b9fac5ec4b39fe7bd";
type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  icon: string;
};

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

export const useWeather = (): {
  weatherData: Weather | undefined;
  fetchWeather: (latitude: number | string, longitude: number | string) => void;
  loading: boolean;
} => {
  const [weatherData, setWetherData] = useState<Weather>();
  const [loading, setLoading] = useState<boolean>(false);

  // const [position, setPosition] = useState<any>();

  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // function success(pos: any) {
  //   const crd = pos.coords;

  //   if (crd) {
  //     setPosition(crd);
  //     //getWether(crd);
  //   }
  // }

  // function error(err: any) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // }, []);

  async function fetchWeather(
    latitude: number | string,
    longitude: number | string
  ) {
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        data.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        setWetherData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { weatherData, fetchWeather, loading };
};
