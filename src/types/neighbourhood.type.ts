export interface Polygon {
  type: string;
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
  coordinates: number[][][] | number[][] | number[];
}

export interface Properties {
  STATUS: string;
  oidshchuna: number;
  msshchuna: number;
  shemshchun: string;
  UniqueId: string;
  schools: School[];
}

export interface HoodProperties {
  STATUS: string;
  oidshchuna: number;
  msshchuna: number;
  dateimport: string;
  ShapeArea: number;
  shemshchun: string;
  UniqueId: string;
  schools: School[];
}

export interface Hood {
  type: string;
  properties: HoodProperties;
  geometry: Geometry;
}
