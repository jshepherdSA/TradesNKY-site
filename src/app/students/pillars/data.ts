import {
  Factory,
  Hammer,
  Shield,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type CareerCard = {
  title: string;
  wage: string;
  description: string;
};

export type PathData = {
  slug: string;
  name: string;
  blurb: string;
  bgClass: string;
  textClass: string;
  icon: LucideIcon;
  occupations: string[];
  /** Shown after the path name in the hero — cycles in the rotating-word slot. */
  rotatingWords: string[];
  careers: CareerCard[];
  jobCount: number;
};

export const PATHS: Record<string, PathData> = {
  build: {
    slug: "build",
    name: "Build",
    blurb:
      "Design, construct, and finish the homes, plants, and infrastructure that keep Northern Kentucky standing.",
    bgClass: "bg-pillar-build",
    textClass: "text-pillar-build",
    icon: Hammer,
    rotatingWords: [
      "homes",
      "systems",
      "infrastructure",
      "paths",
      "up your community",
    ],
    occupations: [
      "Carpenter",
      "Electrician",
      "Plumber",
      "Ironworker",
      "Welder",
      "HVAC Technician",
      "Concrete Finisher",
      "Mason",
      "Estimator",
      "Project Manager",
      "Site Superintendent",
    ],
    careers: [
      {
        title: "Electrician",
        wage: "$64,000 / yr",
        description:
          "Install and maintain the wiring, lighting, and power systems in homes, plants, and job sites.",
      },
      {
        title: "Carpenter",
        wage: "$56,000 / yr",
        description:
          "Frame, finish, and build structures from blueprints — residential through commercial.",
      },
      {
        title: "Plumber",
        wage: "$61,000 / yr",
        description:
          "Run and repair the water, gas, and drainage systems every building depends on.",
      },
      {
        title: "HVAC Technician",
        wage: "$58,000 / yr",
        description:
          "Install and service the heating, cooling, and ventilation systems that run year-round.",
      },
      {
        title: "Construction Project Manager",
        wage: "$82,000 / yr",
        description:
          "Plan, budget, and run job sites from groundbreaking through final handover.",
      },
      {
        title: "Ironworker",
        wage: "$63,000 / yr",
        description:
          "Assemble the structural steel skeletons behind bridges, plants, and high-rises.",
      },
    ],
    jobCount: 1240,
  },

  make: {
    slug: "make",
    name: "Make",
    blurb:
      "Machine, weld, fabricate, and automate — the manufacturing work that turns raw material into finished product.",
    bgClass: "bg-pillar-make",
    textClass: "text-pillar-make",
    icon: Factory,
    rotatingWords: ["machines", "robots", "products", "cars", "components"],
    occupations: [
      "CNC Machinist",
      "Welder",
      "Robotics Technician",
      "Tool & Die Maker",
      "Quality Inspector",
      "Fabricator",
      "Industrial Maintenance Tech",
      "Machine Operator",
      "Millwright",
      "Production Supervisor",
    ],
    careers: [
      {
        title: "CNC Machinist",
        wage: "$57,000 / yr",
        description:
          "Program and run the precision machines that cut metal parts to exact spec.",
      },
      {
        title: "Welder",
        wage: "$54,000 / yr",
        description:
          "Join metal for everything from auto components to structural assemblies.",
      },
      {
        title: "Robotics Technician",
        wage: "$66,000 / yr",
        description:
          "Set up, program, and troubleshoot the automated cells on a modern production line.",
      },
      {
        title: "Industrial Maintenance Technician",
        wage: "$62,000 / yr",
        description:
          "Keep plant equipment running — mechanical, electrical, and hydraulic systems.",
      },
      {
        title: "Tool & Die Maker",
        wage: "$68,000 / yr",
        description:
          "Build and repair the molds, jigs, and dies that shape manufactured goods.",
      },
      {
        title: "Quality Inspector",
        wage: "$52,000 / yr",
        description:
          "Measure, test, and certify that parts meet tolerance before they ship.",
      },
    ],
    jobCount: 980,
  },

  move: {
    slug: "move",
    name: "Move",
    blurb:
      "Drive, dispatch, and coordinate the logistics network that runs through Northern Kentucky's distribution hubs.",
    bgClass: "bg-pillar-move",
    textClass: "text-pillar-move",
    icon: Truck,
    rotatingWords: ["people", "products", "food", "packages", "freight"],
    occupations: [
      "CDL Driver",
      "Diesel Mechanic",
      "Logistics Coordinator",
      "Warehouse Supervisor",
      "Dispatcher",
      "Forklift Operator",
      "Supply Chain Analyst",
      "Fleet Manager",
      "Freight Broker",
      "Rail Conductor",
    ],
    careers: [
      {
        title: "CDL Truck Driver",
        wage: "$59,000 / yr",
        description:
          "Haul freight across the region and the country on local and long-haul routes.",
      },
      {
        title: "Diesel Mechanic",
        wage: "$58,000 / yr",
        description:
          "Diagnose and repair the engines and systems that keep fleets on the road.",
      },
      {
        title: "Logistics Coordinator",
        wage: "$54,000 / yr",
        description:
          "Schedule shipments and route freight so it arrives on time and on budget.",
      },
      {
        title: "Warehouse Supervisor",
        wage: "$56,000 / yr",
        description:
          "Lead the teams that receive, store, and ship goods through NKY's distribution centers.",
      },
      {
        title: "Dispatcher",
        wage: "$48,000 / yr",
        description:
          "Coordinate drivers, loads, and routes in real time so nothing sits idle.",
      },
      {
        title: "Supply Chain Analyst",
        wage: "$67,000 / yr",
        description:
          "Use data to cut cost and delay out of how goods move from origin to dock.",
      },
    ],
    jobCount: 1510,
  },

  power: {
    slug: "power",
    name: "Power",
    blurb:
      "Generate, transmit, and maintain the energy and utility systems the whole region depends on.",
    bgClass: "bg-pillar-power",
    textClass: "text-pillar-power",
    icon: Zap,
    rotatingWords: [
      "your city",
      "your community",
      "sustainably",
      "America",
      "local businesses",
    ],
    occupations: [
      "Lineworker",
      "Power Plant Operator",
      "Wind Turbine Technician",
      "Substation Technician",
      "Gas Utility Technician",
      "Relay Technician",
      "Solar Installer",
      "Meter Technician",
      "Grid Operator",
      "Environmental Systems Tech",
    ],
    careers: [
      {
        title: "Electrical Lineworker",
        wage: "$78,000 / yr",
        description:
          "Build and repair the overhead and underground lines that carry power to the region.",
      },
      {
        title: "Power Plant Operator",
        wage: "$81,000 / yr",
        description:
          "Control and monitor the equipment that generates electricity around the clock.",
      },
      {
        title: "Wind Turbine Technician",
        wage: "$61,000 / yr",
        description:
          "Climb, inspect, and maintain the turbines that add renewable capacity to the grid.",
      },
      {
        title: "Substation Technician",
        wage: "$74,000 / yr",
        description:
          "Test and maintain the switchgear and transformers that route power where it's needed.",
      },
      {
        title: "Gas Utility Technician",
        wage: "$63,000 / yr",
        description:
          "Install, inspect, and service the natural-gas distribution network.",
      },
      {
        title: "Relay Technician",
        wage: "$79,000 / yr",
        description:
          "Calibrate the protective systems that keep the grid safe and stable.",
      },
    ],
    jobCount: 620,
  },

  protect: {
    slug: "protect",
    name: "Protect",
    blurb:
      "Operate, secure, and safeguard the facilities, public services, and systems that keep communities running.",
    bgClass: "bg-pillar-protect",
    textClass: "text-pillar-protect",
    icon: Shield,
    rotatingWords: [
      "your community",
      "local businesses",
      "public health",
      "the workforce",
      "the environment",
    ],
    occupations: [
      "Facilities Technician",
      "Firefighter / EMT",
      "Cybersecurity Analyst",
      "Building Automation Tech",
      "Water Treatment Operator",
      "Public Safety Dispatcher",
      "Security Specialist",
      "Public Works Technician",
      "Safety Coordinator",
      "Emergency Manager",
    ],
    careers: [
      {
        title: "Facilities Maintenance Technician",
        wage: "$55,000 / yr",
        description:
          "Keep buildings, systems, and grounds safe, clean, and running every day.",
      },
      {
        title: "Firefighter / EMT",
        wage: "$52,000 / yr",
        description:
          "Respond to emergencies and protect Northern Kentucky communities.",
      },
      {
        title: "Cybersecurity Analyst",
        wage: "$86,000 / yr",
        description:
          "Defend the networks and data that regional employers and agencies rely on.",
      },
      {
        title: "Water Treatment Operator",
        wage: "$58,000 / yr",
        description:
          "Run and monitor the plants that keep public drinking water safe.",
      },
      {
        title: "Building Automation Technician",
        wage: "$64,000 / yr",
        description:
          "Program and maintain the controls that run lighting, HVAC, and security in modern facilities.",
      },
      {
        title: "Public Safety Dispatcher",
        wage: "$49,000 / yr",
        description:
          "Coordinate police, fire, and EMS response when seconds count.",
      },
    ],
    jobCount: 740,
  },
};

export const PATH_SLUGS = Object.keys(PATHS);

export const ROTATING_WORDS: Record<string, string[]> = {
  construction: ["homes", "systems", "infrastructure", "paths", "up your community"],
  "advanced-manufacturing": ["machines", "robots", "products", "cars", "components"],
  "electrical-energy": ["your city", "your community", "sustainably", "America", "local businesses"],
  "hvac-plumbing": ["your community", "local businesses", "public health", "the workforce", "the environment"],
  "transportation-logistics": ["people", "products", "food", "packages", "freight"],
};
