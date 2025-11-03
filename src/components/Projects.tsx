import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projectsData";
import { motion } from "framer-motion"; // <-- 1. Impor motion
import React from "react"; // <-- 2. Impor React untuk SVG

// 3. Definisikan SVG baru Anda sebagai komponen React
const ProjectIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        fill="currentColor" // <-- Diubah dari #000
        d="m18.165 2.765l.255.032c.674.093 1.566.218 2.071.724c.414.413.573 1.085.668 1.685l.056.386c.126.91.159 2.102-.056 3.426c-.424 2.613-1.815 5.731-5.308 8.145c-.019.188-.02.378-.016.568l.01.284c.016.437.032.874-.09 1.298c-.19.66-.867 1.095-1.5 1.407l-.31.147l-.4.176c-.748.318-1.758.644-2.391.01c-.38-.379-.536-.935-.663-1.488l-.047-.207a8 8 0 0 0-.2-.774q-.075-.22-.162-.445a3 3 0 0 1-.203.225c-.345.345-.86.586-1.284.755c-.463.183-.987.343-1.472.475l-.249.066l-.477.119l-.432.1l-.517.11l-.323.063a1.01 1.01 0 0 1-1.177-1.177l.086-.431l.154-.698l.124-.51l.094-.36c.132-.484.292-1.008.476-1.47c.168-.425.409-.94.754-1.285l.08-.077l-.064-.026a8 8 0 0 0-.519-.177l-.277-.085c-.694-.21-1.436-.436-1.897-.898c-.56-.559-.371-1.41-.101-2.118l.11-.274l.177-.4l.147-.31c.312-.632.747-1.309 1.407-1.499c.35-.1.714-.106 1.08-.096l.22.007c.286.01.571.021.85-.006c2.414-3.494 5.532-4.885 8.145-5.309a11.8 11.8 0 0 1 3.171-.088M8.353 15.44a1 1 0 0 0-1.1-.06l-.11.074l-.093.083l-.125.158c-.26.376-.408.896-.523 1.382l-.108.468l-.051.213l.191-.046l.418-.096c.578-.135 1.219-.31 1.613-.665a1 1 0 0 0 .088-1.314l-.082-.094l-.024-.023zm7.183-6.974a2 2 0 1 0-2.829 2.828a2 2 0 0 0 2.829-2.828"
      />
    </g>
  </svg>
);

const Projects = () => {
  const featuredProjects = projects.slice(0, 3); 

  // --- 4. Hapus useInView dan ref ---
  // const { ref, inView } = useInView(...);

  return (
    // --- 5. Hapus ref={ref} ---
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* --- 6. Ganti div dengan motion.div --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* --- 7. Buat flex container untuk ikon + judul --- */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <ProjectIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Proyek yang Pernah Saya Kerjakan
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Sebuah pameran dari pekerjaan dan inovasi yang telah saya buat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            // --- 8. Ganti div dengan motion.div ---
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden h-full`}
                // Hapus className 'cn' dan style 'animationDelay'
              >
                <div className="transition-all duration-300 group-hover:blur-sm group-hover:brightness-50">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="border-primary/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 invisible">
                      <Button size="sm" variant="outline"><Github className="w-4 h-4 mr-1" />Code</Button>
                      <Button size="sm"><ExternalLink className="w-4 h-4 mr-1" />Live</Button>
                    </div>
                  </CardContent>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10 bg-background/50 backdrop-blur-sm">
                    <Github className="w-4 h-4 mr-1" />Code
                  </Button>
                  <Button size="sm" className="bg-primary/20 hover:bg-primary/30 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 mr-1" />Live
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- 9. Ganti div dengan motion.div --- */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // Hapus style 'animationDelay'
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 group"
          >
            <Link to="/projects"> 
              Lihat Proyek Lainnya
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

