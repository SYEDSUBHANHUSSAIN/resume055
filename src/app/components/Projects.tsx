import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'ecommerce dashboard modern',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop interface and team collaboration features.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    image: 'project management interface',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content creation platform that helps marketers generate engaging copy in seconds.',
    tags: ['Python', 'React', 'OpenAI'],
    image: 'artificial intelligence workspace',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracker with workout plans, progress tracking, and social features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'fitness mobile app screen',
  },
  {
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search, virtual tours, and mortgage calculators.',
    tags: ['Vue.js', 'Express', 'MySQL'],
    image: 'real estate modern interior',
  },
  {
    title: 'Social Analytics Dashboard',
    description: 'Comprehensive social media analytics tool with real-time insights and reporting.',
    tags: ['Angular', 'D3.js', 'GraphQL'],
    image: 'analytics dashboard charts',
  },
];

export function Projects() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my recent work that showcases my skills and passion for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-50"
            >
              <div className="aspect-video overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
