import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MoreDropdown from "./MoreDropdown";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 relative z-50"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692ae3f4e0c72e42b1f4fd22/00afe7e05_BTLOGO.png"
                alt="BT Logo"
                className="w-9 h-9 rounded-lg object-contain"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-1.5 py-1.5">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(link.label);
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1 ${
                      activeLink === link.label
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {activeLink === link.label && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      />
                    )}
                    {link.label}
                  </motion.a>
                ))}
                <MoreDropdown />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={createPageUrl("BookCall")}>
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-white/90 hover:text-black rounded-full px-4 py-1.5 text-sm font-medium ml-1"
                    >
                      Book a Call
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Keyboard shortcut */}
            <div className="hidden lg:flex items-center gap-1 text-white/30">
              <kbd className="px-1.5 py-0.5 text-xs bg-white/5 border border-white/10 rounded">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 text-xs bg-white/5 border border-white/10 rounded">
                K
              </kbd>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white relative z-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1 mt-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-2xl font-light text-white border-b border-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to={createPageUrl("BookCall")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 text-base font-medium">
                  Book a Call
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
