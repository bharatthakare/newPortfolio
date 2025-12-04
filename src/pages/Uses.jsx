import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Monitor,
  Code,
  Palette,
  Terminal,
  Headphones,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const categories = [
  {
    title: "Development",
    icon: Code,
    items: [
      { name: "VS Code", description: "Primary code editor" },
      { name: "GitHub Copilot", description: "AI pair programmer" },
      { name: "Warp Terminal", description: "Modern terminal" },
      { name: "Docker", description: "Containerization" },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    items: [
      { name: "Figma", description: "UI/UX design" },
      { name: "Framer", description: "Prototyping" },
      { name: "Notion", description: "Note-taking & planning" },
    ],
  },
  {
    title: "Hardware",
    icon: Monitor,
    items: [
      { name: "MacBook Pro M2", description: "Primary machine" },
      { name: 'Dell UltraSharp 27"', description: "External monitor" },
      { name: "Keychron K2", description: "Mechanical keyboard" },
    ],
  },
  {
    title: "Productivity",
    icon: Coffee,
    items: [
      { name: "Arc Browser", description: "Daily browser" },
      { name: "Raycast", description: "Launcher & productivity" },
      { name: "Spotify", description: "Music for focus" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-20">
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
            What I{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Use
            </span>
          </h1>
          <p className="text-white/40">
            A peek into my digital workspace and tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="p-6 rounded-xl bg-[#111] border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-lg font-medium text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-white/80">{item.name}</span>
                      <span className="text-white/40 text-sm">
                        {item.description}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
