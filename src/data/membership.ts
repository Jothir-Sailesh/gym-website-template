import { MembershipPlan } from '../types';

export const membershipData: MembershipPlan[] = [
  {
    id: "plan-monthly",
    name: "MONTHLY PASS",
    price: "TEMPLATE PRICE",
    period: "PER MONTH",
    badge: "FLEXIBLE",
    popular: false,
    features: [
      "Full Training Floor Access",
      "Biometric Body Screening",
      "Locker & Recovery Zone Access",
      "Standard Class Enrollment",
      "Mobile App Tracking"
    ],
    ctaText: "GET MEMBERSHIP DETAILS"
  },
  {
    id: "plan-quarterly",
    name: "QUARTERLY ATHLETE",
    price: "TEMPLATE PRICE",
    period: "EVERY 3 MONTHS",
    badge: "MOST POPULAR",
    popular: true,
    features: [
      "All Monthly Pass Privileges",
      "1-on-1 Strategy & Assessment",
      "Customized Nutrition Blueprint",
      "Guest Pass Privileges (2/mo)",
      "Priority Squad Reservations"
    ],
    ctaText: "GET MEMBERSHIP DETAILS"
  },
  {
    id: "plan-annual",
    name: "ANNUAL MASTERY",
    price: "TEMPLATE PRICE",
    period: "PER YEAR",
    badge: "BEST VALUE",
    popular: false,
    features: [
      "Unlimited 365-Day Access",
      "4x Personal Coaching Vouchers",
      "Quarterly VO2 & Muscle Scans",
      "Exclusive JS FITNESS Merch Pack",
      "Free VIP Recovery Lounge Passes"
    ],
    ctaText: "GET MEMBERSHIP DETAILS"
  },
  {
    id: "plan-pt",
    name: "1-ON-1 COACHING",
    price: "CUSTOM RATE",
    period: "PER PROGRAM",
    badge: "VIP EXPERIENCE",
    popular: false,
    features: [
      "100% Dedicated Master Coach",
      "Custom Macro & Meal Planning",
      "Biomechanical Video Reviews",
      "Unlimited Direct Messaging",
      "Guaranteed Results Protocol"
    ],
    ctaText: "BOOK COACHING ENQUIRY"
  }
];
