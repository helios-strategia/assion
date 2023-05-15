import React, { FC, useEffect } from "react";
import { MapProps } from ".";
//import "leaflet/dist/leaflet.css";
import Map, { NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const PlanMap: FC<MapProps> = (props) => {
  const pos: any = [48.52292632999998, 35.02279662999999];
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
        //mapLib={maplibregl}
        initialViewState={{
          longitude: 48.52292632999998,
          latitude: 35.02279662999999,
          zoom: 14,
        }}
        style={{ width: "100%", height: 600 }}
        mapStyle={
          "https://api.maptiler.com/maps/basic-v2/style.json?key=N3YKm8X0dCiguFWUx562#{z}/{x}/{y}"
        }
      >
        <NavigationControl position="top-left" />
      </Map> */}
      <iframe
        width="100%"
        height="100%"
        src="https://api.maptiler.com/maps/streets-v2/?key=N3YKm8X0dCiguFWUx562#12/48.52292632999998/35.02279662999999"
      ></iframe>
    </div>
  );
};
