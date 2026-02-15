import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="text-gray-400 flex items-center gap-2 mb-4">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Your Name
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
