import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative py-20 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
            Let's work{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              together
            </span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white/40 text-sm mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-[#111] border-white/10 text-white placeholder:text-white/30 h-12 rounded-lg focus:border-white/30"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-[#111] border-white/10 text-white placeholder:text-white/30 h-12 rounded-lg focus:border-white/30"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-[#111] border-white/10 text-white placeholder:text-white/30 min-h-[140px] rounded-lg resize-none focus:border-white/30"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 h-12 rounded-lg text-sm font-medium"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="p-6 rounded-xl bg-[#111] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-1">Email me at</p>
                  <a
                    href="mailto:bharatthakare@zohomail.in"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    bharatthakare@zohomail.in
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl bg-[#111] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-1">Based in</p>
                  <p className="text-white">India 🇮🇳</p>
                  <p className="text-white/40 text-sm mt-1">
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-xl bg-[#111] border border-white/5">
              <p className="text-white/40 text-sm mb-4">Connect with me</p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    link: "https://github.com/bharatthakare",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/bharatthakare017/",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    link: "https://x.com/bharatthakare_",
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center 
                     text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl bg-[#111] border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-white text-sm font-medium">
                  Currently available
                </p>
              </div>
              <p className="text-white/40 text-sm">
                I'm currently taking on new projects. Let's build something
                great together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
