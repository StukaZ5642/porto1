// src/data/categories.ts

export type Category = {
  id: string;
  name: string;
  image: string;
  isActive: boolean;
};

export const categories: Category[] = [
  { id: "abrasives", name: "Abrasives and Surface Finishing Media", image: "/images/cat_abrasives.jpg", isActive: true },
  { id: "electricals", name: "Electrical and Electronic Components", image: "/images/cat_electrical_components.jpg", isActive: true },
  { id: "plastics", name: "Engineering Plastics and Rubber Sheets", image: "/images/cat_eng_plastics.jpg", isActive: true },
  { id: "facilities", name: "Facility Maintenance, Civil, and Labeling Supplies", image: "/images/cat_facility_civil.jpg", isActive: true },
  { id: "fasteners", name: "Fasteners and  General Hardware", image: "/images/cat_fasteners.jpg", isActive: true },
  { id: "filtration", name: "Filtration Process and Separation Media", image: "/images/cat_filtration_separation.jpg", isActive: true },
  { id: "tools", name: "Hand Tools, Power Tools, and Tools Storage", image: "/images/cat_hand_power_tools.jpg", isActive: true },
  { id: "heavy", name: "Heavy Equipment, Vehicles & Fleet Parts", image: "/images/cat_heavy_equipment.jpg", isActive: true },
  { id: "hvac", name: "HVAC and  Refrigeration Equipment", image: "/images/cat_hvac_refrigeration.jpg", isActive: false },
  { id: "hydraulics", name: "Hydraulic and  Pneumatic Products", image: "/images/cat_hyd_pneu_products.jpg", isActive: false },
  { id: "automations", name: "Industrial Automations and Drives", image: "/images/cat_ind_automations.jpg", isActive: false },
  { id: "chemicals", name: "Industrial Chemicals and Raw Materials", image: "/images/cat_ind_chemicals.jpg", isActive: false },
  { id: "gases", name: "Industrial Gases, Fuels, and Energy", image: "/images/cat_ind_gases_fuels.jpg", isActive: false },
  { id: "valves", name: "Valves and Flow Control Equipment", image: "/images/cat_ind_valves.jpg", isActive: false },
  { id: "laboratories", name: "Laboratory Equipment and Glassware", image: "/images/cat_lab_eq_ware.jpg", isActive: true },
  { id: "lamps", name: "Lighting, Lamps, and Components", image: "/images/cat_lamp_lighting.jpg", isActive: false },
  { id: "lubricants", name: "Lubricants, Adhesives, and Coatings", image: "/images/cat_lubricants.jpg", isActive: false },
  { id: "handling", name: "Material Handling and Warehouse Equipment", image: "/images/cat_mat_handling.jpg", isActive: false },
  { id: "transmissions", name: "Mechanical Transmission and Components", image: "/images/cat_mech_transmissions.jpg", isActive: false },
  { id: "metals", name: "Metal Products and Structural Shapes", image: "/images/cat_metal_products.jpg", isActive: false },
  { id: "packaging", name: "Packaging Materials and Containers", image: "/images/cat_pack_materials.jpg", isActive: false },
  { id: "piping", name: "Piping, Tubing, Fittings, and Related Products", image: "/images/cat_piping_tubing.jpg", isActive: false },
  { id: "safety", name: "Safety and Personal Protective Equipment", image: "/images/cat_safety_equipment.jpg", isActive: false },
  { id: "gaskets", name: "Sealing and Gasketing Materials", image: "/images/cat_seals_gaskets.jpg", isActive: false },
  { id: "test", name: "Test, Inspection, and Dimensional Measurement", image: "/images/cat_test_inspection.jpg", isActive: false },
  { id: "welding", name: "Welding and Soldering Equipment and Supplies", image: "/images/cat_welding_soldering.jpg", isActive: false },
];