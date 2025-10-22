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
    company: "Microsoft",
    date: " Summer 2026",
    role: "Software Engineering Intern",
    description: [
      "SWE @ IDENTITY AND NETWORK ACCESS (BUSINESS SECURITY)"
    ]
  },
  {
    company: "Susquehanna International Group",
    date: "June 2025 - Auguest 2025 (Summer 2025)",
    role: "Software Engineering Intern",
    description: [
      "- Decreased tick-to-trade latency from 180μs to 120μs (33% improvement) through lock-free queue implementation and CPU affinity optimization.",
      "- Increased message processing throughput by 2.5× (from 400K to 1M messages/sec) by implementing SIMD vectorization in C++ market data parser.",
      "- Decreased P99 latency variance from 500μs to 50μs by eliminating GC pauses and implementing deterministic memory management.",
      "- Profiled and hardened systems across Linux/Windows using perf/VTune, flamegraphs, and sanitizers; eliminated two contention hot spots with lock‑free ring buffers, raised throughput 35%, increased integration test coverage from 55%→85%, and achieved 99.95% weekly SLA",
      "- Implemented P&L attribution system tracking $10M+ daily trading volume across 500+ instruments with <10ms latency."
    ]
  },
  {
    company: "Roblox",
    date: "June 2025 - Present",
    role: "Software Development Engineer / QA Engineering (Testing) (Remote)",
    description: [
      "- Shipped 10+ gameplay features in Lua/TypeScript, boosting DAU by 20% through core battle system updates.",
      "- Built real-time combat and sync logic for 1K+ concurrent users with sub-100ms latency using custom RPC.",
      "- Developed Python-based rollout tooling with latency tracing and integrity checks, cutting deploy risk by 60%."
    ]
  },
  {
    company: "WorldQuant",
    date: "March 2025 - Present",
    role: "Quantitative Research Consultant | converted from IQC 2025",
    description: [
      "- Delivered 15+ production-ready alphas by researching market microstructure and cross‑sectional factors in Python, resulting in simulated IC of 0.03–0.08 and Sharpe 1.2–2.1 across equities and ETFs.",
      "- Reduced data prep time 70% by building an automated pipeline (yfinance/Quandl/WRDS + SQL), performing survivorship-bias‑free joins, corporate action adjustments, and anomaly checks for 10+ years of daily and minute bars.",
      "- Improved signal robustness by implementing walk‑forward validation and Purged K‑Fold CV, cutting out‑of‑sample performance decay by 35% vs naive splits.",
      "- Increased alpha orthogonality 25% by applying z‑scoring, sector/size/volatility neutralization, and Barra‑style risk factor de‑biasing, leading to more stable portfolio IR.",
      "- Accelerated research iteration 4× by parallelizing parameter sweeps with joblib/Dask on AWS EC2, reducing a 6‑hour grid search to 90 minutes.",
      "- Lowered turnover 18% with execution-aware signal smoothing and volatility scaling, improving simulated net PnL after estimated 5–10 bps costs.",
      "- Enhanced code reliability by adding unit tests and reproducible notebooks (pytest + MLflow), reaching ~85% coverage and one‑click experiment replay.",
      "- Communicated results in weekly readouts to PMs, leading to 3 alphas advanced to paper‑trading and a 60–120 bps quarterly uplift in simulated multi‑alpha composites."
    ]
  },
  {
    company: "Corvid Technologies",
    date: "March 2025 - Present",
    role: "SOFTWARE ENGINEERING INTERN (VERITAS / MDA)",
    description: [
      " - Built gRPC data pipelines with Protobuf, reducing latency 3× (150ms→50ms) for 1M+ daily messages",
      " - Developed real-time signal simulation tools in C/C++, optimizing sensor propagation pipelines to handle classified workloads with up to 10x spatial fidelity, improving execution time by 35%.",
      " - Automated Linux-based simulations with Bash and CMake, improving cross-platform build consistency through POSIX sockets, reducing average compile times by 25% across heterogeneous HPC environments.",
      " - Designed a modular React/Node.js interface, reducing config time by 50% and supporting 5,000+ sub-second task calls/hour for 10+ users."
    ],
  },
  {
    company: "Madison CEO",
    date: "Aug 2023 - May 2024",
    role: "SOFTWARE ENGINEERING INTERN (CRM)",
    description: [
      " - Implemented 6 decoupled microservices using Java and Python with Spring Boot and Flask, handling 12,000+ daily API requests, leading to a 45% reduction in response latency and a 30% server load decrease.",
      " - Led a 6-member cross-functional team to deploy a key React-Redux feature, boosting platform engagement to 800+ daily active users, and increasing session time by 20% within 60 days.",
      " - Optimized 60+ complex MySQL queries, cutting page load times by 65% and improving database response throughput by 2.8x."
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
            className="bg-[#23272f] rounded-3xl p-10 shadow-lg flex flex-col min-h-[200px] justify-between border border-gray-700 hover:border-gray-500 transition-colors"
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