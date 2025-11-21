# Refinement Instructions for Claude Code

**Role**: Senior Software Engineer
**Objective**: Refine the existing MedCare website (`http://localhost:5174/`) to meet new premium design requirements and fix visual issues.

## 1. Color Palette Updates
**Requirement**: Update the color system with the specific hex codes provided.
- **Action**: Update `tailwind.config.js` and CSS variables.
  - **Primary (Yellow/Amber)**: Change from default yellow to `#fcbf49`.
  - **Secondary (Green/Teal)**: Change from default teal to `#1a659e` (Deep Blue).
  - **Footer Background**: Change to `#0b0f0f` (Almost Black).
  - **Text on Footer**: Ensure text is white/gray-300 for contrast.

## 2. Hero Image "Diagonal Pill Mask" Effect (Strict Implementation)
**Requirement**: The current implementation has disordered pills with icons inside. This is INCORRECT.
**Goal**: A **SINGLE** large image of a doctor (or medical team) that is masked by three diagonal pill shapes.
- **Visual Reference**: Think of it as looking at one photo through three diagonal slots.
- **Implementation Strategy**:
  - **Do NOT** create 3 separate `div`s with different background images.
  - **Do NOT** put icons inside these pills.
  - **Technique**: Use CSS `mask-image` (Best Approach).
    1.  Create an SVG mask file `public/hero-mask.svg`:
        ```svg
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <rect id="pill" x="0" y="0" width="110" height="450" rx="55" />
          </defs>
          <g transform="rotate(45 250 250)">
             <!-- Three parallel pills -->
             <use href="#pill" x="80" y="25" />
             <use href="#pill" x="200" y="25" />
             <use href="#pill" x="320" y="25" />
          </g>
        </svg>
        ```
    2.  Apply to the image container:
        ```css
        .hero-masked-image {
          mask-image: url('/hero-mask.svg');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          /* Ensure the image fills the container */
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        ```
    3.  **Fallback Strategy (if mask fails)**:
        - Create a container `relative`.
        - Create 3 absolute `div`s (the pills), rotated 45deg.
        - Set `overflow-hidden` on each pill.
        - Inside *each* pill, place the **SAME** image.
        - Use negative margins/positioning on the inner image to align it perfectly so the parts match up to form one continuous image.
        - *Note*: The SVG mask method is much preferred.

## 3. Iconography Overhaul
**Requirement**: Replace all current icons with **Phosphor Icons**.
- **Action**:
  - Uninstall `lucide-react`.
  - Install `@phosphor-icons/react`.
  - Use `Regular` or `Duotone` weight.
  - **Replacements**:
    - "Get Started" arrow -> `ArrowRight`
    - Service icons -> `Stethoscope`, `Pill`, `VideoCamera`.
    - Social icons -> `FacebookLogo`, `TwitterLogo`, etc.

## 4. Logo & Typography
**Requirement**: Elegant text-only logo.
- **Action**:
  - Remove any heart/cross icons from the logo.
  - Font: **Playfair Display** (Bold).
  - Text: "MediCare".

## 5. NEW: Contact Section Implementation
**Requirement**: Add a new "Contact Us" section matching the reference image style (Clean, White Cards on Light Blue Background).
- **Location**: Add this section above the Footer.
- **Background**: Use `bg-secondary-light` (The light blue color defined in tailwind).
- **Layout**: 2 Columns (Left: Form, Right: Info).
- **Left Column (Form)**:
  - **Card Style**: White background, rounded-card, shadow-card, p-8.
  - **Title**: "Schedule an Appointment Today!" (Serif font, text-primary-main or neutral-900).
  - **Fields**:
    - **Row 1**: First Name, Last Name.
    - **Row 2**: Email Address.
    - **Row 3**: Phone Number.
    - **Row 4**: Service (Dropdown/Select).
    - **Row 5**: Message (Textarea).
  - **Button**: Full width, "Send Message", `bg-secondary-main` (Blue), rounded-pill.
- **Right Column (Info)**:
  - **Header**: "GET IN TOUCH" (Small, uppercase, tracking-wide, text-secondary-main).
  - **Title**: "Contact Information" (Serif, Large).
  - **Description**: "Have questions or ready to schedule your appointment? Contact us through any of the following channels..."
  - **Contact Items**:
    - Phone Icon (Circle Blue bg) + Phone Number.
    - Email Icon (Circle Blue bg) + Email Address.
  - **Hours Card**:
    - White background, rounded-card, p-6.
    - Title: "Opening Hours" (Serif).
    - Content:
      - Mon - Fri: 8:00 AM - 6:00 PM
      - Saturday: 9:00 AM - 4:00 PM
      - Sunday: Closed

## 6. Execution Steps
1.  **Update Colors**: Modify `tailwind.config.js` with `#fcbf49`, `#1a659e`, `#0b0f0f`.
2.  **Install Fonts/Icons**: Add Playfair Display, install Phosphor Icons.
3.  **Fix Hero**: Delete the current "floating pills with icons" component. Replace with the **Single Masked Image** component.
4.  **Create Contact Section**: Build `src/components/sections/Contact.tsx` following the specs above.
5.  **Refactor**: Update Navbar, Footer, and Services to use new colors and icons.
6.  **Verify**: Check the hero image looks like a single cohesive photo, not random shapes.
