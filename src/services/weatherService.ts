export function getWeather() {
  console.log(process.env.API_KEY);
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Kyiv&aqi=yes&lang=uk`
  );
}
