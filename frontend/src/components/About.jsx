import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  // Scroll fade-in animation
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
      id="about"
      className="relative min-h-screen pt-24 pb-32 px-4 md:px-16"
    >
      {/* ── HEADING ── */}
      <div className="mb-12 md:mb-20 overflow-hidden">
        <h1
          className="fade-in text-[72px] md:text-[120px] font-black text-white
            uppercase leading-none"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          ABOUT ME
        </h1>
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — Photo */}
        <div className="fade-in relative">
          <div
            className="aspect-[4/5] bg-[#1c1b1b] overflow-hidden relative"
            style={{
              border: "12px solid #201f1f",
              boxShadow: "12px 12px 0px 0px rgba(255,255,255,0.1)",
            }}
          >
            <img
              src="/assets/om_photo.jpg"
              alt="Om Naitam Portrait"
              className="w-full h-full object-cover grayscale contrast-125
                hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Floating stickers */}

          {/* 18 Years Old — green */}
          <div
            className="absolute -top-6 -left-6"
            style={{ animation: "float 4s ease-in-out infinite", animationDelay: "0s" }}
          >
            <span
              className="inline-block bg-[#00ff88] text-black font-black text-xl
                px-6 py-2 border-2 border-black cursor-default
                hover:scale-110 transition-transform"
              style={{
                fontFamily: "Anton, sans-serif",
                transform: "rotate(-3deg)",
                boxShadow: "6px 6px 0px 0px #000",
              }}
            >
              18 Years Old
            </span>
          </div>

          {/* Nagpur, India — cyan */}
          <div
            className="absolute top-1/2 -right-10"
            style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}
          >
            <span
              className="inline-block bg-[#00e5ff] text-black font-black text-xl
                px-6 py-2 border-2 border-black cursor-default
                hover:scale-110 transition-transform"
              style={{
                fontFamily: "Anton, sans-serif",
                transform: "rotate(5deg)",
                boxShadow: "6px 6px 0px 0px #000",
              }}
            >
              Nagpur, India
            </span>
          </div>

          {/* KITS Ramtek — orange */}
          <div
            className="absolute -bottom-4 -left-2"
            style={{ animation: "float 4s ease-in-out infinite", animationDelay: "2s" }}
          >
            <span
              className="inline-block bg-[#ff8a00] text-black font-black text-xl
                px-6 py-2 border-2 border-black cursor-default
                hover:scale-110 transition-transform"
              style={{
                fontFamily: "Anton, sans-serif",
                transform: "rotate(-2deg)",
                boxShadow: "6px 6px 0px 0px #000",
              }}
            >
              KITS Ramtek
            </span>
          </div>
        </div>

        {/* RIGHT — Bio */}
        <div
          className="fade-in flex flex-col gap-8"
          style={{ transitionDelay: "0.2s" }}
        >
          <div
            className="bg-[#353434] border-2 border-white p-8 md:p-12
              relative overflow-hidden"
            style={{ boxShadow: "6px 6px 0px 0px #000" }}
          >
            {/* Yellow left accent bar */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ffea00]" />

            <p className="font-['Hanken_Grotesk'] text-lg text-white leading-relaxed">
              I'm{" "}
              <span className="text-[#ffea00] font-bold uppercase">
                Om Naitam
              </span>{" "}
              — 1st Year B.Tech Computer Technology student at KITS Ramtek,
              Nagpur.
            </p>

            <p className="font-['Hanken_Grotesk'] text-lg text-white leading-relaxed mt-6">
              I specialize in{" "}
              <span className="bg-white text-black px-2 font-bold">
                Vibe Coding
              </span>{" "}
              — building AI-powered products fast using Claude AI, Bolt.new &
              Flask.
            </p>

            <p className="font-['Hanken_Grotesk'] text-lg text-white leading-relaxed mt-6">
              Won 2 prizes for AI projects at college level. Open for freelance
              collaborations.
            </p>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 bg-white text-black
                  font-black text-2xl px-10 py-4 uppercase
                  transition-all duration-100 group
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  active:translate-x-[6px] active:translate-y-[6px]"
                style={{
                  fontFamily: "Anton, sans-serif",
                  boxShadow: "6px 6px 0px 0px #000",
                }}
              >
                LET'S BUILD
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Open for Freelance badge */}
            <div className="mt-12 flex justify-end">
              <span
                className="inline-block bg-[#ffea00] text-black font-mono text-sm
                  px-4 py-2 border-2 border-black"
                style={{
                  boxShadow: "6px 6px 0px 0px #000",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                OPEN FOR FREELANCE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS GRID ── */}
      <div
        className="fade-in mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        style={{ transitionDelay: "0.4s" }}
      >
        {[
          { value: "2", label: "Prizes Won", color: "#00ff88" },
          { value: "3+", label: "Projects Built", color: "#00e5ff" },
          { value: "1st", label: "Year B.Tech", color: "#ff8a00" },
          { value: "2029", label: "Graduation", color: "#ffea00" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#141313] border-2 border-white/20 p-8
              flex flex-col items-center justify-center text-center
              hover:bg-[#353434] transition-colors group cursor-default"
          >
            <span
              className="font-black text-5xl group-hover:scale-110
                transition-transform block"
              style={{
                fontFamily: "Anton, sans-serif",
                color: stat.color,
              }}
            >
              {stat.value}
            </span>
            <span className="font-mono text-sm uppercase mt-2 text-white/70 tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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

export default About;