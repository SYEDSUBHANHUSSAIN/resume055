import { motion } from 'motion/react';
import { Code2, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Creating intuitive and visually stunning interfaces that users love.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimizing every aspect for lightning-fast load times and smooth interactions.',
  },
];

export function About() {
  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning complex problems into simple,
            beautiful, and intuitive solutions. With a keen eye for design and a deep
            understanding of modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
