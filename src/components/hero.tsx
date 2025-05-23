"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { SiCplusplus, SiPython, SiSwift, SiPostgresql, SiMongodb, SiGit, SiGithub, SiDjango, SiDocker, SiC, SiR, SiApachespark, SiApachekafka, SiApachehadoop, SiPlotly, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiPytorch, SiAmazon, SiGooglecloud, SiLangchain, SiJira, SiTerraform, SiCmake } from "react-icons/si";
import { FaJava, FaRegCircle, FaDatabase, FaCloud, FaCalculator, FaChartLine, FaAws } from "react-icons/fa";

function AnimatedHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute inset-0 z-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="h-6 w-6 rounded-full border-2 border-foreground"
      />
    </motion.div>
  );
}

const skills = [
  { icon: <SiPython color="#3776AB" />, label: "Python" },
  { icon: <SiCplusplus color="#00599C" />, label: "C++" },
  { icon: <SiC color="#A8B9CC" />, label: "C" },
  { icon: <FaJava color="#007396" />, label: "Java" },
  { icon: <SiR color="#276DC3" />, label: "R" },
  { icon: <FaRegCircle color="#4EAA25" />, label: "Bash" },
  { icon: <FaDatabase color="#F29111" />, label: "Cassandra" },
  { icon: <FaDatabase color="#00758F" />, label: "MySQL" },
  { icon: <FaDatabase color="#22ADF6" />, label: "InfluxDB" },
  { icon: <FaCloud color="#0078D4" />, label: "Azure" },
  { icon: <SiApachespark color="#E25A1C" />, label: "Apache Spark" },
  { icon: <SiApachekafka color="#231F20" />, label: "Apache Kafka" },
  { icon: <SiApachehadoop color="#66CCFF" />, label: "Apache Hadoop" },
  { icon: <SiPlotly color="#3F4F75" />, label: "Matplotlib" },
  { icon: <SiNumpy color="#013243" />, label: "Numpy" },
  { icon: <SiPandas color="#150458" />, label: "Pandas" },
  { icon: <SiScikitlearn color="#F7931E" />, label: "Scikit-learn" },
  { icon: <SiTensorflow color="#FF6F00" />, label: "TensorFlow" },
  { icon: <SiKeras color="#D00000" />, label: "Keras" },
  { icon: <SiPytorch color="#EE4C2C" />, label: "PyTorch" },
  { icon: <FaCalculator color="#FF6F00" />, label: "MATLAB" },
  { icon: <FaChartLine color="#00A86B" />, label: "Zipline" },
  { icon: <SiPostgresql color="#336791" />, label: "PostgreSQL" },
  { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
  { icon: <SiGit color="#F05032" />, label: "Git" },
  { icon: <SiGithub color="#181717" />, label: "GitHub" },
  { icon: <SiDjango color="#092E20" />, label: "Django" },
  { icon: <SiDocker color="#2496ED" />, label: "Docker" },
  { icon: <FaAws color="#FF9900" />, label: "AWS" },
  { icon: <SiGooglecloud color="#4285F4" />, label: "GCP" },
  { icon: <SiLangchain color="#00A67E" />, label: "Langchain" },
  { icon: <SiJira color="#0052CC" />, label: "Jira" },
  { icon: <SiTerraform color="#7B42BC" />, label: "Terraform" },
  { icon: <FaRegCircle color="#0056B3" />, label: "CMake" },
  // Add more as needed
];

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Social Bar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        {/* Add your LinkedIn and Email below if you want */}
        {/* <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-blue-700 p-3 rounded-full transition">
          <Linkedin className="text-white w-6 h-6" />
        </a> */}
        <a href="https://github.com/ab0626" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 p-3 rounded-full transition">
          <Github className="text-white w-6 h-6" />
        </a>
        <a href="mailto:adithya35756@gmail.com" className="bg-gray-700 hover:bg-gray-900 p-3 rounded-full transition">
          <Mail className="text-white w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/adithya-b-/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 p-3 rounded-full transition">
          <Linkedin className="text-white w-6 h-6" />
        </a>
        <a href="/resume.pdf" download className="bg-gray-700 hover:bg-gray-900 p-3 rounded-full transition">
          <span className="text-white text-sm">Resume</span>
        </a>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center w-full z-10">
        <span className="text-gray-300 text-lg mb-2 tracking-widest self-center -ml-96">I&apos;M</span>
        <h1 className="text-white text-7xl md:text-8xl font-serif font-bold tracking-tight mb-2">ADITHYA</h1>
        <span className="text-gray-400 text-2xl tracking-widest mt-2 self-center ml-[30rem]">SOFTWARE ENGINEER</span>
      </div>
    </section>
  );
}

