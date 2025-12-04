import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const projects = [
  {
    id: 1,
    title: "Kisan Ai Web",
    description:
      "An AI-powered platform revolutionizing agriculture with smart solutions for farmers",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Next.js", "React", "Sanity", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Finance Tracker App",
    description:
      "A mobile app to track personal finances with intuitive UI and seamless experience",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "PlacementHub",
    description:
      "A comprehensive platform connecting students with top companies for internships and placements",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tags: ["Next.js", "Express", "MongoDB", "Razorpay"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Ai Chat Bot",
    description:
      "An AI-powered chat bot that provides intelligent responses and enhances user interactions.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tags: ["Next.js", "Zustand", "TypeScript", "Shadcn UI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 5,
    title: "CivicIssue Tracker",
    description:
      "A web application that allows citizens to report and track civic issues in their locality.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-20">
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
            All{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Projects
            </span>
          </h1>
          <p className="text-white/40">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-xl bg-[#111] border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-medium mb-2 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors" />
                </h3>
                <p className="text-white/40 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
