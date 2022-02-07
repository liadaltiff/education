export const mapColors = {
  defaultRed: {
    color: "white",
    fillColor: "#e76f51",
    fillOpacity: 0.85,
  },
  selectedRed: {
    color: "white",
    fillColor: "#e76f51",
    fillOpacity: 0.45,
  },
  defaultOrange: {
    color: "white",
    fillColor: "#f4a261",
    fillOpacity: 0.85,
  },
  selectedOrange: {
    color: "white",
    fillColor: "#f4a261",
    fillOpacity: 0.45,
  },
  defaultYellow: {
    color: "white",
    fillColor: "#e9c46a",
    fillOpacity: 0.85,
  },
  selectedYellow: {
    color: "white",
    fillColor: "#e9c46a",
    fillOpacity: 0.45,
  },
};

export const activeColor = (percentage: number) => {
  if (percentage >= 100) {
    return mapColors.defaultRed;
  } else if (percentage < 100 && percentage >= 70) {
    return mapColors.defaultOrange;
  } else if (percentage < 70 && percentage >= 0) {
    return mapColors.defaultYellow;
  }
};

export const activeSelectedColor = (percentage: number) => {
  if (percentage >= 100) {
    return mapColors.selectedRed;
  } else if (percentage < 100 && percentage >= 70) {
    return mapColors.selectedOrange;
  } else if (percentage < 70 && percentage >= 0) {
    return mapColors.selectedYellow;
  }
};
