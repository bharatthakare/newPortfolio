import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("bharatthakare@zohomail.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Earth-like curved glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px]">
          <div className="absolute bottom-0 w-full h-full rounded-[100%] bg-gradient-to-t from-white/5 via-white/[0.02] to-transparent" />
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-20">
        {/* Available for work badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-white/70">Available for work</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 tracking-tight leading-tight"
        >
          I help founders turn ideas
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/60 mb-8 tracking-tight leading-tight"
        >
          into seamless{" "}
          <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
            digital experiences
          </span>
        </motion.h1>

        {/* Profile section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <span className="text-white/50 text-base sm:text-lg">Hello, I'm</span>
          <span className="text-white font-medium text-base sm:text-lg">
            Bharat Thakare
          </span>
          <div className="relative mx-1">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692ae3f4e0c72e42b1f4fd22/fe42a3acb_bharat1.jpg"
              alt="Bharat Thakare"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white/20"
            />
          </div>
          <span className="text-white/50 text-base sm:text-lg">a</span>
          <span className="text-white font-medium text-base sm:text-lg">
            Full Stack Developer
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link to={createPageUrl("Connect")}>
            <Button className="bg-white text-black hover:bg-white/90 border-0 rounded-full px-6 py-5 text-sm font-medium">
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 text-white/60 hover:text-white/80 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="text-sm">
              {copied ? "Copied!" : "bharatthakare@zohomail.in"}
            </span>
          </button>
        </motion.div>

        {/* Profile card with connections */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 mb-16 inline-flex items-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692ae3f4e0c72e42b1f4fd22/fe42a3acb_bharat1.jpg"
              alt="Bharat Thakare"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-white text-sm font-medium">Bharat Thakare</p>
              <p className="text-white/40 text-xs">Full Stack Developer</p>
            </div>
          </div>

          {/* Connection avatars */}
          <div className="flex -space-x-2">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/men/7.jpg",
              "https://randomuser.me/api/portraits/women/24.jpg",
              "https://randomuser.me/api/portraits/women/35.jpg",
              "https://randomuser.me/api/portraits/women/45.jpg",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Connection"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black object-cover"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-1.5 bg-white/40 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
