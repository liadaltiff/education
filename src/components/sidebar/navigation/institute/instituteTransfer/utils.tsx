import { School } from "../../../../../types/neighbourhood.type";
import data from "../../../../../../neighbourhoods.json";

export const distance = (selectedInstitute: School) => {
  const schools = data.features.map((hood) => hood.properties.schools).flat();
  const instituteDistance = schools.map((school) => ({
    schoolId: school.id,
    schoolName: school.name,
    calcDistance: distanceCalc(
      school.latitude,
      school.longitude,
      selectedInstitute.latitude,
      selectedInstitute.longitude
    ),
  }));
  return sortByDistance(
    instituteDistance.map((school) => [
      school.schoolId,
      school.schoolName,
      school.calcDistance,
    ])
  );
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

const sortByDistance = (institutesDistance: [number, string, number][]) => {
  return institutesDistance.sort((a, b) => a[2] - b[2]);
};
