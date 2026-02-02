# Chaitanya (Deemed to be University) - Official Website

A modern, production-ready university website built with Next.js 16, featuring a comprehensive design system, Supabase backend integration, and optional Strapi CMS support.

## Features

- **Modern Stack**: Next.js 16.1.5 with App Router and Turbopack
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Accessibility**: WCAG 2.1 AA compliant with skip-to-content, proper focus management
- **Performance**: Optimized images, lazy loading, code splitting
- **SEO Ready**: Dynamic sitemap, robots.txt, structured data (JSON-LD)
- **PWA Support**: Web app manifest with installable support
- **Security**: CSP headers, rate limiting, input sanitization
- **Analytics**: Google Analytics 4 integration
- **Forms**: Contact, newsletter, admission inquiry with Zod validation
- **Animations**: Smooth transitions with Framer Motion
- **Theme Support**: Light/dark mode with system preference detection

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS-based configuration
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **CMS**: [Strapi v5](https://strapi.io/) (optional)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Fonts**: Montserrat (headings) + Merriweather (body) via next/font

## Prerequisites

- Node.js 18.17 or later
- npm 9+ or pnpm 8+
- Supabase account (for backend functionality)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/chaitanya-university.git
cd chaitanya-university
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file and configure your variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration (see [Environment Variables](#environment-variables) section).

### 4. Set Up Supabase Database

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the database setup script:

```bash
# In your Supabase SQL Editor, run the contents of:
supabase/setup.sql
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Required Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_STRAPI_URL` | Strapi CMS URL |
| `STRAPI_API_TOKEN` | Strapi API token |
| `RESEND_API_KEY` | Resend API key for emails |
| `REVALIDATION_SECRET` | ISR revalidation secret |

See `.env.local.example` for the complete list.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (public)/          # Public pages (home, about, academics, etc.)
│   ├── api/               # API routes (contact, newsletter, admission)
│   ├── layout.tsx         # Root layout with providers
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # Robots.txt configuration
│   └── manifest.ts        # PWA manifest
├── components/
│   ├── forms/             # Form components (Contact, Newsletter, Search)
│   ├── home/              # Homepage-specific components
│   ├── layout/            # Layout components (Header, Footer, Navigation)
│   ├── providers/         # Context providers (Theme, Analytics)
│   ├── shared/            # Reusable components (Cards, Gallery, Video)
│   └── ui/                # Base UI components (Button, Card, Input)
├── data/                  # Static data (programs, departments, etc.)
├── lib/
│   ├── supabase/          # Supabase client and types
│   ├── strapi/            # Strapi CMS client and queries
│   └── utils/             # Utility functions (rate limiting, etc.)
├── styles/
│   ├── globals.css        # Global styles and Tailwind imports
│   └── fonts.css          # Typography guidelines
└── types/                 # TypeScript type definitions
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## Database Schema

The Supabase database includes the following tables:

- **contact_inquiries** - Contact form submissions
- **newsletter_subscribers** - Newsletter subscriptions
- **admission_inquiries** - Admission form submissions
- **event_registrations** - Event registration data
- **page_views** - Analytics tracking (optional)
- **site_settings** - Dynamic site configuration

All tables include Row Level Security (RLS) policies. See `supabase/setup.sql` for the complete schema.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed on any platform that supports Next.js:

- **AWS Amplify**: Full Next.js support
- **Netlify**: Use the Next.js runtime
- **Docker**: Use the included `Dockerfile` (if available)

### Production Checklist

- [ ] Set all required environment variables
- [ ] Run database migrations/setup
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure analytics
- [ ] Test all forms and API endpoints
- [ ] Verify SEO meta tags
- [ ] Test PWA functionality
- [ ] Set up error tracking (Sentry)

## Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, stats, programs |
| About | `/about` | University overview, vision, mission |
| Leadership | `/about/leadership` | Chancellor, Vice-Chancellor profiles |
| Programs | `/academics/programs` | All academic programs |
| Program Detail | `/academics/programs/[slug]` | Individual program details |
| Departments | `/academics/departments` | Academic departments |
| Admissions | `/admissions` | Admission process, eligibility |
| Contact | `/contact` | Contact form, locations, map |
| News | `/news` | Latest news and announcements |
| Events | `/campus-life/events` | Upcoming events |
| Facilities | `/campus-life/facilities` | Campus facilities |
| Placements | `/placements` | Placement statistics, recruiters |

## Typography System

The project uses a comprehensive typography system:

- **Montserrat**: Headings, navigation, UI elements
- **Merriweather**: Body text, paragraphs, articles

See `src/styles/fonts.css` for detailed typography guidelines.

## Color Palette

- **Primary (Chaitanya Red)**: `#D33E42` - Buttons, links, accents
- **Secondary (Deep Purple)**: `#270114` - Headers, emphasis
- **Background**: White/off-white tones
- **Text**: Dark gray for readability

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/newsletter` | POST | Subscribe to newsletter |
| `/api/admission-inquiry` | POST | Submit admission inquiry |
| `/api/events/register` | POST | Register for event |

All API routes include:
- Rate limiting
- Input validation with Zod
- Sanitization
- Error handling

## Security Features

- **Content Security Policy (CSP)**: Prevents XSS attacks
- **HSTS**: Enforces HTTPS
- **X-Frame-Options**: Prevents clickjacking
- **Rate Limiting**: Protects against abuse
- **Input Sanitization**: Prevents injection attacks
- **CSRF Protection**: On form submissions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software for Chaitanya (Deemed to be University).

## Support

For technical support or questions:
- Email: it@chaitanya.edu.in
- Phone: +91-8418-278899

---

Built with Next.js by the Chaitanya University IT Team
