import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692ae3f4e0c72e42b1f4fd22/00afe7e05_BTLOGO.png"
              alt="BT Logo"
              className="w-9 h-9 rounded-lg object-contain"
            />
            <span className="text-white font-medium">Bharat Thakare</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} Bharat Thakare. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
