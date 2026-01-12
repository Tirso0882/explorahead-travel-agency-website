# ExplorAhead - Travel Agency Marketing Website

A modern, responsive marketing website for a travel agency, built with Next.js 16, TypeScript, and Tailwind CSS.

## 🎨 Features

### Design & User Experience

- **Immersive Hero Section** - Full-screen video/image backgrounds with smooth animations
- **Featured Destinations** - Interactive gallery showcasing travel destinations
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion for elegant transitions

### Pages

- **Home** - Hero section, featured destinations, services preview, testimonials
- **Destinations** - Searchable destination gallery (feature-flagged)
- **About** - Company story and team information
- **Contact** - Contact form with Formspree integration
- **Legal** - Privacy policy, terms of service, cookies policy

### Internationalization

- **Multi-language Support** - English and Polish translations with next-intl
- **Locale Routing** - Automatic locale detection and routing
- **Easy to Extend** - Add more languages by creating translation files

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Forms**: Formspree (contact form submission)
- **Notifications**: React Hot Toast

## 📦 Installation

### Prerequisites

- Node.js 18+ (recommended: 24.1.0)
- npm or yarn

### Setup

**1. Clone the repository:**

```bash
git clone https://github.com/Tirso0882/explorahead-travel-agency-website.git
cd travel-agent-site
```

**2. Install dependencies:**

```bash
npm install
```

**3. Set up environment variables:**

```bash
# Create .env.local file
NEXT_PUBLIC_APP_NAME=<app_name>
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**4. Get a Formspree endpoint:**

- Sign up at [https://formspree.io](https://formspree.io) (free tier available)
- Create a new form
- Copy your form ID and add it to `.env.local`

**5. Run the development server:**

```bash
npm run dev
```

**6. Open your browser:**

Visit [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Static Export

This project is configured for static export, making it perfect for hosting on GitHub Pages, Netlify, or Vercel:

```bash
npm run build
```

The static files will be in the `out/` directory.

## 📂 Project Structure

```
travel-agent-site/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── (marketing)/       # Marketing pages
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── destinations/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   └── layout.tsx
│   ├── globals.css            # Global styles + design system
│   └── layout.tsx
├── components/
│   ├── marketing/             # Marketing page components
│   │   ├── Hero.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── HowItWorks.tsx
│   │   └── ...
│   └── ui/                    # Reusable UI components
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       └── ...
├── config/
│   ├── features.ts            # Feature flags
│   └── media.ts              # Media configuration
├── lib/
│   └── i18n/                  # Internationalization config
├── messages/
│   ├── en.json               # English translations
│   └── pl.json               # Polish translations
├── public/
│   ├── images/               # Static images
│   └── videos/               # Static videos
└── middleware.ts             # Next.js middleware (i18n)
```

## 🎨 Design System

### Color Palette

- **Sand** (`#F5E6D3`) - Warm backgrounds
- **Ocean** (`#1A365D`) - Primary text and accents
- **Gold** (`#D4A574`) - Highlights and CTAs
- **Terracotta** (`#C4785A`) - Secondary accents
- **Forest** (`#2D5A45`) - Success states

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

### Custom CSS Variables

See `app/globals.css` for the complete design system including spacing, colors, and utility classes.

## 🌐 Deployment

### GitHub Pages

This repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

**Setup:**

1. Go to your GitHub repository settings
2. Navigate to Pages
3. Set Source to "GitHub Actions"
4. Push to `main` branch to trigger deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Connect your GitHub repository
2. Add environment variables (if needed)
3. Deploy

### Netlify (Alternative)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Add environment variables (if needed)

## ⚙️ Configuration

### Feature Flags

Enable/disable features in `config/features.ts`:

```typescript
export const features = {
  destinations: true,  // Enable destinations page
  // Add more features here
};
```

### Media Configuration

Configure hero images/videos in `config/media.ts`.

### Internationalization

Add new languages:

1. Create a new file in `messages/` (e.g., `es.json`)
2. Copy structure from `en.json` and translate
3. Update `lib/i18n/request.ts` to include the new locale

## 🔒 Environment Variables

Create a `.env.local` file:

```env
# App Name
NEXT_PUBLIC_APP_NAME=ExplorAhead

# Contact Form (Formspree)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## 📈 Performance

- **Static Export**: Pre-rendered pages for instant loading
- **Image Optimization**: Uses Next.js Image component where possible
- **Code Splitting**: Automatic route-based code splitting
- **Animations**: GPU-accelerated with Framer Motion
- **Lighthouse Score**: Target 90+ for all metrics

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.

## 📄 License

All rights reserved.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Formspree Documentation](https://help.formspree.io/)

---

**Built with ❤️ by RedKraken Tech**
