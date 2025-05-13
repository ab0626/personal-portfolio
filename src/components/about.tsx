"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "Python",
  "C++",
  "Machine Learning",
  "React",
  "TypeScript",
  "Node.js",
  "Redis",
  "Docker",
  "AWS",
];

export function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-16 bg-background">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        <Image
          src="/profile.jpg"
          alt="Adithya Bellamkonda"
          width={300}
          height={300}
          className="border-4 border-white shadow-lg"
        />
        <div className="text-center flex-1">
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="mb-6 text-2xl font-bold">
            My name is Adithya, and I love learning, building, and exploring.
          </p>
          <p className="mb-6 text-xl">
            I study CS and Economics at the University of Alabama in Huntsville with a minor in math. I'm
            currently most interested in Imbedded Systems, Machine Learning, Financial Markets,
            and reading, and playing the electric guitar. I love talking to people about anything and everything.
            In my free time, I like to play pool, table tennis, and cook.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-200 text-left mx-auto" style={{ maxWidth: 320 }}>
            <li className="font-semibold flex items-center gap-2 mb-2">
              <span role="img" aria-label="headphones">🎧</span> Currently Listening to:
            </li>
            <li>Drake</li>
            <li>Playboi Carti</li>
            <li>Daniel Caesar</li>
            <li>Travis Scott</li>
            <li>SZA</li>
            <li>Lil Uzi Vert</li>
            <li>Frank Ocean</li>
            <li>The Weeknd</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

<section id="skills">
  {/* Your skills content here */}
</section> 