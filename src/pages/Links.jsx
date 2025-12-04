import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const links = [
  {
    icon: Github,
    title: "GitHub",
    url: "https://github.com/bharatthakare",
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/bharatthakare017/",
    description: "Let's connect professionally",
  },
  {
    icon: Twitter,
    title: "Twitter",
    url: "https://x.com/bharatthakare_",
    description: "Follow my thoughts",
  },
  {
    icon: Mail,
    title: "Email",
    url: "mailto:bharatthakare@zohomail.in",
    description: "Get in touch directly",
  },
  {
    icon: Globe,
    title: "Portfolio",
    url: "#",
    description: "You're already here!",
  },
];

export default function LinksPage() {
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-light text-white mb-2">
            My{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Links
            </span>
          </h1>
          <p className="text-white/40">All my social links in one place</p>
        </motion.div>

        <div className="space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[#111] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                    <Icon className="w-6 h-6 text-white/60 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{link.title}</p>
                    <p className="text-white/40 text-sm">{link.description}</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
