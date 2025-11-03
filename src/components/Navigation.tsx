import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gem } from "lucide-react";
// --- BARU: Impor hook dari React Router ---
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- BARU: Dapatkan lokasi saat ini & fungsi navigasi ---
  const location = useLocation();
  const navigate = useNavigate();
  const isOnMainPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi scroll internal
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- BARU: Fungsi klik navigasi yang "pintar" ---
  const handleNavClick = (id: string) => {
    if (isOnMainPage) {
      // Jika sudah di halaman utama, scroll saja
      scrollToSection(id);
    } else {
      // Jika di halaman lain (seperti /projects),
      // kembali ke halaman utama dan kirim ID target via 'state'
      navigate('/', { state: { targetId: id } });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Tentang", id: "about" },
    { label: "Layanan", id: "layanan" },
    { label: "Proyek", id: "projects" },
    { label: "Testimoni", id: "testimonials" },
    { label: "Kontak", id: "contact" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-primary/20 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => handleNavClick('home')} // <-- Gunakan handleNavClick
              className="flex items-center gap-2 group"
            >
              <Gem className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
              <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gems-Code
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => handleNavClick(item.id)} // <-- Gunakan handleNavClick
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="justify-start text-lg hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => handleNavClick(item.id)} // <-- Gunakan handleNavClick
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;