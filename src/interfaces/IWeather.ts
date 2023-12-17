export interface Weather {
  location: Location;
  current: Current;
}

interface Location {
  name: string;
  region: string;
  country: string;
  localTime: string;
}

interface Current {
  lastUpdated: string;
  temp: number;
  isDay: number;
  condition: Condition;
}

interface Condition {
  text: string;
  icon: string;
}

export function jsonToWeather(response: any): Weather {
  return {
    location: {
      name: response.location.name,
      region: response.location.region,
      country: response.location.country,
      localTime: response.location.localtime,
    },
    current: {
      lastUpdated: response.current.last_updated,
      isDay: response.current.is_day,
      temp: response.current.temp_c,
      condition: {
        text: response.current.condition.text,
        icon: response.current.condition.icon,
      },
    },
  };
}
