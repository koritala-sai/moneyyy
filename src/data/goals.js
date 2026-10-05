import { solutions } from "./solutions";

export const goals = [
  {
    id: "home",
    label: "Home",
    icon: "Home",
    solutionIds: ["home-loan"],
  },
  {
    id: "vehicle",
    label: "Vehicle",
    icon: "Car",
    solutionIds: ["vehicle-loan"],
  },
  {
    id: "personal-need",
    label: "Personal Need",
    icon: "User",
    solutionIds: ["personal-loan"],
  },
  {
    id: "property",
    label: "Property",
    icon: "Building2",
    solutionIds: ["lap"],
  },
  {
    id: "liquidity",
    label: "Liquidity",
    icon: "Banknote",
    solutionIds: ["las", "lap"],
  },
  {
    id: "banking",
    label: "Banking",
    icon: "Landmark",
    solutionIds: ["salary-account"],
  },
  {
    id: "retirement",
    label: "Retirement",
    icon: "Sprout",
    solutionIds: ["nps"],
  },
  {
    id: "investing",
    label: "Investing",
    icon: "TrendingUp",
    solutionIds: ["demat"],
  },
];

export const getGoalSolutions = (goalId) => {
  const goal = goals.find((g) => g.id === goalId);
  if (!goal) return [];
  return solutions.filter((s) => goal.solutionIds.includes(s.id));
};
