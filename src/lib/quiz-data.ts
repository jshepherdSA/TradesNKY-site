/**
 * Single source of truth for the Career Quiz — types, question
 * content, score initial states, pillar routing, display names,
 * default-occupation fallbacks, and the highest-pillar /
 * highest-occupation tiebreakers.
 *
 * Both `src/app/students/quiz/page.tsx` (the full quiz) and
 * `src/app/_components/QuizPreview.tsx` (the homepage teaser) import
 * everything from this file — there is no duplicated quiz logic in
 * either component. Updating questions, scoring, or routes here
 * affects both surfaces simultaneously.
 *
 * UI concerns (pillar icons, pillar background-color classes, etc.)
 * deliberately live with the shared result component
 * (`src/app/_components/quiz-result-card.tsx`) so this file stays
 * dependency-free.
 */

export type Pillar = "Build" | "Make" | "Move" | "Power" | "Protect";

export type Occupation =
  | "Carpenter"
  | "Plumber"
  | "HVAC Technician"
  | "Heavy Equipment Operator"
  | "CNC Machinist"
  | "Welder"
  | "Robotics Technician"
  | "Industrial Maintenance Technician"
  | "Diesel Mechanic"
  | "Automotive Technician"
  | "Logistics Coordinator"
  | "Aviation Maintenance Technician"
  | "Electrical Lineworker"
  | "Substation Technician"
  | "Solar Installer"
  | "Wind Turbine Technician"
  | "Firefighter"
  | "EMT"
  | "Water Treatment Operator"
  | "Building Inspector";

export type AnswerOption = {
  label: string;
  scores: Partial<Record<Pillar, number>>;
  occupations?: Partial<Record<Occupation, number>>;
};

export type Question = {
  question: string;
  options: AnswerOption[];
};

// Tiebreaker order for `getHighestPillar` — when two pillars finish
// with equal scores, the one earlier in this array wins.
export const pillarPriority: Pillar[] = [
  "Build",
  "Make",
  "Power",
  "Protect",
  "Move",
];

// Slugs must match keys of `PATHS` in src/app/students/pillars/data.ts —
// those are the only values `generateStaticParams()` produces, so
// anything else hits `notFound()`.
export const pillarRoutes: Record<Pillar, string> = {
  Build: "/students/pillars/build",
  Make: "/students/pillars/make",
  Move: "/students/pillars/move",
  Power: "/students/pillars/power",
  Protect: "/students/pillars/protect",
};

export const pillarDisplayNames: Record<Pillar, string> = {
  Build: "Build",
  Make: "Make",
  Move: "Move",
  Power: "Power",
  Protect: "Protect",
};

export const defaultOccupations: Record<Pillar, Occupation> = {
  Build: "Carpenter",
  Make: "CNC Machinist",
  Move: "Diesel Mechanic",
  Power: "Electrical Lineworker",
  Protect: "Firefighter",
};

export const occupationsByPillar: Record<Pillar, Occupation[]> = {
  Build: [
    "Carpenter",
    "Plumber",
    "HVAC Technician",
    "Heavy Equipment Operator",
  ],
  Make: [
    "CNC Machinist",
    "Welder",
    "Robotics Technician",
    "Industrial Maintenance Technician",
  ],
  Move: [
    "Diesel Mechanic",
    "Automotive Technician",
    "Logistics Coordinator",
    "Aviation Maintenance Technician",
  ],
  Power: [
    "Electrical Lineworker",
    "Substation Technician",
    "Solar Installer",
    "Wind Turbine Technician",
  ],
  Protect: [
    "Firefighter",
    "EMT",
    "Water Treatment Operator",
    "Building Inspector",
  ],
};

