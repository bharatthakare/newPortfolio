import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const projects = [
  {
    id: 1,
    title: "Kisan Ai Web",
    description:
      "An AI-powered platform revolutionizing agriculture with smart solutions for farmers",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    ],
    tags: [
      "nextjs",
      "react",
      "sanity",
      "typescript",
      "better_auth",
      "groq",
      "sentry",
      "markdown",
      "tailwindcss",
      "motion",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Finance Tracker App",
    description:
      "A mobile app to track personal finances with intuitive UI and seamless experience",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
    ],
    tags: [
      "react-native",
      "expo",
      "typescript",
      "firebase",
      "zod",
      "zustand",
      "cloudinary",
      "reanimated",
      "gifted-charts",
    ],
    isMobile: true,
  },
  {
    id: 3,
    title: "PlacementHub",
    description:
      "A comprehensive platform connecting students with top companies for internships and placements",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    ],
    tags: [
      "nextjs",
      "react",
      "express",
      "turborepo",
      "typescript",
      "mongodb",
      "razorpay",
      "zustand",
      "zod",
      "tailwindcss",
      "motion",
    ],
  },
  {
    id: 4,
    title: "Ai Chat Bot",
    description:
      "An AI-powered chat bot that provides intelligent responses and enhances user interactions.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    ],
    tags: [
      "nextjs",
      "react",
      "zustand",
      "typescript",
      "shadcn_ui",
      "tailwindcss",
      "highlightjs",
      "react_hotkeys_hook",
    ],
  },
  {
    id: 5,
    title: "CivicIssue Tracker",
    description:
      "A web application that allows citizens to report and track civic issues in their locality.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop",
    ],
    tags: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "react_just_parallax",
      "vercel",
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        delay: index * 0.08,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Images */}
      <div
        className={`relative rounded-xl overflow-hidden bg-[#111111] ${
          project.isMobile ? "flex gap-2 p-4" : ""
        }`}
      >
        {project.isMobile ? (
          project.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={project.title}
              className="w-1/3 h-64 object-cover rounded-lg"
              whileHover={{ y: -5 }}
            />
          ))
        ) : project.images.length > 1 ? (
          <div className="flex gap-2">
            {project.images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={project.title}
                className="w-1/2 h-48 sm:h-64 object-cover"
                whileHover={{ scale: 1.02 }}
              />
            ))}
          </div>
        ) : (
          <motion.img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Hover description */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <p className="text-white/80 text-sm text-center">
            {project.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm mt-1 line-clamp-2">
              {project.description}
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-white/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 6 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-white/50">
              +{project.tags.length - 6}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#111111] rounded-2xl p-6 md:p-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-medium text-white mb-4">
            {project.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            An AI SaaS landing page showcasing modern UI/UX excellence. With
            sleek design and smooth animations, it delivers an engaging user
            experience and serves as an inspiring reference for developers and
            designers.
          </p>

          <ul className="space-y-2 mb-8">
            <li className="text-white/60 text-sm flex items-start gap-2">
              <span className="text-white/30">•</span>
              Built with React and Vite for fast and scalable development.
            </li>
            <li className="text-white/60 text-sm flex items-start gap-2">
              <span className="text-white/30">•</span>
              Designed responsive layouts using Tailwind CSS.
            </li>
            <li className="text-white/60 text-sm flex items-start gap-2">
              <span className="text-white/30">•</span>
              Enhanced user experience with smooth animations using
              react-just-parallax.
            </li>
            <li className="text-white/60 text-sm flex items-start gap-2">
              <span className="text-white/30">•</span>
              Implemented JavaScript for dynamic interactions and seamless
              functionality.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "React Just Parallax",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsShowcase() {
  return (
    <section className="relative py-16 bg-black" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-white/40 text-sm mb-2">FEATURED CASE STUDIES</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Curated{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              work
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Featured Project */}
        <FeaturedProject project={projects[4]} />

        {/* See more button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mt-12"
        >
          <Link to={createPageUrl("Projects")}>
            <Button
              variant="outline"
              className="rounded-full border-white/20 bg-transparent text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              See more projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
