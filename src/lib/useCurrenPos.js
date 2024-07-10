import { useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = 35.2427772019578;
  const defaultLon = 129.092095292484;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = ({ coords: { latitude, longitude } }) => {
    // console.log(latitude, longitude);

    setLat(latitude);
    setLon(longitude);
  };

  navigator.geolocation.getCurrentPosition(location);

  return {
    lat,
    lon,
  };
};
