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

// export const savePlanAction = (
//   typeOfAction: string,

//   sender: string,
//   senderType: string,

//   receiver: string,
//   receiverType: string,

//   amount: number
// ) => {
//   const { currentPlan, setCurrentPlan } = useContext(PlanContext);

//   let foundLog = false;
//   let actions: Action[] = JSON.parse(
//     localStorage.getItem("movments-log") ?? "[]"
//   );

//   let newAction: Action = {
//     typeOfAction: typeOfAction,

//     sender: sender,
//     senderType: senderType,

//     receiver: receiver,
//     receiverType: receiverType,

//     amount: amount,
//   };

//   actions.map((action) => {
//     if (
//       action.sender === newAction.sender &&
//       action.typeOfAction === "SENDHOME" &&
//       newAction.typeOfAction === "SENDHOME"
//     ) {
//       foundLog = true;
//     }
//   });
//   if (!foundLog && currentPlan) {
//     actions.push(newAction);
//     let updateCurrentPlan: Plan = { name: currentPlan.name, actions: actions };
//   }
//   localStorage.setItem("movments-log", JSON.stringify(actions));
// };
