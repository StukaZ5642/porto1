// src/data/fasteners.ts

export type Material = {
  id: string;
  category: string; // "Fasteners"
  subCategory: string; // "Bolts"
  productGroup: string; // "BOLT"
  headShape: string; // "HEXAGONAL" atau "CARRIAGE"
  productName: string; // Tampilan UI (misal: "HEXAGONAL BOLT")
  
  specs: {
    baseUom: string;
    measurementSystem: "METRIC" | "IMPERIAL";
    diameterM?: number;
    diameterInch?: string;
    pitch?: number;
    tpi?: number;
    lengthMm?: number;
    lengthInch?: number;
    material: string;
    threadType: string;
    threadDirection: string;
    finishing: string;
    additionalItem: string;
  };
};

export const fastenersData: Material[] = [
  {
    id: "hex-bolt",
    category: "Fasteners",
    subCategory: "Bolts",
    productGroup: "BOLT",
    headShape: "HEXAGONAL",
    productName: "HEXAGONAL BOLT",
    specs: {
      baseUom: "PC",
      measurementSystem: "METRIC",
      diameterM: 12,
      pitch: 1.5,
      lengthMm: 60,
      material: "C/S 8.8",
      threadType: "PARTIALLY THREADED",
      threadDirection: "LEFT DIRECTION",
      finishing: "HOT DIP GALVANIZED",
      additionalItem: "HEXAGONAL NUT",
    },
  },
  {
    id: "carriage-bolt",
    category: "Fasteners",
    subCategory: "Bolts",
    productGroup: "BOLT",
    headShape: "CARRIAGE",
    productName: "CARRIAGE BOLT",
    specs: {
      baseUom: "PC",
      measurementSystem: "IMPERIAL",
      diameterInch: "1/2",
      tpi: 13,
      lengthInch: 4,
      material: "SUS304",
      threadType: "FULLY THREADED",
      threadDirection: "RIGHT DIRECTION",
      finishing: "ZINC PLATED",
      additionalItem: "NOT AVAILABLE",
    },
  },
];