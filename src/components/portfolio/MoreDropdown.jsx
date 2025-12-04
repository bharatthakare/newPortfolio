import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, CheckSquare, FileText, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const moreItems = [
  {
    icon: Link2,
    title: "Links",
    description: "All my links are here",
    href: "Links",
  },
  {
    icon: CheckSquare,
    title: "Uses",
    description: "A peek into my digital...",
    href: "Uses",
  },
  {
    icon: FileText,
    title: "Attribution",
    description: "Journey to create this site",
    href: "Attribution",
  },
];

export default function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
      >
        More
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-64 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
            >
              <div className="p-2">
                {moreItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={createPageUrl(item.href)}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white/60" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {item.title}
                          </p>
                          <p className="text-white/40 text-xs">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
