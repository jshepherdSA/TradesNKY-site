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
  /** Annual wage, client-provided (Pillars + Data). */
  wage: string;
  description: string;
};

/** Open-role counts by geography, client-provided (Pillars + Data). */
export type OpenRoles = {
  nky: string;
  ky: string;
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
  openRoles: OpenRoles;
  /** Named NKY employers in this industry. Client-provided names only; empty
   *  arrays render a "coming soon" placeholder. */
  companies: string[];
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
        wage: "$67,328 / yr",
        description:
          "Install and maintain the wiring, lighting, and power systems in homes, plants, and job sites.",
      },
      {
        title: "Carpenter",
        wage: "$56,192 / yr",
        description:
          "Frame, finish, and build structures from blueprints — residential through commercial.",
      },
      {
        title: "Plumber",
        wage: "$62,208 / yr",
        description:
          "Run and repair the water, gas, and drainage systems every building depends on.",
      },
      {
        title: "HVAC Technician",
        wage: "$67,840 / yr",
        description:
          "Install and service the heating, cooling, and ventilation systems that run year-round.",
      },
      {
        title: "Construction Project Manager",
        wage: "$110,812 / yr",
        description:
          "Plan, budget, and run job sites from groundbreaking through final handover.",
      },
      {
        title: "Ironworker",
        wage: "$60,160 / yr",
        description:
          "Assemble the structural steel skeletons behind bridges, plants, and high-rises.",
      },
      {
        title: "Welder",
        wage: "$56,064 / yr",
        description:
          "Join the steel and metal assemblies behind structures, bridges, and building systems.",
      },
    ],
    openRoles: { nky: "7,098", ky: "71,449" },
    companies: [],
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
        wage: "$58,112 / yr",
        description:
          "Program and run the precision machines that cut metal parts to exact spec.",
      },
      {
        title: "Welder",
        wage: "$56,064 / yr",
        description:
          "Join metal for everything from auto components to structural assemblies.",
      },
      {
        title: "Production Supervisor",
        wage: "$77,971 / yr",
        description:
          "Lead the crews and processes that keep a production line running safely and on schedule.",
      },
      {
        title: "Industrial Maintenance Technician",
        wage: "$57,216 / yr",
        description:
          "Keep plant equipment running — mechanical, electrical, and hydraulic systems.",
      },
      {
        title: "Tool & Die Maker",
        wage: "$62,208 / yr",
        description:
          "Build and repair the molds, jigs, and dies that shape manufactured goods.",
      },
      {
        title: "Quality Inspector",
        wage: "$48,431 / yr",
        description:
          "Measure, test, and certify that parts meet tolerance before they ship.",
      },
    ],
    openRoles: { nky: "22,463", ky: "213,525" },
    companies: [],
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
        wage: "$72,091 / yr",
        description:
          "Haul freight across the region and the country on local and long-haul routes.",
      },
      {
        title: "Diesel Mechanic",
        wage: "$64,768 / yr",
        description:
          "Diagnose and repair the engines and systems that keep fleets on the road.",
      },
      {
        title: "Logistics Coordinator",
        wage: "$78,686 / yr",
        description:
          "Schedule shipments and route freight so it arrives on time and on budget.",
      },
      {
        title: "Warehouse Supervisor",
        wage: "$77,971 / yr",
        description:
          "Lead the teams that receive, store, and ship goods through NKY's distribution centers.",
      },
      {
        title: "Air Traffic Controller",
        wage: "$134,528 / yr",
        description:
          "Direct aircraft safely through the region's airspace and runways.",
      },
      {
        title: "Supply Chain Analyst",
        wage: "$50,628 / yr",
        description:
          "Use data to cut cost and delay out of how goods move from origin to dock.",
      },
    ],
    openRoles: { nky: "57,475", ky: "319,279" },
    companies: ["CVG Airport"],
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
        wage: "$57,088 / yr",
        description:
          "Build and repair the overhead and underground lines that carry power to the region.",
      },
      {
        title: "Power Plant Operator",
        wage: "$85,504 / yr",
        description:
          "Control and monitor the equipment that generates electricity around the clock.",
      },
      {
        title: "Wind Turbine Technician",
        wage: "$65,280 / yr",
        description:
          "Climb, inspect, and maintain the turbines that add renewable capacity to the grid.",
      },
      {
        title: "Substation Technician",
        wage: "$52,096 / yr",
        description:
          "Test and maintain the switchgear and transformers that route power where it's needed.",
      },
      {
        title: "Gas Utility Technician",
        wage: "$52,736 / yr",
        description:
          "Install, inspect, and service the natural-gas distribution network.",
      },
      {
        title: "Relay Technician",
        wage: "$52,096 / yr",
        description:
          "Calibrate the protective systems that keep the grid safe and stable.",
      },
    ],
    openRoles: { nky: "3,153", ky: "33,571" },
    companies: ["Duke Energy"],
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
        wage: "$45,839 / yr",
        description:
          "Keep buildings, systems, and grounds safe, clean, and running every day.",
      },
      {
        title: "Firefighter / EMT",
        wage: "$44,755 / yr",
        description:
          "Respond to emergencies and protect Northern Kentucky communities.",
      },
      {
        title: "Cybersecurity Analyst",
        wage: "$115,632 / yr",
        description:
          "Defend the networks and data that regional employers and agencies rely on.",
      },
      {
        title: "Water Treatment Operator",
        wage: "$60,928 / yr",
        description:
          "Run and monitor the plants that keep public drinking water safe.",
      },
      {
        title: "Detectives and Criminal Investigators",
        wage: "$90,937 / yr",
        description:
          "Investigate crimes and gather the evidence that keeps communities safe.",
      },
      {
        title: "Police Patrol Officer",
        wage: "$67,916 / yr",
        description:
          "Protect and serve neighborhoods through everyday public-safety response.",
      },
    ],
    openRoles: { nky: "5,385", ky: "44,412" },
    companies: [],
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
