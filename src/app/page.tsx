/* eslint-disable @next/next/no-img-element */
"use client";
import { getWeather } from "@/services/weatherService";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Weather, jsonToWeather } from "@/interfaces/IWeather";

export default function Home() {
  const [weather, setWeather] = useState<Weather>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log(weather?.current.condition.text);

  useEffect(() => {
    getWeather()
      .then((response) => response.json())
      .then((response) => {
        setWeather(jsonToWeather(response));
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      {isLoading ? (
        <div className="text-white">Loading</div>
      ) : (
        <div className="h-3/6 w-2/6 bg-white rounded-3xl flex justify-center items-center flex-col text-black">
          <div>
            <p className="text-5xl pb-10">{`${weather!.location.name}, ${
              weather!.location.country
            }`}</p>
          </div>
          <div className="flex items-center ">
            <img
              src={weather!.current.condition.icon}
              alt=""
              className="h-48 w-48 pr-5"
            />
            <p className="text-9xl">{weather?.current.temp}</p>
          </div>
          <p className="text-4xl my-10">{weather!.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}