export const questions: Question[] = [
  {
    question: "When something breaks at home, what's your instinct?",
    options: [
      {
        label: "I want to fix it myself with tools",
        scores: { Build: 2 },
        occupations: {
          Carpenter: 1,
          Plumber: 1,
        },
      },
      {
        label: "I want to understand why it stopped working",
        scores: { Make: 2 },
        occupations: {
          "CNC Machinist": 1,
        },
      },
      {
        label: "I check if it's electrical or mechanical",
        scores: { Power: 2 },
        occupations: {
          "Electrical Lineworker": 1,
        },
      },
      {
        label: "I think about who it affects and how to keep people safe",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
        },
      },
      {
        label: "I think about getting the right parts delivered fast",
        scores: { Move: 2 },
        occupations: {
          "Logistics Coordinator": 1,
        },
      },
    ],
  },
  {
    question: "Which of these jobs sounds most exciting to you?",
    options: [
      {
        label: "Building a house or structure from the ground up",
        scores: { Build: 2 },
        occupations: {
          Carpenter: 2,
        },
      },
      {
        label: "Programming a robot or running a CNC machine",
        scores: { Make: 2 },
        occupations: {
          "Robotics Technician": 2,
        },
      },
      {
        label: "Installing solar panels or wiring a building",
        scores: { Power: 2 },
        occupations: {
          "Solar Installer": 2,
        },
      },
      {
        label: "Responding to an emergency or inspecting a water system",
        scores: { Protect: 2 },
        occupations: {
          EMT: 1,
          "Water Treatment Operator": 1,
        },
      },
      {
        label: "Diagnosing a diesel engine or coordinating a fleet",
        scores: { Move: 2 },
        occupations: {
          "Diesel Mechanic": 2,
        },
      },
    ],
  },
  {
    question: "What would you rather do after school?",
    options: [
      {
        label: "Work on a building or construction project",
        scores: { Build: 2 },
        occupations: {
          "Heavy Equipment Operator": 1,
        },
      },
      {
        label: "Take apart and rebuild an engine or machine",
        scores: { Make: 1, Move: 1 },
        occupations: {
          "Diesel Mechanic": 1,
          "Industrial Maintenance Technician": 1,
        },
      },
      {
        label: "Learn how electrical systems or power grids work",
        scores: { Power: 2 },
        occupations: {
          "Substation Technician": 1,
        },
      },
      {
        label: "Volunteer with a fire department or learn first aid",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          EMT: 1,
        },
      },
      {
        label: "Work at a warehouse, garage, or logistics company",
        scores: { Move: 2 },
        occupations: {
          "Logistics Coordinator": 1,
        },
      },
    ],
  },
  {
    question: "Which paycheck sounds most like your goal?",
    options: [
      {
        label: "$55K starting, growing as I take on bigger projects",
        scores: { Build: 1 },
        occupations: {
          Carpenter: 1,
          Plumber: 1,
        },
      },
      {
        label: "$60K using precision machinery and technical skills",
        scores: { Make: 2 },
        occupations: {
          "CNC Machinist": 1,
          Welder: 1,
        },
      },
      {
        label: "$70K+ working on power infrastructure",
        scores: { Power: 2 },
        occupations: {
          "Electrical Lineworker": 2,
        },
      },
      {
        label: "Steady government or municipal salary with benefits",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          "Building Inspector": 1,
        },
      },
      {
        label: "$65K driving, dispatching, or keeping vehicles running",
        scores: { Move: 2 },
        occupations: {
          "Diesel Mechanic": 1,
        },
      },
    ],
  },
  {
    question: "Which problem would you most want to solve?",
    options: [
      {
        label: "A building with a faulty foundation or broken pipes",
        scores: { Build: 2 },
        occupations: {
          Plumber: 2,
        },
      },
      {
        label: "A factory line that keeps breaking down",
        scores: { Make: 2 },
        occupations: {
          "Industrial Maintenance Technician": 2,
        },
      },
      {
        label: "A neighborhood losing power after a storm",
        scores: { Power: 2 },
        occupations: {
          "Electrical Lineworker": 2,
        },
      },
      {
        label: "A community with unsafe drinking water",
        scores: { Protect: 2 },
        occupations: {
          "Water Treatment Operator": 2,
        },
      },
      {
        label: "A city with supply chain delays and delivery problems",
        scores: { Move: 2 },
        occupations: {
          "Logistics Coordinator": 2,
        },
      },
    ],
  },
  {
    question: "What sounds most like your ideal workday?",
    options: [
      {
        label: "Working outside on a physical structure with a crew",
        scores: { Build: 2 },
        occupations: {
          Carpenter: 1,
          "Heavy Equipment Operator": 1,
        },
      },
      {
        label: "Inside a climate-controlled shop using precision tools",
        scores: { Make: 2 },
        occupations: {
          "CNC Machinist": 1,
        },
      },
      {
        label:
          "Climbing, working at heights, or around high-voltage equipment",
        scores: { Power: 2 },
        occupations: {
          "Electrical Lineworker": 1,
          "Wind Turbine Technician": 1,
        },
      },
      {
        label:
          "Responding to calls, doing inspections, or protecting infrastructure",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          "Building Inspector": 1,
        },
      },
      {
        label: "On the road, in a shop, or managing a moving operation",
        scores: { Move: 2 },
        occupations: {
          "Diesel Mechanic": 1,
          "Automotive Technician": 1,
        },
      },
    ],
  },
  {
    question: "Which technology interests you most?",
    options: [
      {
        label: "Heavy equipment, cranes, excavators, or concrete forms",
        scores: { Build: 2 },
        occupations: {
          "Heavy Equipment Operator": 2,
        },
      },
      {
        label: "CNC machines, laser cutters, welding robots, or 3D printers",
        scores: { Make: 2 },
        occupations: {
          "Robotics Technician": 2,
        },
      },
      {
        label:
          "Solar arrays, wind turbines, substations, or smart grid systems",
        scores: { Power: 2 },
        occupations: {
          "Solar Installer": 1,
          "Wind Turbine Technician": 1,
        },
      },
      {
        label:
          "Fire suppression systems, emergency dispatch, or water treatment",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          "Water Treatment Operator": 1,
        },
      },
      {
        label:
          "Fleet management software, aircraft engines, or logistics systems",
        scores: { Move: 2 },
        occupations: {
          "Aviation Maintenance Technician": 1,
          "Logistics Coordinator": 1,
        },
      },
    ],
  },
  {
    question: "Which describes how you like to work?",
    options: [
      {
        label: "I like working with a crew on a visible, physical end product",
        scores: { Build: 2 },
      },
      {
        label: "I like precision, repeatability, and getting specs exactly right",
        scores: { Make: 2 },
        occupations: {
          "CNC Machinist": 1,
        },
      },
      {
        label:
          "I like working on critical systems where accuracy really matters",
        scores: { Power: 2, Protect: 1 },
      },
      {
        label: "I like being trusted to keep people and systems safe",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          EMT: 1,
        },
      },
      {
        label:
          "I like independence, movement, and being responsible for something valuable",
        scores: { Move: 2 },
      },
    ],
  },
  {
    question: "What kind of training sounds right for you?",
    options: [
      {
        label: "A construction apprenticeship where I learn on the job",
        scores: { Build: 2 },
        occupations: {
          Carpenter: 1,
          Plumber: 1,
          "HVAC Technician": 1,
        },
      },
      {
        label: "A manufacturing or welding certification program",
        scores: { Make: 2 },
        occupations: {
          Welder: 1,
          "CNC Machinist": 1,
        },
      },
      {
        label: "An electrical apprenticeship or energy technology program",
        scores: { Power: 2 },
        occupations: {
          "Electrical Lineworker": 1,
          "Solar Installer": 1,
        },
      },
      {
        label: "A fire academy, EMT course, or public works program",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          EMT: 1,
        },
      },
      {
        label: "A diesel tech program, CDL training, or aviation school",
        scores: { Move: 2 },
        occupations: {
          "Diesel Mechanic": 1,
          "Aviation Maintenance Technician": 1,
        },
      },
    ],
  },
  {
    question: "Ten years from now, where do you see yourself?",
    options: [
      {
        label: "Running my own contracting business or managing job sites",
        scores: { Build: 2 },
        occupations: {
          Carpenter: 1,
        },
      },
      {
        label: "A lead technician, engineer, or shop supervisor",
        scores: { Make: 2 },
        occupations: {
          "Industrial Maintenance Technician": 1,
        },
      },
      {
        label:
          "A master electrician, energy project manager, or grid specialist",
        scores: { Power: 2 },
        occupations: {
          "Electrical Lineworker": 1,
        },
      },
      {
        label: "A fire captain, paramedic, safety director, or inspector",
        scores: { Protect: 2 },
        occupations: {
          Firefighter: 1,
          "Building Inspector": 1,
        },
      },
      {
        label: "A fleet manager, airline mechanic, or logistics director",
        scores: { Move: 2 },
        occupations: {
          "Diesel Mechanic": 1,
          "Aviation Maintenance Technician": 1,
        },
      },
    ],
  },
];

