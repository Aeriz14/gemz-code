import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react"; // <-- 1. Impor ArrowLeft
import { projects } from "@/lib/projectsData";
import { Link } from "react-router-dom"; // <-- 2. Impor Link
import { motion } from "framer-motion"; // <-- 3. Impor motion

const ProjectsArchive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Konten Halaman Arsip */}
      <main className="py-24 px-4 pt-32">
        <div className="container mx-auto max-w-6xl">
          {/* --- 4. Ganti div dengan motion.div --- */}
          <motion.div 
            className="text-left mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* --- 5. Tambahkan Tombol Kembali --- */}
            <Button
              asChild
              variant="ghost"
              className="mb-4 -ml-4 text-primary hover:text-primary hover:bg-primary/10"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Home
              </Link>
            </Button>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Arsip Proyek
            </h1>
            <p className="text-muted-foreground text-lg">
              Kumpulan lengkap dari semua proyek yang pernah saya kerjakan.
            </p>
          </motion.div>

          {/* Grid Proyek */}
          {/* --- 6. Ganti div dengan motion.div --- */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }} // Kontainer muncul cepat
          >
            {projects.map((project, index) => (
              // --- 7. Tambahkan motion.div di setiap card ---
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }} // Animasi staggered
              >
                <Card
                  className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden h-full`}
                  // Hapus style dan kelas animasi lama
                >
                  {/* Wrapper Blur */}
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
                      {/* Spacer Tombol */}
                      <div className="flex gap-2 invisible">
                        <Button size="sm" variant="outline"><Github className="w-4 h-4 mr-1" />Code</Button>
                        <Button size="sm"><ExternalLink className="w-4 h-4 mr-1" />Live</Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Tombol Overlay */}
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
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsArchive;
