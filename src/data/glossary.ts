// src/data/glossary.ts

// 1. Kamus Khusus Baut (Fastener)
export type GlossaryItem = {
  [key: string]: string;
};
export const glossaryFasteners: GlossaryItem = {
  "HX": "HEXAGONAL",
  "FL": "FLANGED",
  "SQ": "SQUARE",
  "CR": "CARRIAGE",
  "METRIC": "METRIC",
  "IMPERIAL": "IMPERIAL",
  "P": "PITCH",
  "TPI": "THREADS PER INCH",
  "FT": "FULLY THREADED",
  "PT": "PARTIALLY THREADED",
  "R": "RIGHT DIRECTION",
  "L": "LEFT DIRECTION",
  "NA": "NOT AVAILABLE",
  "SUS304": "SUS304",
  "SUS304L": "SUS304L",
  "SUS316": "SUS316",
  "SUS316L": "SUS316L",
  "SS400": "SS400",
  "C/S 8.8": "C/S 8.8",
  "C/S 10.9": "C/S 10.9",
  "C/S 12.9": "C/S 12.9",
  "ZNP": "ZINC PLATED",
  "CHR": "CHROME PLATED",
  "HDG": "HOT DIP GALVANIZED",
  "ELG": "ELECTRO GALVANIZED",
  "BOX": "BLACK OXIDE",
};