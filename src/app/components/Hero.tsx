import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">Available for freelance work</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-white"
        >
          <span className="inline-block">Creative</span>{' '}
          <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Crafting exceptional digital experiences through innovative design and
          cutting-edge technology
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: Github, label: 'GitHub' },
            { icon: Linkedin, label: 'LinkedIn' },
            { icon: Mail, label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}
