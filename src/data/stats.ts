import { StatItem } from '../types';

/**
 * DEMO STATISTICS CONFIGURATION
 * Note to Gym Owner: Replace all demo statistics below with your verified client and facility data.
 */
export const statsData: StatItem[] = [
  {
    id: "members",
    value: 500,
    suffix: "+",
    label: "ACTIVE ATHLETES",
    description: "Dedicated members training under our daily standards."
  },
  {
    id: "coaches",
    value: 12,
    suffix: "",
    label: "MASTER COACHES",
    description: "Certified coaches specializing in performance & nutrition."
  },
  {
    id: "programs",
    value: 20,
    suffix: "+",
    label: "TRAINING PROTOCOLS",
    description: "Scientifically structured programs across strength & mobility."
  },
  {
    id: "space",
    value: 12000,
    suffix: " SQ.FT",
    label: "TRAINING FLOOR",
    description: "State-of-the-art turf, power racks, and functional equipment."
  }
];
