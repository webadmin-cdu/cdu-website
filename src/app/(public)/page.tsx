import {
  Hero,
  StatsBar,
  WhyChaitanya,
  NewsEvents,
  Testimonials,
  PlacementPartners,
  Accreditations,
  AboutChancellor,
  AboutViceChancellor,
  BannerSlider,
  InstitutionalGoals,
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

      {/* About Vice Chancellor */}
      <AboutViceChancellor />

      {/* Vision, Mission & Institutional Goals */}
      <InstitutionalGoals />

      {/* Academic Schools grid */}
      <AcademicSchools />

      {/* Promotional Banner Slider */}
      <BannerSlider />

      {/* Latest news and events */}
      <NewsEvents />

      {/* Why choose Chaitanya section */}
      <WhyChaitanya />

      {/* Student testimonials */}
      <Testimonials />

      {/* Placement partners marquee - social proof */}
      <PlacementPartners />

      {/* Final CTA for applications */}
      <CTASection />
    </>
  );
}
