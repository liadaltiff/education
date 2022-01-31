import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Polygon,
} from "react-leaflet";
import classes from "./leaflet.module.scss";
import data from "../../../neighbourhoods.json";
import { LatLngExpression } from "leaflet";
import { useMemo } from "react";

const Leaflet = () => {
  const purpleOptions = {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.5,
  };
  const multyLine = useMemo(
    () =>
      data.features.map((neighbourhood) => {
        return neighbourhood.geometry.coordinates[0].map((cordinates) => {
          return [cordinates[1], cordinates[0]];
        });
      }) as LatLngExpression[][],
    []
    //update
  );

  return (
    <MapContainer
      center={[32.08, 34.778]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      className={classes.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polygon pathOptions={purpleOptions} positions={multyLine}></Polygon>
      {data.features.map((neighbourhood) => {
        return (
          <Polyline
            pathOptions={purpleOptions}
            positions={
              neighbourhood.geometry.coordinates[0].map((cordinates) => {
                return [cordinates[1], cordinates[0]];
              }) as LatLngExpression[]
            }
          />
        );
      })}
      {data.features.map((neighbourhood) => {
        return neighbourhood.properties.schools.map((school) => {
          console.log(school);
          return <Marker position={[school.latitude, school.longitude]} />;
        });
      })}
    </MapContainer>
  );
};

export default Leaflet;
