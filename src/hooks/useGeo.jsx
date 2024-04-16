import { useState } from "react";

export const useGeo = () => {
  const [geo, setGeo] = useState({
    latitude: null,
    longitude: null,
  });

  const location = window.navigator && window.navigator.geolocation;

  if (location) {
    location.getCurrentPosition(
      (position) => {
        const lat = localStorage.getItem("latitude");
        const lon = localStorage.getItem("longitude");
        const { latitude, longitude } = position.coords;

        if (latitude.toString() === lat && longitude.toString() === lon) return;

        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
        setGeo({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setGeo({ latitude: null, longitude: null });
      }
    );
  }

  return {
    lat: geo.latitude,
    lon: geo.longitude,
  };
};
