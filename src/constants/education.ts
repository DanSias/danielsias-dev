export type Degree = {
  school: string;
  degree: string;
  graduated: number;
  location: string;
  logo: string;
  foundation: string;
  stillUseToday: string;
  visibleIn: { label: string; href: string }[];
};

const degrees: Degree[] = [
  {
    school: "University of Central Florida",
    degree: "Master of Science in Optics",
    graduated: 2009,
    location: "Orlando, FL",
    logo: "/logos/ucf.svg",
    foundation:
      "Optical engineering and photonics, built on computational modeling, simulation, and data analysis of physical systems.",
    stillUseToday:
      "Modeling a system before building it, and validating design decisions with data instead of intuition.",
    visibleIn: [
      { label: "Data Platforms & Analytics", href: "/skills" },
      { label: "Nexus", href: "/projects" },
    ],
  },
  {
    school: "University of Florida",
    degree: "Master of Science in Management",
    graduated: 2005,
    location: "Gainesville, FL",
    logo: "/logos/uf.svg",
    foundation:
      "Business strategy and organizational behavior, with an emphasis on leading cross-functional teams and data-driven decisions.",
    stillUseToday:
      "Turning ambiguous problems into clear priorities, and building the visibility a team needs to stay aligned.",
    visibleIn: [
      { label: "Engineering Workflow & Collaboration", href: "/skills" },
      { label: "Workflow Intelligence", href: "/projects" },
    ],
  },
  {
    school: "Embry-Riddle Aeronautical University",
    degree: "Bachelor of Science in Engineering Physics",
    graduated: 2004,
    location: "Daytona Beach, FL",
    logo: "/logos/erau.svg",
    foundation:
      "Applied physics and mathematics, with hands-on computational modeling and experimental problem-solving.",
    stillUseToday:
      "Breaking complex problems into smaller, testable pieces and reasoning from first principles instead of pattern-matching.",
    visibleIn: [
      { label: "Engineering Capabilities", href: "/skills" },
      { label: "RocketGate", href: "/experience" },
    ],
  },
];

export default degrees;
