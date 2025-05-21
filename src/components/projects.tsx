"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { FaGlobe, FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "AI/ML Sentiment-Based Trading Bot",
    description: [
      `developed a real-time SPY trading bot using FinBERT sentiment scores on financial news, achieving a 22.3% annualized return and Sharpe ratio of 1.42 in backtests over 5 years.`,
      `Integrated Hugging Face Transformers, Alpaca API, and Lumibot into a live pipeline with WebSocket-based execution and dynamic risk management, enabling real-time buy/sell automation.`,
      `Enhanced strategy evaluation using quantstats-lumi to generate full performance reports, including drawdown analysis, backtest results, win/loss ratio, and monthly returns, streamlining tuning and validation.`,
    ],
    tech: "Python, Hugging Face, FinBERT, Alpaca API, Quantstats, Lumibot, yfinance, PyTorch",
    github: "https://github.com/ab0626/ML-Trading-Bot"
  },
  {
    number: "02",
    title: "Distributed Task Queuing System",
    description: [
      `Designed a fault-tolerant distributed job processing system using Go, Redis, and Docker, supporting parallel execution with retry strategies and a DLQ for failed tasks.`,
      `Enhanced system with Prometheus + Grafana to track metrics such as queue depth, task success/failure ratios, and worker performance in real time.`
    ],
    tech: "Golang, Redis, Docker, Prometheus, Grafana, PostgreSQL, Celery",
    github: "https://github.com/ab0626/Distributed-Task-Queuing-System",
    website: ""
  },
  {
    number: "03",
    title: "Multi-Threaded Web Server",
    description: [
      `Implemented a multi-threaded web server in C++ with POSIX Sockets and Boost. Asio is designed to efficiently handle over 100+ concurrent client connections and support dynamic content generation.`
    ],
    tech: "C++, POSIX Sockets, Boost.Asio",
    github: "https://github.com/ab0626/Batch",
    website: ""
  },
  {
    number: "04",
    title: "CueAI (Precision Pool Simulator)",
    description: [
      `CueAI is a high-fidelity pool simulation app designed to predict cue ball and object ball behavior based on input parameters like shot angle, speed, spin, and table imperfections. It incorporates advanced physics simulations, machine learning calibration, and a simple user interface to provide an interactive and accurate pool shot prediction tool.`
    ],
    tech: "Python, PyTorch, Scikit-learn, OpenCV, PyQt",
    github: "https://github.com/ab0626/CueAI",
    website: ""
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#181f2a] min-h-screen">
      <h2 className="text-6xl font-serif font-bold text-center mb-16 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="relative bg-transparent">
            {/* Large faded number */}
            <span className="absolute left-0 top-0 text-[8rem] font-bold text-gray-600/10 select-none pointer-events-none z-0">
              {project.number}
            </span>
            <div className="relative z-10 p-2">
              <h3 className="text-3xl font-serif font-bold mb-2 text-white">{project.title}</h3>
              {project.description.map((para, i) => (
                <p key={i} className="mb-4 text-gray-200">{para}</p>
              ))}
              <p className="italic text-gray-400 mb-6">
                <span className="font-semibold">Technologies Used:</span> {project.tech}
              </p>
              <div className="flex gap-4">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-background transition"
                  >
                    <FaGlobe className="inline mr-2" /> Website
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-background transition"
                >
                  <FaGithub className="inline mr-2" /> Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 