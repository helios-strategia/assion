type ListItem = {
  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number
  },
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  },
  dt: number,
  wind: {
    speed: number,
    deg: number
  },
  sys: {
    country: string
  },
  rain: any,
  snow: any,
  clouds: {
    all: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ]
}


export type WeatherResponse = {
  message: string,
  cod: string,
  count: number,
  list: ListItem[]
}