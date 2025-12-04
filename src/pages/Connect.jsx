import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ConnectPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
            Let's{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Connect
            </span>
          </h1>
          <p className="text-white/40">
            I'd love to hear from you. Send me a message!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
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
              className="bg-[#111] border-white/10 text-white placeholder:text-white/30 h-12 rounded-lg focus:border-purple-500/50"
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
              className="bg-[#111] border-white/10 text-white placeholder:text-white/30 h-12 rounded-lg focus:border-purple-500/50"
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
              className="bg-[#111] border-white/10 text-white placeholder:text-white/30 min-h-[140px] rounded-lg resize-none focus:border-purple-500/50"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-white/90 h-12 rounded-lg text-sm font-medium"
          >
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center gap-4"
        >
          <a
            href="mailto:bharatthakare@zohomail.in"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-purple-500/30 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">bharatthakare@zohomail.in</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
