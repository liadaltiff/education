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
import { useMemo, useState } from "react";
import React from "react";

const optionsLevels = ["1", "2", "3", "4"];

const Leaflet = () => {
  //////////////////////////////////////////////////////////////////////////
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  //////////////////////////////////////////////////////////////////////////
  const purpleOptions = {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.5,
  };

  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState();
  const multyLine = useMemo(
    () =>
      data.features.map((neighbourhood) => {
        return neighbourhood.geometry.coordinates[0].map((cordinates) => {
          return [cordinates[1], cordinates[0]];
        });
      }) as LatLngExpression[][],
    []
  );

  return (
    <div>
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

        {/* {data.features.map((neighbourhood) => {
          return neighbourhood.properties.schools.map((school, index) => {
            return (
              <Marker
                position={[school.latitude, school.longitude]}
                key={index}
              />
            );
          });
        })} */}
      </MapContainer>
      <button className={classes.button}>מצבים</button>
    </div>
  );
};

export default Leaflet;
