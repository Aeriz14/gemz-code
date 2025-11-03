import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Github, Instagram, Smartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
// import { useInView } from 'react-intersection-observer'; // Hapus
// import { cn } from "@/lib/utils"; // Hapus
import { motion } from "framer-motion"; // Impor

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: <Instagram className="w-8 h-8 text-primary" />,
      title: "Instagram",
      username: "@gegem____",
      href: "https://www.instagram.com/gegem____",
    },
    {
      icon: <Github className="w-8 h-8 text-primary" />,
      title: "GitHub",
      username: "Aeriz14",
      href: "https://github.com/Aeriz14",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "WhatsApp",
      username: "+62 896 5397 0930",
      href: "https://wa.me/6289653970930",
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Gmail",
      username: "gemzcode@gmail.com",
      href: "mailto:gemzcode@gmail.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  // Hapus semua hook useInView
  // const { ref, inView } = useInView(...);
  // const { ref: formRef, inView: formInView } = useInView(...);

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Punya proyek menarik? Mari kita wujudkan bersama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full" // Pastikan <a> mengisi <div>
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-card">
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4 transition-transform duration-300 group-hover:scale-110">
                      {method.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-1 text-foreground transition-colors duration-300 group-hover:text-primary">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm truncate w-full">
                      {method.username}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground">
            Atau kirim pesan langsung
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card 
            className="bg-card/50 backdrop-blur-sm border-primary/20"
          >
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
