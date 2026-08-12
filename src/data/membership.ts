import { MembershipPlan } from '../types';

/**
 * CENTRALIZED MEMBERSHIP PRICING DATA
 * Easy to customize for gym owners. All pricing and benefits are configurable here.
 */
export const membershipData: MembershipPlan[] = [
  {
    id: "plan-1-month",
    duration: "1 MONTH",
    regularPrice: "₹2,499",
    offerPrice: "₹1,999",
    savings: "SAVE ₹500",
    popular: false,
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Training",
      "Locker Access"
    ],
    ctaText: "JOIN NOW"
  },
  {
    id: "plan-3-months",
    duration: "3 MONTHS",
    regularPrice: "₹6,999",
    offerPrice: "₹5,499",
    savings: "SAVE ₹1,500",
    badge: "MOST POPULAR",
    popular: true,
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Training",
      "Locker Access",
      "Fitness Assessment"
    ],
    ctaText: "JOIN NOW"
  },
  {
    id: "plan-6-months",
    duration: "6 MONTHS",
    regularPrice: "₹12,999",
    offerPrice: "₹9,999",
    savings: "SAVE ₹3,000",
    popular: false,
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Training",
      "Locker Access",
      "Fitness Assessment",
      "Nutrition Guidance"
    ],
    ctaText: "JOIN NOW"
  },
  {
    id: "plan-1-year",
    duration: "1 YEAR",
    regularPrice: "₹23,999",
    offerPrice: "₹17,999",
    savings: "SAVE ₹6,000",
    badge: "BEST VALUE",
    popular: false,
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Training",
      "Locker Access",
      "Fitness Assessment",
      "Nutrition Guidance",
      "Guest Pass Privileges"
    ],
    ctaText: "JOIN NOW"
  }
];
