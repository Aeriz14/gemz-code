import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
// import { useInView } from 'react-intersection-observer'; // Hapus
// import { cn } from "@/lib/utils"; // Hapus
import { motion } from "framer-motion"; // Impor

const testimonialsData = [
  // ... (data testimoni tidak berubah) ...
  {
    name: "Anonym",
    role: "Pegawai Diskominfo",
    quote: "Web e-tamu yang dibuat sangat memudahkan pendataan tamu. Tampilannya modern dan mudah digunakan. Sangat profesional!",
    avatarFallback: "A",
    rating: 5,
  },
  {
    name: "Anonym",
    role: "Mahasiswa (Tugas Akhir)",
    quote: "Sangat terbantu untuk pengerjaan sistem TA. Bimbingannya jelas, kodenya rapi, dan sistemnya berjalan sesuai harapan. Lulus dengan lancar!",
    avatarFallback: "A",
    rating: 5,
  },
  {
    name: "Anonym",
    role: "Pegawai Dishub",
    quote: "Sistem pengaduannya sangat membantu kami melacak laporan. Respon developernya cepat untuk perbaikan. Kinerja kami jadi lebih efisien.",
    avatarFallback: "A",
    rating: 4,
  },
  {
    name: "Anonym",
    role: "Developer",
    quote: "Membeli script 'Kantor-KU' untuk absensi. Kodenya mudah dipahami dan dimodifikasi. Fitur deteksi wajahnya akurat. Layak!",
    avatarFallback: "A",
    rating: 4,
  },
];

const Testimonials = () => {
  // Hapus hook useInView
  // const { ref, inView } = useInView(...);

  return (
    <section id="testimonials" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Testimoni Klien
          </h2>
          <p className="text-muted-foreground text-lg">
            Apa kata mereka tentang layanan saya.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating ? 'text-accent fill-accent' : 'text-accent/30'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-lg italic text-foreground/90 mb-6">
                          "{testimonial.quote}"
                        </p>
                        <h3 className="font-display text-xl font-semibold text-primary">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
