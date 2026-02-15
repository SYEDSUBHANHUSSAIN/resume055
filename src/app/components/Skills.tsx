import { motion } from 'motion/react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built over years of experience in modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
