import { useEffect, useRef } from "react";

const achievements = [
  {
    date: "DEC 2025 / INNOVATION CONTEST",
    icon: "🏆",
    title: "INNO VISION CONTEST 2025",
    desc: "Institution's Innovation Council | KITS Ramtek | Project: CyberShield AI",
    badge: "2ND PRIZE",
    accentColor: "#4ae176",
    badgeBg: "#4ae176",
    badgeText: "black",
  },
  {
    date: "2025-26 / CODING COMPETITION",
    icon: "🏆",
    title: "REVERSE CODING",
    desc: "ACME Forum | KITS Ramtek | Logic & Problem Solving",
    badge: "2ND PRIZE",
    accentColor: "#ff9800",
    badgeBg: "#ff9800",
    badgeText: "black",
  },
  {
    date: "FEB 2026 / NATIONAL HACKATHON",
    icon: "🚀",
    title: "YASH 26.0 — ENIGMA 2.0",
    desc: "YCCE Nagpur | Organized by IEEE & ACM | Project: ML Learning Sandbox",
    badge: "PARTICIPANT",
    accentColor: "#00e5ff",
    badgeBg: "#00e5ff",
    badgeText: "black",
  },
  {
    date: "2025 / NATIONAL HACKATHON",
    icon: "🎯",
    title: "SMART INDIA HACKATHON 2025",
    desc: "SIH 2025 | National Level Competition",
    badge: "PARTICIPANT",
    accentColor: "#ffd600",
    badgeBg: "#ffd600",
    badgeText: "black",
  },
  {
    date: "2025 / AMBASSADOR PROGRAM",
    icon: "📌",
    title: "GOOGLE CAMPUS AMBASSADOR",
    desc: "Gemini AI Program | Google Developer Programs",
    badge: "APPLICANT",
    accentColor: "#d500f9",
    badgeBg: "#d500f9",
    badgeText: "white",
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const fadeEls = sectionRef.current?.querySelectorAll(".fade-in");
    fadeEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative pt-24 pb-0 px-4 md:px-16"
    >
      {/* ── HEADER ── */}
      <header className="mb-16 relative fade-in">
        <h1
          className="text-[100px] md:text-[180px] font-black text-white uppercase
            leading-none mb-4"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          WINS
        </h1>
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-lg tracking-widest"
            style={{ color: "#4ae176" }}
          >
            COMPETITIONS_&amp;_EVENTS://2025-26
          </span>
          <div
            className="h-[2px] flex-grow"
            style={{ backgroundColor: "rgba(74,225,118,0.2)" }}
          />
        </div>

        {/* ELITE STATUS sticker */}
        <div
          className="absolute top-0 right-0 rotate-12 bg-[#4ae176] text-black
            px-6 py-2 border-2 border-black font-mono font-bold hidden md:block"
          style={{ boxShadow: "4px 4px 0px #000" }}
        >
          ELITE STATUS
        </div>
      </header>

      {/* ── ACHIEVEMENT CARDS ── */}
      <div className="flex flex-col gap-8 max-w-7xl mx-auto fade-in">
        {achievements.map((ach, i) => (
          <div
            key={i}
            className="group relative bg-[#201f1f] border-2 border-white/10
              p-6 md:p-8 transition-all duration-300
              hover:-translate-x-[2px] hover:-translate-y-[2px]
              hover:border-white/30"
            style={{
              borderLeftWidth: "8px",
              borderLeftColor: ach.accentColor,
              boxShadow: "0px 0px 0px rgba(255,255,255,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "8px 8px 0px rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 0px 0px rgba(255,255,255,0)";
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                  {ach.date}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ach.icon}</span>
                  <h3
                    className="text-2xl md:text-3xl font-black text-white uppercase"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    {ach.title}
                  </h3>
                </div>
                <p className="font-['Hanken_Grotesk'] text-sm text-white/50">
                  {ach.desc}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="px-4 py-1 font-mono font-bold text-sm whitespace-nowrap"
                  style={{
                    backgroundColor: ach.badgeBg,
                    color: ach.badgeText,
                  }}
                >
                  {ach.badge}
                </span>
                <span
                  className="text-white text-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"
                >
                  ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MARQUEE BANNER ── */}
      <div className="w-full bg-white text-black py-4 border-y-2 border-black
        overflow-hidden mt-24 z-40">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="mx-8 font-black text-2xl md:text-3xl uppercase tracking-tighter flex-shrink-0"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              🏆 2X PRIZE WINNER — KITS RAMTEK — BUILDING AI PRODUCTS — OPEN FOR FREELANCE ⚡
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Achievements;