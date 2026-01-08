import { Github, Linkedin, Mail, Smartphone, Instagram} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Aeriz14", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/gemzcode.studio", label: "Instagram" },
    { icon: Smartphone, href: "https://wa.me/6289653970930", label: "Smartphone" },
    { icon: Mail, href: "mailto:gemzcode@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Gems-Code
            </h3>
            <p className="text-muted-foreground text-sm">
              Wujudkan solusi web elegan dan berkinerja tinggi dengan teknologi terkini.
            </p>
            <p className="text-muted-foreground text-sm">
              Jangan ragu untuk menghubungi saya!
            </p>
            
          </div>

          <div className="flex gap-2">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a href={link.href} aria-label={link.label}>
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Gems-Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
