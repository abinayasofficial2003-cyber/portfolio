"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Section3DWrapper from "@/components/Section3DWrapper";
import FullPageScrollContainer from "@/components/FullPageScrollContainer";

export default function Home() {
  return (
    <FullPageScrollContainer>
      <Section3DWrapper id="home">
        <HeroSection />
      </Section3DWrapper>

      <Section3DWrapper id="about">
        <AboutSection />
      </Section3DWrapper>

      <Section3DWrapper id="skills">
        <SkillsSection />
      </Section3DWrapper>

      <Section3DWrapper id="services">
        <ServicesSection />
      </Section3DWrapper>

      <Section3DWrapper id="approach">
        <ApproachSection />
      </Section3DWrapper>

      <Section3DWrapper id="work">
        <WorkSection />
      </Section3DWrapper>

      <Section3DWrapper id="testimonials">
        <TestimonialsSection />
      </Section3DWrapper>

      <Section3DWrapper id="contact">
        <ContactSection />
      </Section3DWrapper>
    </FullPageScrollContainer>
  );
}
