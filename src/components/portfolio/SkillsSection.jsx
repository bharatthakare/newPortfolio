import React from "react";
import { motion } from "framer-motion";

const skillRows = [
  [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "JavaScript", icon: "JS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "⚡" },
    { name: "HTML", icon: "📄" },
  ],
  [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "Firebase", icon: "🔥" },
    { name: "Supabase", icon: "⚡" },
    { name: "Redis", icon: "🔴" },
    { name: "Prisma", icon: "△" },
    { name: "GraphQL", icon: "◈" },
  ],
  [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Linux", icon: "🐧" },
    { name: "Figma", icon: "🎨" },
    { name: "VS Code", icon: "💻" },
  ],
];

export default function SkillsSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-2">
            Passionate about cutting-edge
          </h2>
          <p className="text-2xl sm:text-3xl italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
            technologies
          </p>
        </motion.div>

        {/* Skills Rows */}
        <div className="space-y-4 mb-16">
          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

              <motion.div
                className="flex gap-3"
                animate={{ x: rowIndex % 2 === 0 ? [0, -800] : [-800, 0] }}
                transition={{
                  duration: 25 + rowIndex * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...row, ...row, ...row, ...row].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px] group-hover:bg-purple-500/20 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-white/70 text-sm whitespace-nowrap group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Browser mockup with Impact card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto"
        >
          <div className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden shadow-2xl">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-1 rounded-md bg-white/5 text-white/30 text-xs flex items-center gap-1">
                  <span>🔒</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <motion.h3
                className="text-xl font-medium text-white mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Websites that
              </motion.h3>
              <motion.h3
                className="text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Impact.
              </motion.h3>

              {/* Loading bar */}
              <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ width: "50%" }}
                />
              </div>

              <div className="flex gap-2 justify-center mt-6">
                <button className="px-4 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors">
                  Start →
                </button>
                <button className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs hover:bg-white hover:text-black transition-all duration-300">
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Decorative rings */}
          <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-[500px] h-[500px] rounded-full border border-purple-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
