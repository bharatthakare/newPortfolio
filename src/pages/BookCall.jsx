import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Video, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

export default function BookCallPage() {
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
            Book a{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Call
            </span>
          </h1>
          <p className="text-white/40">
            Let's discuss your project and how I can help
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center justify-between p-6 rounded-xl bg-[#111] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">30-min Discovery Call</p>
                <p className="text-white/40 text-sm">
                  Quick intro to discuss your needs
                </p>
              </div>
            </div>
            <span className="text-white/30 group-hover:text-purple-400 transition-colors">
              →
            </span>
          </motion.a>

          <motion.a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center justify-between p-6 rounded-xl bg-[#111] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                <Video className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <p className="text-white font-medium">
                  1-hour Project Discussion
                </p>
                <p className="text-white/40 text-sm">
                  Deep dive into your project requirements
                </p>
              </div>
            </div>
            <span className="text-white/30 group-hover:text-pink-400 transition-colors">
              →
            </span>
          </motion.a>

          <motion.a
            href="mailto:bharatthakare@zohomail.in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center justify-between p-6 rounded-xl bg-[#111] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <p className="text-white font-medium">Email Me Directly</p>
                <p className="text-white/40 text-sm">
                  bharatthakare@zohomail.in
                </p>
              </div>
            </div>
            <span className="text-white/30 group-hover:text-white transition-colors">
              →
            </span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
        >
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <p className="text-white font-medium">Timezone Friendly</p>
          </div>
          <p className="text-white/40 text-sm">
            I'm flexible with timezones and can accommodate calls across
            different regions including US, UK, and Asia.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
