import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./leaflet.module.scss";

const Leaflet = () => {
  return (
    <MapContainer
      center={[50, 50]}
      zoom={13}
      scrollWheelZoom={true}
      className={classes.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[32, 35]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Leaflet;
