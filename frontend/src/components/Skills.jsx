import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "LANGUAGES",
    color: "#4ae176",
    shadow: "4px 4px 0px #4ae176",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "BACKEND",
    color: "#fb923c",
    shadow: "4px 4px 0px #fb923c",
    skills: ["Flask", "REST APIs", "SocketIO"],
  },
  {
    label: "FRONTEND",
    color: "#22d3ee",
    shadow: "4px 4px 0px #22d3ee",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    label: "AI TOOLS",
    color: "#a855f7",
    shadow: "4px 4px 0px #a855f7",
    skills: ["Claude AI", "Bolt.new", "Lovable", "Cursor"],
  },
  {
    label: "DEVTOOLS",
    color: "#facc15",
    shadow: "4px 4px 0px #facc15",
    skills: ["Git", "GitHub", "Linux", "Bash", "VS Code"],
  },
  {
    label: "ML / AI",
    color: "#ec4899",
    shadow: "4px 4px 0px #ec4899",
    skills: ["scikit-learn", "Prompt Engineering"],
  },
];

const Skills = () => {
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
      id="skills"
      className="relative min-h-screen pt-24 pb-32 px-4 md:px-16"
    >
      {/* ── HEADER ── */}
      <header className="mb-16 fade-in">
        <h1
          className="text-[72px] md:text-[120px] font-black text-white uppercase
            tracking-tighter leading-none mb-4"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          TECH STACK
        </h1>
        <div className="inline-block bg-[#353434] px-4 py-2 border-l-4 border-white">
          <p className="font-mono text-sm text-white tracking-widest">
            TOOLS_I_USE://DAILY
          </p>
        </div>
      </header>

      {/* ── SKILLS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
        {skillGroups.map((group) => (
          <section
            key={group.label}
            className="p-6 border-2 border-white/10 bg-[#1c1b1b]
              hover:border-white/30 transition-all flex flex-col gap-4"
          >
            <h3
              className="font-mono text-sm uppercase tracking-widest"
              style={{ color: group.color }}
            >
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-4 py-2 border-2 font-mono text-sm
                    cursor-default bg-[#0a0a0a] transition-all duration-200
                    hover:scale-105 hover:-translate-y-1"
                  style={{
                    borderColor: group.color,
                    color: group.color,
                    boxShadow: group.shadow,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── VIBE BANNER ── */}
      <div className="mt-32 border-t-2 border-white pt-12 overflow-hidden fade-in">
        <div
          className="text-[64px] md:text-[120px] font-black text-white uppercase
            whitespace-nowrap animate-pulse"
          style={{
            fontFamily: "Anton, sans-serif",
            textShadow: "4px 4px 0px #353434",
          }}
        >
          ⚡ VIBE CODING SPECIALIST
        </div>
      </div>

      <style>{`
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

export default Skills;