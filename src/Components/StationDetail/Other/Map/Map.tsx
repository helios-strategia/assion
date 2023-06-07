import React, { FC, useEffect } from "react";
import { MapProps } from ".";
//import "leaflet/dist/leaflet.css";
import Map, { NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const PlanMap: FC<MapProps> = ({
  lat = 48.523104,
  lng = 35.0225365,
}) => {
  return (
    <div
      style={{
        borderRadius: "16px",
        height: "400px",
        transition: "height 500ms ease",
        overflow: "hidden",
        width: "100%",
        margin: "20px 0",
      }}
      id="map"
    >
      {/* <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        style={{ width: "100%", height: 600 }}
        mapStyle={
          "https://api.maptiler.com/maps/hybrid/style.json?key=N3YKm8X0dCiguFWUx562"
        }
      >
        <NavigationControl position="top-left" />
      </Map> */}
      <iframe
        width="100%"
        height="100%"
        src={`https://api.maptiler.com/maps/hybrid/?key=LpIQkgKnqvp3HUGYH70R#15/${lat}/${lng}`}
      ></iframe>
    </div>
  );
};
