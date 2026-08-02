'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HeroSection } from '../fragments/HeroSection/HeroSection';
import { AboutSection } from '../fragments/AboutSection/AboutSection';
import { ExperienceSection } from '../fragments/ExperienceSection/ExperienceSection';
import { FeaturedWritingSection } from '../fragments/FeaturedWritingSection/FeaturedWritingSection';
import { NowSection } from '../fragments/NowSection/NowSection';
import { ContactSection } from '../fragments/ContactSection/ContactSection';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function HomepageContainer() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 md:py-16 flex flex-col gap-12 md:gap-20">
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <ExperienceSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <FeaturedWritingSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <NowSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}
