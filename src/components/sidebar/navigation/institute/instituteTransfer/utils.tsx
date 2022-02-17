import { Polygon, School } from "../../../../../types/neighbourhood.type";
import { useContext } from "react";
import { PlanContext } from "../../../../../contexts/PlanContext";
import { Action, Plan } from "../../../../../types/plan.type";

export const distance = (hoodsData: Polygon[], selectedInstitute: School) => {
  let institutesDistance: [number, string, number, string][] = [];
  const schools = hoodsData.map((hood) => hood.properties.schools).flat();
  schools.forEach((school) =>
    institutesDistance.push([
      school.id,
      school.name,
      distanceCalc(
        school.latitude,
        school.longitude,
        selectedInstitute.latitude,
        selectedInstitute.longitude
      ),
      school.type,
    ])
  );
  return sortByDistance(institutesDistance);
};

const distanceCalc = (
  latitude: any,
  longitude: any,
  selectedInstituteLatitude: any,
  selectedInstituteLongitude: any
) => {
  const distanceKM =
    Math.sqrt(
      Math.pow(selectedInstituteLatitude - latitude, 2) +
        Math.pow(selectedInstituteLongitude - longitude, 2)
    ) * 111;
  return Number(distanceKM.toFixed(2));
};

const sortByDistance = (
  institutesDistance: [number, string, number, string][]
) => {
  return institutesDistance.sort((a, b) => a[2] - b[2]);
};
