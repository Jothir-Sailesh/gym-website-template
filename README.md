# JS FITNESS — Premium Athletic Gym & Fitness Studio Website

**JS FITNESS** is a high-end, cinematic sales demo and reusable website template designed for independent gyms, strength studios, and performance centers. Built from scratch with an athletic aesthetic, editorial typography, subtle motion physics, and direct WhatsApp enquiry conversion.

---

## ⚡ Tech Stack

- **Core**: React 18, TypeScript 5, Vite 5
- **Styling**: Tailwind CSS 3 (Custom theme tokens, hardware acceleration, custom scrollbar)
- **Motion & Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Google Fonts — **Oswald** (Display & Headings) and **Inter** (Body & UI)

---

## 🎨 Design & Color System

- **Primary Background**: Deep Near-Black (`#0A0A0A`)
- **Secondary Surface**: Dark Charcoal (`#151515`)
- **Elevated Cards**: Elevated Surface (`#1D1D1D`) with subtle borders (`#2A2A2A`)
- **Accent Color**: Premium Athletic Red (`#E10600`) — used for CTAs, active highlights, metrics, and hover states
- **Typography**:
  - `Oswald` (700 / Bold, Compact tracking `-0.02em`) for Display Headings, Program Titles, and Membership Prices.
  - `Inter` (400–700) for Body Copy, Navigation Links, UI Buttons, and Micro-Labels.

---

## 🚀 Key Features & 15 Core Sections

1. **0.8–1.2s Cinematic Loading Screen**: Brand mark reveal with an animated progress bar and clip-path exit transition.
2. **Desktop Custom Cursor**: Smooth magnetic circular follower with contextual triggers (`EXPLORE →`, `VIEW →`, `DRAG →`, `BOOK TRIAL`). Auto-disabled on mobile.
3. **Full-Screen Hero**: Cinematic athlete image, live studio metadata, scroll-linked parallax scaling (`1.08 → 1.00`), and direct trial CTAs.
4. **Scroll-Linked Manifesto**: Word-by-word progressive opacity reveal statement: *"YOU DON'T NEED MORE MOTIVATION. YOU NEED A STANDARD."*
5. **Why JS Fitness (Philosophy)**: Asymmetric layout detailing 3 core principles (01 TRAIN SMART, 02 TRAIN HARD, 03 STAY CONSISTENT) with expanding hover numbers.
6. **Core Programs**: Interactive program selector showcasing 6 protocols with duration, intensity, features, and WhatsApp launcher.
7. **Free Trial CTA Interruption**: High-impact mid-page dark section with dynamic pulse background.
8. **Training Floor & Gallery**: Asymmetric editorial image grid (*"BUILT FOR THE WORK"*) with hover scale effects.
9. **Master Coaches / Trainers**: High-contrast portrait cards showcasing coach roles, specializations, and quotes.
10. **Verified Transformations Showcase**: Interactive Before/After image comparison slider with a draggable handle (both images remain 100% stationary while sliding).
11. **Scroll-Triggered Animated Stats**: Count-up numeric animations for active athletes, coaches, programs, and square footage.
12. **Studio Admission & Membership**: Realistic INR membership plans (1 Month, 3 Months, 6 Months, 1 Year) with regular strikethrough pricing, dominant offer prices, savings badges, and WhatsApp integration.
13. **Environment & Culture (More Than A Gym)**: Section detailing squad culture, acoustics, performance tracking, and recovery lounge.
14. **Social Media Stream Grid**: Follow the work visual stream linked directly to Instagram.
15. **Athlete Testimonials**: Quote carousel slider with star ratings.
16. **Studio Location & Headquarters**: Operating hours (06:00 – 22:00), phone call link, WhatsApp link, and embedded Google Maps iframe.
17. **Final Contact / Trial Form**: Interactive goal selector pills, validation state, success view, and WhatsApp fallback redirect.
18. **Architectural Footer**: Oversized campaign display typography, quick navigation links, and legal notice.

---

## 🛠️ Reusable Data Architecture (`src/data/*.ts`)

The template is fully white-labelable. Customize all gym details, programs, coaches, and pricing without touching component code:

```
src/data/
├── business.ts         # Brand name, phone, WhatsApp number, hours, address, maps URLs
├── programs.ts         # 6 core training programs (Strength, Conditioning, Shred, PT, etc.)
├── trainers.ts         # Coach profiles, roles, and specializations
├── transformations.ts  # Before/After comparison image pairs & stories
├── stats.ts            # Facility & member metrics
├── membership.ts       # INR membership plans, regular prices, offer prices & savings
├── gallery.ts          # Editorial gym photography
└── testimonials.ts     # Member review cards
```

---

## 📲 WhatsApp & Communication Helpers

Direct deep-linking helpers are centralized in `src/utils/whatsapp.ts`:

- `getWhatsAppLink(customMessage)`: General WhatsApp enquiry.
- `getProgramWhatsAppLink(programName)`: Program-specific enquiry.
- `getTrialWhatsAppLink()`: Complimentary trial booking request.
- `getMembershipWhatsAppLink(duration)`: Plan-specific enquiry (*"Hi, I'm interested in the 6 Month membership plan. Please share the details."*).
- `getPhoneCallLink()`: Instant tap-to-call link for mobile users (`tel:+91...`).

---

## 💻 Getting Started & Local Development

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or navigate into the project directory:
   ```bash
   cd "Gym"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📱 Responsive & Accessibility Support

- Fully responsive across Desktop (`1440px`, `1280px`, `1024px`), Tablet (`768px`), and Mobile (`430px`, `390px`, `375px`, `360px`).
- Ergonomic touch targets (`>= 44px`).
- Respects `prefers-reduced-motion` settings.
- Zero horizontal overflow.

---

## 📄 License

This template is created for commercial demo and sales presentation use. All rights reserved.
