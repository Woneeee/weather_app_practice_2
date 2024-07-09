import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "edac8cc8da810053eb34612a3dcbfe05",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = 35.2427772019578;
  const lon = 129.092095292484;

  return instance.get(`weather?lat=${lat}&lon=${lon}`).then(({ data }) => data);
};
