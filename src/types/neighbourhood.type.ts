export interface Polygon {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface School {
  id: number;
  type: string;
  name: string;
  address: string;
  total_students: number;
  shelter_area: number;
  latitude: number;
  longitude: number;
  neighborhood: string;
}

export interface Geometry {
  type: string;
  coordinates: number[][][]; // [[[longitude, latitude], [longitude, latitude], ...], [[longitude, latitude], [longitude, latitude], ...]]
}

export interface Properties {
  STATUS: string;
  oidshchuna: number;
  msshchuna: number;
  shemshchun: string;
  UniqueId: string;
  schools: School[]; // array of schools
}
