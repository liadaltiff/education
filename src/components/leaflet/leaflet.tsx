import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./leaflet.module.scss";
import neighbourhoods from "../../../neighbourhoods.json";
import useSwr from "swr";

const Leaflet = () => {
  return (
    <MapContainer
      center={[32.0144, 34.79635]}
      zoom={13}
      scrollWheelZoom={true}
      className={classes.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[32.0144, 34.79635]}>
        <Popup>
          A Popup <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Leaflet;
