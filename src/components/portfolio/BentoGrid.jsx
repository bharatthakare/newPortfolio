import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Globe,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    className={`relative rounded-2xl bg-[#111111] border border-white/5 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

export default function BentoGrid() {
  const techRowOne = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "CSS",
    "Motion.dev",
    "Sanity CMS",
    "Figma",
    "Notion",
    "Markdown",
    "Node.js",
    "Express.js",
    "Redis",
  ];
  const techRowTwo = [
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Drizzle ORM",
    "Better Auth",
    "Turborepo",
    "TanStack Query",
    "Zustand",
    "Expo",
    "GROQ",
    "PostHog",
    "pnpm",
    "Bun",
  ];
  const techRowThree = [
    "Biome.js",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Vercel",
    "Docker",
    "AWS",
    "Cloudflare",
    "Python",
    "Linux",
    "Bash",
    "Ghostty",
  ];

  const saasFeatures = [
    {
      title: "Payment System Architecture",
      desc: "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly.",
    },
    {
      title: "Monitoring & Analytics Infrastructure",
      desc: "Provides real-time insights into user behavior and system performance.",
    },
    {
      title: "Design System & UI Consistency",
      desc: "Unified design assets ensuring consistent branding across the platform.",
    },
    {
      title: "API Gateway & Documentation",
      desc: "Guides developers to integrate with the SaaS platform efficiently.",
    },
    {
      title: "User Onboarding Flow Design",
      desc: "Step-by-step guides to help users get started and maximize benefits.",
    },
  ];

  return (
    <section className="relative py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Collaboration Card */}
          <BentoCard className="p-6" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white/60" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Collaboration
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              I prioritize client collaboration, fostering open communication
            </p>
            <Link to={createPageUrl("BookCall")}>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-white/20 bg-transparent text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Book a call
              </Button>
            </Link>
          </BentoCard>

          {/* Tech Stack Card - Takes 2 columns */}
          <BentoCard className="lg:col-span-2 p-6" delay={0.2}>
            <h3 className="text-lg font-medium text-white mb-1">
              Constantly exploring new
            </h3>
            <h3 className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] mb-4">
              tech stacks
            </h3>

            {/* Tech Marquee Rows */}
            <div className="space-y-3 overflow-hidden">
              {[techRowOne, techRowTwo, techRowThree].map((row, rowIndex) => (
                <div key={rowIndex} className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#111111] to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#111111] to-transparent z-10" />
                  <motion.div
                    className="flex gap-2"
                    animate={{
                      x: rowIndex % 2 === 0 ? [0, -1000] : [-1000, 0],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...row, ...row, ...row].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-white/10 text-white/70 text-xs whitespace-nowrap flex items-center gap-2 hover:border-purple-500/30 transition-colors"
                      >
                        <span className="w-4 h-4 rounded bg-white/10 flex items-center justify-center text-[8px]">
                          ⚡
                        </span>
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Website Impact Card */}
          <BentoCard className="p-6 flex flex-col justify-between" delay={0.3}>
            <div>
              <p className="text-white/40 text-xs mb-2">bharatthakare.dev</p>
              <h3 className="text-xl font-medium text-white mb-1">
                Websites that
              </h3>
              <h3 className="text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                Impact.
              </h3>
            </div>
            <div className="flex gap-2 mt-6">
              <Button
                size="sm"
                className="rounded-full bg-white text-black hover:bg-white/90 text-xs px-4"
              >
                Start →
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-white/20 bg-transparent text-white/70 hover:bg-white hover:text-black hover:border-white text-xs px-4 transition-all duration-300"
              >
                Details
              </Button>
            </div>
          </BentoCard>

          {/* Time Zone Card */}
          <BentoCard className="p-6" delay={0.4}>
            <h3 className="text-sm font-medium text-white mb-4">
              I'm very flexible with time zone communications
            </h3>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="text-2xl">🇬🇧</span>
                <p className="text-white/40 text-xs mt-1">UK</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">🇮🇳</span>
                <p className="text-white/40 text-xs mt-1">India</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">🇺🇸</span>
                <p className="text-white/40 text-xs mt-1">USA</p>
              </div>
            </div>
          </BentoCard>

          {/* Remote Card */}
          <BentoCard className="p-6 flex flex-col justify-between" delay={0.5}>
            <div>
              <p className="text-white/40 text-xs mb-2">Remote</p>
              <h3 className="text-xl font-medium text-white">India</h3>
            </div>
            <Link to={createPageUrl("Connect")}>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-white/20 bg-transparent text-white/70 hover:bg-white hover:text-black hover:border-white mt-4 w-fit transition-all duration-300"
              >
                Connect now
              </Button>
            </Link>
          </BentoCard>

          {/* Let's work together - Full width */}
          <BentoCard className="md:col-span-2 lg:col-span-3 p-6" delay={0.6}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-white/50 text-sm">
                  Let's work together on your next project
                </p>
                <p className="text-white/30 text-sm">
                  bharatthakare@zohomail.in
                </p>
              </div>

              {/* SaaS Features Marquee */}
              <div className="flex-1 overflow-hidden max-w-2xl mx-4 hidden lg:block">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: [0, -1500] }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...saasFeatures, ...saasFeatures].map((feature, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 px-4 py-2 bg-white/5 rounded-lg"
                    >
                      <p className="text-white/70 text-xs font-medium">
                        {feature.title}
                      </p>
                      <p className="text-white/40 text-[10px] max-w-[200px]">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </BentoCard>

          {/* Inside Scoop Card */}
          <BentoCard
            className="md:col-span-2 lg:col-span-3 p-6 bg-gradient-to-r from-[#111111] to-[#0a0a0a]"
            delay={0.7}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-white/40 text-xs mb-1">The Inside Scoop</p>
                <h3 className="text-lg font-medium text-white">
                  Currently building a Saas Application
                </h3>
              </div>
              <Link to={createPageUrl("Projects")}>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-white/20 bg-transparent text-white/70 hover:bg-white hover:text-black hover:border-white w-fit transition-all duration-300"
                >
                  View Recent work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
