"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experiences", href: "#experiences" }, // make edits to main page
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills"}
];

const experiences = [
  {
    company: "Corvid Technologies",
    date: "SUMMER 2025",
    role: "SOFTWARE DEVELOPMENT ENGINEERING INTERN",
    description: [
      " - Engineered high-throughput data pipelines using gRPC and Protocol Buffers, enabling low-latency, schema-enforced communication between distributed microservices.",
      " - Engineered high-performance simulation software in C/C++, optimizing compute pipelines for real-time signal propagation and sensor modeling used in classified defense systems.",
      " - Streamlined Linux-based simulations using Bash and CMake, improving build reliability and reducing compilation time across multi-platform environments. "
    ],
  },
  {
    company: "Madison CEO",
    date: "Aug 2023 - May 2024",
    role: "STUDENT FELLOW / INTERN",
    description: [
      " - Implemented a microservices architecture using Java and Python, improving API response times by 45% and reducing server load by 30% through service decoupling and optimization.",
      " - Orchestrated a 6-member cross-functional team to design and deploy a major React-Redux feature, resulting in a 30% increase in user engagement and a 20% rise in daily active users within two months Raised $6000 in seed funding.",
      " - Enhanced system performance by optimizing MySQL queries, cutting page load times by 65%, while actively engaging with 34 investors and collaborating with 8 board members to drive strategic growth."
    ]
  },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Adithya B.
        </motion.a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}

export function Experience() {
  return (
    <section id="experiences" className="py-20 bg-[#23272f] min-h-screen">
      <h2 className="text-6xl font-serif font-bold text-center mb-16 text-gray-100">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#23272f] rounded-3xl p-10 shadow-lg flex flex-col min-h-[260px] justify-between"
          >
            <div>
              <h3 className="text-3xl font-serif font-semibold text-white mb-4">{exp.company}</h3>
              <div className="flex items-center gap-6 mb-2 text-gray-200 text-sm uppercase font-medium">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-lg" />
                  {exp.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaBriefcase className="text-lg" />
                  {exp.role}
                </span>
              </div>
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-500" />
                <span className="mx-4 text-gray-400 text-xs tracking-widest font-semibold">
                  DUTIES & RESPONSIBILITIES
                </span>
                <div className="flex-1 border-t border-gray-500" />
              </div>
              <div className="text-gray-200 text-base font-medium">
                {Array.isArray(exp.description)
                  ? exp.description.map((line, i) => <div key={i}>{line}</div>)
                  : exp.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 