export const INITIAL_PILLAR_SCORES: Record<Pillar, number> = {
  Build: 0,
  Make: 0,
  Move: 0,
  Power: 0,
  Protect: 0,
};

export const INITIAL_OCCUPATION_SCORES: Record<Occupation, number> = {
  Carpenter: 0,
  Plumber: 0,
  "HVAC Technician": 0,
  "Heavy Equipment Operator": 0,
  "CNC Machinist": 0,
  Welder: 0,
  "Robotics Technician": 0,
  "Industrial Maintenance Technician": 0,
  "Diesel Mechanic": 0,
  "Automotive Technician": 0,
  "Logistics Coordinator": 0,
  "Aviation Maintenance Technician": 0,
  "Electrical Lineworker": 0,
  "Substation Technician": 0,
  "Solar Installer": 0,
  "Wind Turbine Technician": 0,
  Firefighter: 0,
  EMT: 0,
  "Water Treatment Operator": 0,
  "Building Inspector": 0,
};

export function getHighestPillar(scores: Record<Pillar, number>): Pillar {
  let winner = pillarPriority[0];
  for (const pillar of pillarPriority) {
    if (scores[pillar] > scores[winner]) {
      winner = pillar;
    }
  }
  return winner;
}

export function getHighestOccupation(
  winningPillar: Pillar,
  occupationScores: Record<Occupation, number>,
): Occupation {
  const possibleOccupations = occupationsByPillar[winningPillar];
  let winner = defaultOccupations[winningPillar];
  for (const occupation of possibleOccupations) {
    if (
      (occupationScores[occupation] ?? 0) > (occupationScores[winner] ?? 0)
    ) {
      winner = occupation;
    }
  }
  return winner;
}
