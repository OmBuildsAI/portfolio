import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "#work", color: "#4ae176" },
  { label: "About", href: "#about", color: "#00f0ff" },
  { label: "Skills", href: "#skills", color: "#ff6b00" },
  { label: "Achievements", href: "#achievements", color: "#ffd600" },
  { label: "Contact", href: "#contact", color: "#bc00ff" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["work", "about", "skills", "achievements", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full z-[100] flex justify-between
          items-center px-4 md:px-16 transition-all duration-300"
        style={{
          height: "64px",
          backgroundColor: scrolled ? "rgba(20,19,19,0.95)" : "#141313",
          borderBottom: "2px solid #ffffff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="font-black text-white uppercase text-2xl md:text-3xl
            hover:text-[#4ae176] transition-colors duration-200 cursor-pointer"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          OM NAITAM
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="font-black text-xl uppercase transition-all
                  duration-200 relative group cursor-pointer"
                style={{
                  fontFamily: "Anton, sans-serif",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] transition-all duration-200"
                  style={{
                    width: isActive ? "100%" : "0%",
                    backgroundColor: "#ffffff",
                  }}
                />
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-0
                    group-hover:w-full transition-all duration-200"
                  style={{ backgroundColor: link.color }}
                />
              </button>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center
            w-10 h-10 gap-[6px] z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-7 h-[2px] bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}
          />
          <span
            className="block w-7 h-[2px] bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-7 h-[2px] bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}
          />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className="fixed inset-0 z-[99] flex flex-col justify-center
          items-center transition-all duration-300"
        style={{
          backgroundColor: "#0a0a0a",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col gap-2 w-full px-8">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-left w-full py-4 pl-6 border-l-4
                transition-all duration-200 group"
              style={{
                borderLeftColor: link.color,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.3s ease ${i * 0.07}s`,
              }}
            >
              <span
                className="font-black text-white uppercase text-5xl
                  group-hover:opacity-60 transition-opacity"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                {link.label}
              </span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between
          items-center border-t border-white/10 pt-4">
          <span className="font-mono text-xs text-white/40 uppercase">
            © Om Naitam 2025
          </span>
          <span className="font-mono text-xs text-white/40 uppercase">
            B.Tech CT | KITS Ramtek
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;