import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Code, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const attributions = [
  {
    title: "Design Inspiration",
    description:
      "Inspired by various portfolio designs and the creative dev community",
    icon: Palette,
  },
  {
    title: "Technologies Used",
    description:
      "Built with React, Tailwind CSS, and Framer Motion for smooth animations",
    icon: Code,
  },
  {
    title: "Icons & Assets",
    description: "Lucide React for icons, Unsplash for stock photography",
    icon: Sparkles,
  },
  {
    title: "Special Thanks",
    description: "To everyone who supported and inspired this journey",
    icon: Heart,
  },
];

export default function AttributionPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <Link to={createPageUrl("Home")}>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-light text-white mb-2">
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Attribution
            </span>
          </h1>
          <p className="text-white/40">The journey to create this site</p>
        </motion.div>

        <div className="space-y-4">
          {attributions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="p-6 rounded-xl bg-[#111] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-white font-medium mb-1">
                      {item.title}
                    </h2>
                    <p className="text-white/40 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/30 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            Bharat Thakare
          </p>
        </motion.div>
      </div>
    </div>
  );
}
