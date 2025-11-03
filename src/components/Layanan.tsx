import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutTemplate, GraduationCap, Wrench } from "lucide-react";
// import { useInView } from 'react-intersection-observer'; // Hapus
// import { cn } from "@/lib/utils"; // Hapus
import { motion } from "framer-motion"; // Impor

const Layanan = () => {
  const services = [
    {
      icon: <LayoutTemplate className="w-10 h-10 text-primary" />,
      title: "Full-Stack Development",
      description: "Membangun aplikasi web custom dari awal (front-end & back-end), website profil perusahaan, e-commerce, atau sistem informasi.",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      title: "Bantuan Proyek Skripsi/TA",
      description: "Membantu mahasiswa dalam aspek teknis (pembuatan aplikasi/sistem) untuk proyek Skripsi atau Tugas Akhir, lengkap dengan bimbingan.",
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Website Maintenance",
      description: "Menyediakan jasa maintenance, perbaikan bug, optimasi kecepatan, dan penambahan fitur pada website yang sudah ada.",
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  // Hapus hook useInView
  // const { ref, inView } = useInView(...);

  return (
    <section id="layanan" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Layanan Profesional Saya
          </h2>
          <p className="text-muted-foreground text-lg">
            Solusi yang saya tawarkan untuk mewujudkan ide digital Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-card group overflow-hidden h-full`} // Tambah h-full
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
