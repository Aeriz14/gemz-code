import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion"; // <-- 1. Impor motion
import { title } from "process";
import React from "react"; // <-- 2. Impor React

// 3. Definisikan SVG baru Anda sebagai komponen React
const SkillsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor" // <-- Diubah dari #000
      strokeLinejoin="round" // <-- Diubah ke camelCase
      strokeWidth={1.5} // <-- Diubah ke camelCase dan number
    >
      <path d="m5 16l5-3m4-2l5-3m-7-3v5m0 4v5M5 8l5 3m4 2l5 3m1.5-7v5.5m-7 6l5.5-3m-14.5 0l6 3m-7-5.5V9m1-2.5l6-3m9 3l-6-3" />
      <circle cx="12" cy="3.5" r="1.5" />
      <circle cx="12" cy="20.5" r="1.5" />
      <circle cx="3.5" cy="7.5" r="1.5" />
      <circle cx="20.5" cy="7.5" r="1.5" />
      <circle cx="20.5" cy="16.5" r="1.5" />
      <circle cx="3.5" cy="16.5" r="1.5" />
      <path d="m12 9.75l2 1.125v2.25l-2 1.125l-2-1.125v-2.25z" />
    </g>
  </svg>
);


const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development (Full-Stack)",
      skills: ["PHP Native", "Laravel", "Livewire", "JavaScript", "Vue.js", "Node.js", "HTML", "CSS"],
    },
    {
      title: "Python & Computer Vision",
      skills: ["Python", "Face Recognition", "Face Tracking", "Drowsiness Detection"],
    },
    {
      title: "Game Development",
      skills: ["Unity", "C#"],
    },
    {
      title: "Tools, UI/UX & DevOps",
      skills: ["Git", "GitHub", "Figma"],
    },
    {
      title: "Database Management",
      skills: ["MySQL", "SQLite"],
    },
  ];

  // --- 4. Hapus useInView dan cn ---
  // const { ref, inView } = useInView(...);

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* --- 5. Ganti emoji dengan komponen SVG --- */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <SkillsIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Keterampilan & Teknologi
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Teknologi yang saya kuasai dan gunakan dalam berbagai proyek.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            // --- 6. Ganti div dengan motion.div ---
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="border-primary/30 text-primary/90 transition-all duration-300 text-sm py-2 px-4 transform hover:scale-105 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