export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-12 py-6 fixed top-0 left-0 z-30 bg-transparent">
      <span className="text-white text-2xl font-serif font-bold">ADITHYA B.</span>
      <div className="flex gap-8 items-center">
        <a href="#about" className="text-white font-medium hover:underline">About</a>
        <a href="#education" className="text-white font-medium hover:underline">Education</a>
        <a href="#experiences" className="text-white font-medium hover:underline">Experiences</a>
        <a href="#projects" className="text-white font-medium hover:underline">Projects</a>
        <a href="#skills" className="text-white font-medium hover:underline">Skills</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 bg-background">
      <h2 className="text-6xl font-serif font-bold text-center mb-16">Education</h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#23272f] rounded-3xl p-10 flex-1 min-w-[320px] shadow-lg">
          <h3 className="text-4xl font-serif font-semibold mb-2">University of Alabama at Huntsville</h3>
          <p className="text-lg text-gray-400 mb-1">Huntsville, AL</p>
          <p className="text-xl font-medium mb-4">Bachelor of Science in Computer Science, Minor in Mathematics</p>
          <hr className="my-4 border-gray-600" />
          <div className="text-center text-gray-400 mb-4 font-medium tracking-wide">Relevant Coursework</div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-serif font-semibold mb-2">Computer Science</h4>
              <ul className="list-disc list-inside text-lg text-gray-200">
                <li>CS 121 - Computer Science I</li>
                <li>CS 214 - Discrete Mathematics </li>
                <li>CS 221 - Computer Science II: Data Structures + Algorithms </li>
                <li>CS 309/309L - Computer Org & Switching Theory + Lab </li>
                <li>CS 317 - Intro Design/Analysis of Algorithms </li>
                <li>CS 321 - Intro Object-Oriented Prog Java </li>
                <li>CS 330 - Artificial Intelligence & Game Dev </li>
                <li>CS 370 - Intro to Computer Networks</li>
                <li>CS 413/413L - Intro to Digital Comp Architecture + Lab </li>
                <li>CS 424 - Principles Programming Language </li>
                <li>CS 453 - Client/Server Architecture </li>
                <li>CS 465  Network Security </li>
                <li>CS 490 - Intro to Operating Systems </li>
                <li>CS 499 - Sr Project: Team Software Design </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-serif font-semibold mb-2">Mathematics</h4>
              <ul className="list-disc list-inside text-lg text-gray-200">
                <li>MA 171 - Calculus I</li>
                <li>MA 172 - Calculus II</li>
                <li>MA 201 - Calculus III</li>
                <li>MA 238 - Appl Differential Equations </li>
                <li>MA 244 - Intro to Linear Algebra</li>
                <li>MA 385 - Intro to Probability & Statistics</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card 2 Example (remove or edit as needed) */}
        <div className="bg-[#23272f] rounded-3xl p-10 flex-1 min-w-[320px] shadow-lg">
          <h3 className="text-4xl font-serif font-semibold mb-2">University of Alabama at Huntsville, College of Business</h3>
          <p className="text-lg text-gray-400 mb-1">Huntsville, AL</p>
          <p className="text-xl font-medium mb-4">Minor of Business Administration</p>
          <hr className="my-4 border-gray-600" />
          <div className="text-center text-gray-400 mb-4 font-medium tracking-wide">Relevant Coursework</div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-serif font-semibold mb-2">Economics</h4>
              <ul className="list-disc list-inside text-lg text-gray-200">
                <li>ECON 142 - Princ of Macroeconomics</li>
                <li>ECON 143 - Princ of Microeconomics</li>
                <li>ECON 340 - Macro Economic Analysis</li>
                <li>ECON 345 - Micro Economic Analysis</li>
                <li>ECON 352 - Money and Banking</li>
                <li>ECON 445 - Applied Game Theory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Activities & Societies and Scholarships & Awards */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch max-w-6xl mx-auto mt-12">
        {/* Activities & Societies Card */}
        <div className="bg-[#23272f] rounded-3xl p-10 flex-1 min-w-[320px] shadow-lg">
          <h3 className="text-4xl font-serif font-semibold mb-2">Activities & Societies</h3>
          <p className="text-lg text-gray-400 mb-4">University of Alabama at Huntsville</p>
          <ul className="list-disc list-inside text-lg text-gray-200">
            <li>College of Science - Student Ambassador</li>
            <li>Association of Computing Machinery - Membership Chair</li>
            <li>Data Science And Ai Club - Vice President</li>
            <li>ICPC - Vice President</li>
            <li>Space Hardware Club</li>
          </ul>
        </div>
        {/* Scholarships & Awards Card */}
        <div className="bg-[#23272f] rounded-3xl p-10 flex-1 min-w-[320px] shadow-lg">
          <h3 className="text-4xl font-serif font-semibold mb-2">Scholarships & Awards</h3>
          <p className="text-lg text-gray-400 mb-4">University of Alabama at Huntsville</p>
          <ul className="list-disc list-inside text-lg text-gray-200">
            <li>College of Science Ambassador - 15 selected out of 1000+ applicants to guide incoming students</li>
            <li>College of Science CS Ambassador - 1 selected out of 800+ applicants to faciliate CS students and faculty at expos, lectures and new course introductions</li>
            <li>Merit scholarship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-24">
      {/* Experiences content */}
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-background">
      <h2 className="text-6xl font-serif font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-8 justify-center max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-[#23272f] rounded-2xl p-4 shadow-md"
            title={skill.label}
          >
            <span className="text-5xl mb-2">{skill.icon}</span>
            {/* <span className="text-xs text-gray-400">{skill.label}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
} 