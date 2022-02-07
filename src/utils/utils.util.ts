import { Polygon, School } from "../types/neighbourhood.type";

export const calculatePercentage = (calcPerc: any, selected: Polygon) => {
  let amountOfShelterArea = 0;
  let amountOfStudents = 0;

  selected?.properties.schools.forEach((school) => {
    amountOfShelterArea += school.shelter_area;
    amountOfStudents += school.total_students;
  });
  if (amountOfStudents === 0) {
    return 0;
  }
  if (amountOfShelterArea === 0 && calcPerc !== 0) {
    return 100;
  } else if (amountOfShelterArea === 0 && calcPerc === 0) {
    return 0;
  }
  return parseInt(
    ((amountOfStudents / (amountOfShelterArea / calcPerc)) * 100).toFixed(0)
  );
};

export const placeLeft = (places: number, selectedInstitute: School) => {
  if (
    (places && selectedInstitute.total_students) ||
    (places === 0 && selectedInstitute.total_students)
  ) {
    return places - selectedInstitute.total_students;
  } else {
    return 0;
  }
};
