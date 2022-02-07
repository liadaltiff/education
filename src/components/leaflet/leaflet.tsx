import {
  MapContainer,
  TileLayer,
  Polyline,
  Polygon,
  Tooltip,
  Marker,
} from "react-leaflet";
import classes from "./leaflet.module.scss";
import data from "../../../neighbourhoods.json";
import { Icon, latLngBounds, LatLngExpression, map } from "leaflet";
import { useCallback, useContext, useMemo, useState } from "react";
import { calculatePercentage } from "../../utils/utils.util";
import { NeighbourhoodContext } from "../../contexts/neighbourhoodContext";
import {
  Polygon as neighbourhood,
  School,
} from "../../types/neighbourhood.type";
import { CurrentTabContext } from "../../contexts/currentTabContext";
import { SelectedInstituteContext } from "../../contexts/instituteContext";
import TransferedStudents from "../transferedStudents/TransferedStudents";
import ChangeLevel from "../changeLevel/ChangeLevel";
import { LevelContext } from "../../contexts/levelContext";
import { activeColor, activeSelectedColor } from "./leaflet.utils";

const Leaflet = () => {
  const [selectedZoom, setSelectedZoom] = useState(13);

  const { selected, setSelected } = useContext(NeighbourhoodContext);
  const { setSelectedInstitute } = useContext(SelectedInstituteContext);
  const { setCurrentTab } = useContext(CurrentTabContext);
  const { space } = useContext(LevelContext);

  const polygonHandler = (neighbourhood: neighbourhood) => {
    setSelected(neighbourhood);
    setCurrentTab("מוסדות");
    setSelectedZoom(6);
  };

  const instituteHandler = (school: School) => {
    setSelectedInstitute(school);
    setCurrentTab("מוסד");
  };

  const changeCordinates = (coords: [number, number]) => {
    return [coords[1], coords[0]];
  };

  const hoods = useMemo(() => {
    return data.features.map((hoodss) => ({
      ...hoodss,
      geometry: {
        coordinates: hoodss.geometry.coordinates
          .flat()
          .map((coords) => changeCordinates(coords as [number, number])),
      },
    }));
  }, []);

  const colorPolygon = (selected: boolean, percentage: number) => {
    if (selected) {
      return activeSelectedColor(percentage);
    } else {
      return activeColor(percentage);
    }
  };

  return (
    <div className={classes.map}>
      <MapContainer
        center={[32.09, 34.8]}
        zoom={selectedZoom}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
        className={classes.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hoods.map((hood, key) => {
          if (hood.properties.UniqueId === selected?.properties.UniqueId) {
            return (
              <>
                <Polygon
                  key={key}
                  positions={hood.geometry.coordinates as LatLngExpression[]}
                  pathOptions={colorPolygon(
                    true,
                    calculatePercentage(space, hood)
                  )}
                  eventHandlers={{
                    click: () => polygonHandler(hood),
                  }}
                />
                {hood.properties.schools.map((school, index) => {
                  return (
                    <Marker
                      icon={
                        new Icon({
                          iconUrl: "../../../assets/school-image.png",
                          iconSize: [30, 30],
                        })
                      }
                      position={[school.latitude, school.longitude]}
                      key={index}
                      eventHandlers={{
                        click: () => instituteHandler(school),
                      }}
                    >
                      <Tooltip direction="center">{school.name}</Tooltip>
                    </Marker>
                  );
                })}
              </>
            );
          }
          return (
            <Polygon
              key={key}
              positions={hood.geometry.coordinates as LatLngExpression[]}
              pathOptions={colorPolygon(
                false,
                calculatePercentage(space, hood)
              )}
              eventHandlers={{
                click: () => polygonHandler(hood),
              }}
            />
          );
        })}
      </MapContainer>
      <TransferedStudents />
      <ChangeLevel />
    </div>
  );
};

export default Leaflet;
