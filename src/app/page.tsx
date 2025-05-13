"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero, Education, Skills } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Experience } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
} 