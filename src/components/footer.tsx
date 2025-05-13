"use client";

import { motion } from "framer-motion";
import { Experience } from "@/components/navbar";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-6 border-t"
    >
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Adithya Bellamkonda. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
} 