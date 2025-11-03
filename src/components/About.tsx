import { Code, Palette, Zap } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { motion } from "framer-motion"; // <-- 1. Impor motion
// import { useInView } from 'react-intersection-observer'; // <-- 2. Hapus useInView
// import { cn } from "@/lib/utils"; // <-- 3. Hapus cn (jika hanya untuk animasi)

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces that users love",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing every detail for lightning-fast user experiences",
    },
  ];

  // --- 4. Hapus semua hook useInView ---
  // const { ref: sectionRef, inView: sectionInView } = useInView(...);
  // const { ref: featuresRef, inView: featuresInView } = useInView(...);

  return (
    // --- 5. Hapus ref dari section ---
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* --- 6. Ganti div dengan motion.div --- */}
        <motion.div
          // Hapus cn() dan opacity-0
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} // Mulai dari atas
          whileInView={{ opacity: 1, y: 0 }} // Muncul ke posisi
          viewport={{ once: true }} // Hanya sekali
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tentang Saya
          </h2>
          <p className="text-muted-foreground text-lg">
            Transforming ideas into polished digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* --- 7. Ganti div gambar --- */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }} // Mulai dari kiri
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[3px] shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-background">
                <img
                  src={profileImage}
                  alt="Your Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* --- 8. Ganti div teks --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Mulai dari kanan
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Halo! Saya Gema, seorang Developer Full-Stack.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Saya fokus membangun aplikasi web yang efisien, skalabel, dan fungsional. Dengan pengalaman di berbagai teknologi, utamanya PHP/Laravel, Node.js, dan Python, saya terbiasa mempelajari hal baru untuk menyelesaikan tantangan teknis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prinsip saya adalah menggabungkan kode yang rapi (clean code) dengan pengalaman pengguna (UX) yang baik. Tujuan saya adalah menghadirkan solusi web yang solid, andal, dan sesuai dengan kebutuhan proyek Anda.
            </p>
          </motion.div>
        </div>

        {/* --- 9. Hapus ref dari grid fitur --- */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            // --- 10. Ganti div kartu fitur ---
            <motion.div
              key={index}
              className="text-center bg-card p-6 rounded-lg border border-primary/20 shadow-md transform transition-transform hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Delay bertahap
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
