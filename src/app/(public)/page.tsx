import {
  Hero,
  StatsBar,
  QuickAccess,
  WhyChaitanya,
  NewsEvents,
  Testimonials,
  PlacementPartners,
  Accreditations,
  AboutChancellor,
  CTASection,
} from '@/components/sections';
import { AcademicSchools } from '@/components/sections/AcademicSchools';

export default function HomePage() {
  return (
    <>
      {/* Hero with slideshow and glassmorphic elements */}
      <Hero />

      {/* Animated stats counters */}
      <StatsBar />

      {/* Rankings & Accreditations */}
      <Accreditations />

      {/* About Chancellor */}
      <AboutChancellor />

      {/* Academic Schools grid */}
      <AcademicSchools />

      {/* Persona-based quick access portals */}
      <QuickAccess />

      {/* Why choose Chaitanya section */}
      <WhyChaitanya />

      {/* Latest news and events */}
      <NewsEvents />

      {/* Student testimonials */}
      <Testimonials />

      {/* Placement partners marquee - social proof */}
      <PlacementPartners />

      {/* Final CTA for applications */}
      <CTASection />
    </>
  );
}
