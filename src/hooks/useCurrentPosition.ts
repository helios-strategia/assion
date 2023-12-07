import { useEffect, useState } from "react";

export const useCurrentPosition = (): [any, boolean] => {
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
    }
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return [position, loading];
};
