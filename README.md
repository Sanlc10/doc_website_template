# MedCare - Premium Healthcare Website

A modern, responsive healthcare website built with React, TypeScript, Vite, and Tailwind CSS. Features an elegant design with a sophisticated diagonal pill mask effect in the hero section, premium Phosphor icons, and a comprehensive contact form.

![MedCare Website](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

### 🎨 Premium Design
- **Elegant Color Palette**: Professional golden yellow (#fcbf49) and deep blue (#1a659e) theme
- **Playfair Display Serif Logo**: Sophisticated typography for brand identity
- **Phosphor Icons**: Premium duotone, bold, and fill weight icons throughout
- **Responsive Layout**: Mobile-first design that works perfectly on all devices

### 🏥 Healthcare-Focused Sections
- **Hero Section**: Stunning diagonal pill mask effect showcasing medical professionals
- **Services**: Virtual consultation, appointments, and online pharmacy
- **Specialty Features**: Streamlined enrollment and care coordination
- **Contact Form**: Professional appointment scheduling with validation
- **Opening Hours**: Clear business hours display

### 🚀 Technical Excellence
- **React 19**: Latest React with improved performance
- **TypeScript**: Full type safety throughout the application
- **Vite 7**: Lightning-fast HMR and optimized production builds
- **Tailwind CSS v3**: Utility-first styling with custom design system
- **Atomic Design**: Reusable component architecture (UI, Layout, Sections)

## 📁 Project Structure

```
├── public/
│   ├── hero-mask.svg          # SVG mask for hero image effect
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── doctor.png         # Hero section image
│   ├── components/
│   │   ├── ui/                # Button, Card, Section
│   │   ├── layout/            # Navbar, Footer
│   │   └── sections/          # Hero, Services, Specialty, Contact
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Global styles + Tailwind
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd doc_web_template

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Design System

### Colors
```javascript
Primary: #fcbf49 (Golden Yellow) - CTAs and highlights
Secondary: #1a659e (Deep Blue) - Accents and icons
Secondary Light: #e0f2fe - Light backgrounds
Neutral 900: #0b0f0f - Footer background
Background Alt: #FDFCF6 - Warm beige sections
```

### Typography
- **Logo**: Playfair Display (Serif, Bold)
- **Body**: Inter, Plus Jakarta Sans
- **Font Weights**: 400 (regular), 600-700 (headings)

### Components

#### UI Components
- **Button**: 3 variants (primary, outline, ghost) with 3 sizes
- **Card**: Hover lift effect with rounded corners
- **Section**: Consistent max-width container and padding

#### Layout Components
- **Navbar**: Sticky navigation with dropdowns and mobile menu
- **Footer**: Comprehensive footer with contact info and social links

#### Section Components
- **Hero**: Masked image effect with stats display
- **Services**: 3-column grid with medical service cards
- **Specialty**: Feature list with enrollment information
- **Contact**: Two-column layout with form and contact details

## 🎯 Key Features Explained

### Diagonal Pill Mask Effect
The hero section features a unique visual effect where the doctor image is visible through three diagonal pill-shaped slots. This is achieved using:
- SVG mask definition (`hero-mask.svg`)
- CSS `mask-image` property with vendor prefixes
- Single image container for cohesive appearance

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Phone number input
- Service selection dropdown
- Message textarea
- Blue focus states for better UX

### Responsive Design
- **Mobile**: Single column layout, hamburger menu
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full 3-column service grid, side-by-side layouts

## 📦 Dependencies

### Production
- `react` & `react-dom` (19.2.0) - UI library
- `@phosphor-icons/react` (2.1.10) - Premium icon library
- `clsx` & `tailwind-merge` - Utility for className merging

### Development
- `vite` (7.2.4) - Build tool
- `typescript` (5.9.3) - Type checking
- `tailwindcss` (3.4.18) - CSS framework
- `@vitejs/plugin-react` - React support for Vite
- `eslint` - Code linting

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect the Vite configuration
4. Deploy with one click!

**Configuration** (auto-detected):
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Other Platforms
The build output (`dist` folder) can be deployed to:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Configuration Files

### `vite.config.ts`
Vite configuration with React plugin

### `tailwind.config.js`
Custom Tailwind configuration with:
- Extended color palette
- Custom font families
- Border radius tokens (pill, card)
- Custom shadows
- Spacing utilities

### `tsconfig.json`
TypeScript configuration for type checking

## 📝 Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    main: '#your-color',
    hover: '#your-hover-color',
  },
  // ...
}
```

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `App.tsx`
3. Use `Section` wrapper for consistent spacing

### Modifying Forms
Edit `src/components/sections/Contact.tsx` to customize:
- Form fields
- Validation rules
- Submission handling
- Contact information

## 🔒 Security Notes
- Form includes client-side validation
- No sensitive data stored in client
- Ready for backend integration
- HTTPS recommended for production

## 📱 Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing
This is a template project. Feel free to:
- Fork and customize for your needs
- Report issues
- Suggest improvements

## 📄 License
This project is available for personal and commercial use.

## 🙏 Acknowledgments
- Design inspired by modern healthcare websites
- Icons by [Phosphor Icons](https://phosphoricons.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support
For questions or issues:
- Review the `CLAUDE.md` file for detailed technical documentation
- Check the component code in `src/components/`
- Refer to the design system in `tailwind.config.js`

---

**Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS**
