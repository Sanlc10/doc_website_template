# Implementation Plan: MedCare Website

**Role**: Senior Software Engineer (Claude Code)
**Objective**: Build a pixel-perfect replication of the MedCare design using React, Tailwind CSS, and Vite.

## 1. Project Setup & Configuration

- [ ] **Initialize Project**
  ```bash
  npm create vite@latest medcare-web -- --template react-ts
  cd medcare-web
  npm install
  ```

- [ ] **Install Dependencies**
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  npm install lucide-react clsx tailwind-merge
  ```

- [ ] **Configure Tailwind (`tailwind.config.js`)**
  - Import the design tokens from `design.json` (mentally or by referencing the file).
  - **Colors**:
    - Primary: `#F59E0B` (Amber-500)
    - Secondary: `#2DD4BF` (Teal-400)
    - Background Alt: `#FDFCF6`
  - **Fonts**: Add `Inter` or `Plus Jakarta Sans` via Google Fonts in `index.css`.
  - **Border Radius**: Add `pill: '9999px'` and `card: '24px'`.

## 2. Core Components (Atomic Design)

- [ ] **Button Component** (`src/components/ui/Button.tsx`)
  - Variants: `primary` (Solid Orange), `outline` (Bordered), `ghost` (Text only).
  - Props: `variant`, `size`, `icon`.
  - Style: Full pill shape, font-weight 600.

- [ ] **Card Component** (`src/components/ui/Card.tsx`)
  - Base styles: White bg, rounded-3xl, soft shadow, hover lift effect.

- [ ] **Section Wrapper** (`src/components/ui/Section.tsx`)
  - Standard padding (`py-24`), max-width container (`max-w-7xl mx-auto px-6`).

## 3. Layout Components

- [ ] **Navbar** (`src/components/layout/Navbar.tsx`)
  - Logo: "MediCare" (Icon + Text).
  - Links: Home, Services (Dropdown), About us (Dropdown), Contact.
  - Action: "Sign In" (Outline Button).
  - Mobile: Hamburger menu.

- [ ] **Footer** (`src/components/layout/Footer.tsx`)
  - Simple placeholder footer matching the clean aesthetic.

## 4. Feature Sections (Top to Bottom)

- [ ] **Hero Section** (`src/components/sections/Hero.tsx`)
  - **Left**:
    - H1: "Our Healthcare Solutions Meet Every Need"
    - Subtext: "With a team of experienced professionals..."
    - CTA: "Get Started" (Primary Button).
    - Stats: 400+ Doctors, 500+ Patients, 97% Satisfaction.
  - **Right**:
    - Image Composition: Use CSS Grid or absolute positioning to create the diagonal pill-shaped image collage.
    - *Tip*: Use `overflow-hidden` and `rounded-full` divs rotated 45deg for the masking effect if actual images aren't pre-masked.

- [ ] **Services Section** (`src/components/sections/Services.tsx`)
  - Background: `#FDFCF6` (Warm beige).
  - Header: "We Offer a Wide Range of Unique Services".
  - Grid: 3 Columns.
  - Cards:
    1. Virtual Consultation
    2. Make Appointment
    3. Online Pharmacy
  - Each card has an image, title, description, and a yellow circle arrow button.

- [ ] **Specialty/Features Section** (`src/components/sections/Specialty.tsx`)
  - **Left**: List of features (Reduce Administrative, Streamline Communications, etc.).
    - Style: Horizontal pill shapes with icon on left, text on right.
  - **Right**: Text content "Specialty Enrollment is Streamlined".

## 5. Assembly & Polish

- [ ] **App Entry** (`src/App.tsx`)
  - Assemble the page: `<Navbar />`, `<Hero />`, `<Services />`, `<Specialty />`, `<Footer />`.

- [ ] **Global Styles** (`src/index.css`)
  - Reset margins.
  - Apply smooth scrolling.
  - Set base font family.

## 6. Verification

- [ ] **Responsive Check**: Verify layout stacks correctly on mobile.
- [ ] **Hover States**: Ensure buttons and cards have interactive states.
- [ ] **Accessibility**: Check contrast ratios (especially orange text on white) and semantic HTML tags.
